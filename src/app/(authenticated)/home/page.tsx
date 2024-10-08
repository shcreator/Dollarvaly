'use client'

import { Typography, Button, Card, List, Space } from 'antd'
import { DollarOutlined, HistoryOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function HomePage() {
  const router = useRouter()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const { data: latestRates, isLoading: isLoadingRates } =
    Api.exchangeRate.findMany.useQuery({
      orderBy: { dateCreated: 'desc' },
      take: 5,
      include: { baseCurrency: true, targetCurrency: true },
    })

  const { data: recentExchanges, isLoading: isLoadingExchanges } =
    Api.exchangeOrder.findMany.useQuery({
      where: { userId: user?.id },
      orderBy: { dateCreated: 'desc' },
      take: 5,
      include: { fromCurrency: true, toCurrency: true },
    })

  const handleStartExchange = () => {
    router.push('/exchange/start')
  }

  return (
    <PageLayout layout="narrow">
      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <Title level={2}>Exchange Dashboard</Title>
        <Text>
          Welcome to your exchange dashboard. Here you can view the latest
          exchange rates and your recent exchanges.
        </Text>

        <Card title="Latest Exchange Rates" loading={isLoadingRates}>
          <List
            dataSource={latestRates}
            renderItem={rate => (
              <List.Item>
                <Text>
                  {rate.baseCurrency?.code} to {rate.targetCurrency?.code}:{' '}
                  {rate.rate?.toFixed(4)}
                </Text>
                <Text type="secondary">
                  {' '}
                  - {dayjs(rate.dateCreated).format('YYYY-MM-DD HH:mm')}
                </Text>
              </List.Item>
            )}
          />
        </Card>

        <Card title="Recent Exchanges" loading={isLoadingExchanges}>
          <List
            dataSource={recentExchanges}
            renderItem={exchange => (
              <List.Item>
                <Text>
                  {exchange.amountFrom?.toFixed(2)}{' '}
                  {exchange.fromCurrency?.code} to{' '}
                  {exchange.amountTo?.toFixed(2)} {exchange.toCurrency?.code}
                </Text>
                <Text type="secondary">
                  {' '}
                  - {dayjs(exchange.dateCreated).format('YYYY-MM-DD HH:mm')}
                </Text>
              </List.Item>
            )}
          />
        </Card>

        <Button
          type="primary"
          icon={<DollarOutlined />}
          onClick={handleStartExchange}
          size="large"
        >
          Start New Exchange
        </Button>

        <Button
          icon={<HistoryOutlined />}
          onClick={() => router.push('/exchange/history')}
          size="large"
        >
          View Exchange History
        </Button>
      </Space>
    </PageLayout>
  )
}
