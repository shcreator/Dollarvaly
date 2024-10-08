'use client'

import { Typography, Table, Card, Row, Col, Spin } from 'antd'
import { DollarOutlined, BarChartOutlined } from '@ant-design/icons'
const { Title, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function RatesPage() {
  const router = useRouter()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const { data: exchangeRates, isLoading: isLoadingRates } =
    Api.exchangeRate.findMany.useQuery({
      include: { baseCurrency: true, targetCurrency: true },
    })

  const { data: reserves, isLoading: isLoadingReserves } =
    Api.reserve.findMany.useQuery({
      include: { currency: true },
    })

  const ratesColumns = [
    {
      title: 'Base Currency',
      dataIndex: ['baseCurrency', 'code'],
      key: 'baseCurrency',
    },
    {
      title: 'Target Currency',
      dataIndex: ['targetCurrency', 'code'],
      key: 'targetCurrency',
    },
    {
      title: 'Exchange Rate',
      dataIndex: 'rate',
      key: 'rate',
      render: (rate: number) => rate?.toFixed(4),
    },
  ]

  const reservesColumns = [
    {
      title: 'Currency',
      dataIndex: ['currency', 'code'],
      key: 'currency',
    },
    {
      title: 'Reserve Amount',
      dataIndex: 'amount',
      key: 'amount',
      render: (amount: number) => amount?.toFixed(2),
    },
  ]

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Exchange Rates and Reserves</Title>
      <Paragraph>
        View current exchange rates for various cryptocurrencies and check
        reserve balances for different currencies.
      </Paragraph>

      <Row gutter={[16, 16]}>
        <Col xs={24} md={12}>
          <Card
            title={
              <>
                <BarChartOutlined /> Exchange Rates
              </>
            }
          >
            {isLoadingRates ? (
              <Spin />
            ) : (
              <Table
                dataSource={exchangeRates}
                columns={ratesColumns}
                rowKey="id"
                pagination={false}
                scroll={{ x: true }}
              />
            )}
          </Card>
        </Col>
        <Col xs={24} md={12}>
          <Card
            title={
              <>
                <DollarOutlined /> Currency Reserves
              </>
            }
          >
            {isLoadingReserves ? (
              <Spin />
            ) : (
              <Table
                dataSource={reserves}
                columns={reservesColumns}
                rowKey="id"
                pagination={false}
                scroll={{ x: true }}
              />
            )}
          </Card>
        </Col>
      </Row>
    </PageLayout>
  )
}
