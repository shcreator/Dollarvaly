'use client'

import { Typography, Table, Space, Tag } from 'antd'
import { HistoryOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function ExchangeHistoryPage() {
  const router = useRouter()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const { data: exchangeOrders, isLoading } =
    Api.exchangeOrder.findMany.useQuery({
      where: { userId: user?.id },
      include: { fromCurrency: true, toCurrency: true },
      orderBy: { dateCreated: 'desc' },
    })

  const columns = [
    {
      title: 'Date',
      dataIndex: 'dateCreated',
      key: 'dateCreated',
      render: (date: string) => dayjs(date).format('YYYY-MM-DD HH:mm'),
    },
    {
      title: 'From',
      dataIndex: 'fromCurrency',
      key: 'fromCurrency',
      render: (currency: any, record: any) => (
        <Space>
          <Text>{record.amountFrom?.toString()}</Text>
          <Tag color="blue">{currency.code}</Tag>
        </Space>
      ),
    },
    {
      title: 'To',
      dataIndex: 'toCurrency',
      key: 'toCurrency',
      render: (currency: any, record: any) => (
        <Space>
          <Text>{record.amountTo?.toString()}</Text>
          <Tag color="green">{currency.code}</Tag>
        </Space>
      ),
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status: string) => (
        <Tag color={status === 'COMPLETED' ? 'success' : 'processing'}>
          {status}
        </Tag>
      ),
    },
  ]

  return (
    <PageLayout layout="narrow">
      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <Space align="center">
          <HistoryOutlined style={{ fontSize: '24px' }} />
          <Title level={2}>Exchange History</Title>
        </Space>
        <Text>
          View your past currency exchanges and track your transaction history.
        </Text>
        <Table
          dataSource={exchangeOrders}
          columns={columns}
          rowKey="id"
          loading={isLoading}
          pagination={{ pageSize: 10 }}
          scroll={{ x: true }}
        />
      </Space>
    </PageLayout>
  )
}
