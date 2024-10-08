'use client'

import { useState, useEffect } from 'react'
import { Typography, Select, InputNumber, Button, Form, Space } from 'antd'
import { SwapOutlined, DollarOutlined } from '@ant-design/icons'
const { Title, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function StartExchangePage() {
  const router = useRouter()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const [fromCurrency, setFromCurrency] = useState<string>('')
  const [toCurrency, setToCurrency] = useState<string>('')
  const [amount, setAmount] = useState<number | null>(null)
  const [exchangeRate, setExchangeRate] = useState<number | null>(null)

  const { data: currencies } = Api.currency.findMany.useQuery({})
  const { data: latestExchangeRates } = Api.exchangeRate.findMany.useQuery({
    orderBy: { timestamp: 'desc' },
    take: 1,
  })

  const { mutateAsync: createExchangeOrder } =
    Api.exchangeOrder.create.useMutation()

  useEffect(() => {
    if (
      fromCurrency &&
      toCurrency &&
      latestExchangeRates &&
      latestExchangeRates.length > 0
    ) {
      const rate = latestExchangeRates[0].rate
      setExchangeRate(rate || null)
    }
  }, [fromCurrency, toCurrency, latestExchangeRates])

  const handleExchange = async () => {
    if (!fromCurrency || !toCurrency || !amount || !exchangeRate) {
      enqueueSnackbar('Please fill in all fields', { variant: 'error' })
      return
    }

    try {
      await createExchangeOrder({
        data: {
          amountFrom: amount,
          amountTo: amount * exchangeRate,
          status: 'PENDING',
          timestamp: new Date().toISOString(),
          userId: user?.id || '',
          fromCurrencyId: fromCurrency,
          toCurrencyId: toCurrency,
          exchangeRateId: latestExchangeRates?.[0]?.id || '',
        },
      })
      enqueueSnackbar('Exchange request submitted successfully', {
        variant: 'success',
      })
      router.push('/exchange/history')
    } catch (error) {
      enqueueSnackbar('Failed to submit exchange request', { variant: 'error' })
    }
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Start Exchange</Title>
      <Paragraph>Select currencies and enter the amount to exchange.</Paragraph>

      <Form layout="vertical">
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          <Form.Item label="From Currency">
            <Select
              style={{ width: '100%' }}
              placeholder="Select currency"
              onChange={(value: string) => setFromCurrency(value)}
            >
              {currencies?.map(currency => (
                <Select.Option key={currency.id} value={currency.id}>
                  {currency.name} ({currency.code})
                </Select.Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item label="To Currency">
            <Select
              style={{ width: '100%' }}
              placeholder="Select currency"
              onChange={(value: string) => setToCurrency(value)}
            >
              {currencies?.map(currency => (
                <Select.Option key={currency.id} value={currency.id}>
                  {currency.name} ({currency.code})
                </Select.Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item label="Amount">
            <InputNumber
              style={{ width: '100%' }}
              placeholder="Enter amount"
              prefix={<DollarOutlined />}
              onChange={(value: number | null) => setAmount(value)}
            />
          </Form.Item>

          {exchangeRate && (
            <Paragraph>
              Exchange Rate: 1 {fromCurrency} = {exchangeRate.toFixed(4)}{' '}
              {toCurrency}
            </Paragraph>
          )}

          {amount && exchangeRate && (
            <Paragraph>
              You will receive: {(amount * exchangeRate).toFixed(2)}{' '}
              {toCurrency}
            </Paragraph>
          )}

          <Button
            type="primary"
            icon={<SwapOutlined />}
            onClick={handleExchange}
            disabled={!fromCurrency || !toCurrency || !amount}
          >
            Submit Exchange Request
          </Button>
        </Space>
      </Form>
    </PageLayout>
  )
}
