'use client'

import { useState } from 'react'
import {
  Typography,
  Tabs,
  Form,
  Input,
  Button,
  Table,
  Modal,
  InputNumber,
  Select,
} from 'antd'
import {
  ExclamationCircleOutlined,
  EditOutlined,
  DeleteOutlined,
} from '@ant-design/icons'
const { Title, Text } = Typography
const { TabPane } = Tabs
const { confirm } = Modal
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function AdminDashboardPage() {
  const router = useRouter()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const [activeTab, setActiveTab] = useState('1')

  // Exchange Rates
  const { data: exchangeRates, refetch: refetchExchangeRates } =
    Api.exchangeRate.findMany.useQuery({})
  const { mutateAsync: updateExchangeRate } =
    Api.exchangeRate.update.useMutation()

  // User Orders
  const { data: exchangeOrders, refetch: refetchExchangeOrders } =
    Api.exchangeOrder.findMany.useQuery({
      include: { user: true, fromCurrency: true, toCurrency: true },
    })
  const { mutateAsync: updateExchangeOrder } =
    Api.exchangeOrder.update.useMutation()

  // User Accounts
  const { data: users, refetch: refetchUsers } = Api.user.findMany.useQuery({})
  const { mutateAsync: updateUser } = Api.user.update.useMutation()

  // Blog Posts
  const { data: blogPosts, refetch: refetchBlogPosts } =
    Api.blogPost.findMany.useQuery({})
  const { mutateAsync: createBlogPost } = Api.blogPost.create.useMutation()
  const { mutateAsync: updateBlogPost } = Api.blogPost.update.useMutation()
  const { mutateAsync: deleteBlogPost } = Api.blogPost.delete.useMutation()

  const handleUpdateExchangeRate = async (id: string, newRate: number) => {
    try {
      await updateExchangeRate({ where: { id }, data: { rate: newRate } })
      enqueueSnackbar('Exchange rate updated successfully', {
        variant: 'success',
      })
      refetchExchangeRates()
    } catch (error) {
      enqueueSnackbar('Failed to update exchange rate', { variant: 'error' })
    }
  }

  const handleUpdateOrderStatus = async (id: string, newStatus: string) => {
    try {
      await updateExchangeOrder({ where: { id }, data: { status: newStatus } })
      enqueueSnackbar('Order status updated successfully', {
        variant: 'success',
      })
      refetchExchangeOrders()
    } catch (error) {
      enqueueSnackbar('Failed to update order status', { variant: 'error' })
    }
  }

  const handleUpdateUserBalance = async (id: string, newBalance: number) => {
    try {
      await updateUser({ where: { id }, data: { balance: newBalance } })
      enqueueSnackbar('User balance updated successfully', {
        variant: 'success',
      })
      refetchUsers()
    } catch (error) {
      enqueueSnackbar('Failed to update user balance', { variant: 'error' })
    }
  }

  const handleCreateBlogPost = async (values: any) => {
    try {
      await createBlogPost({
        data: {
          ...values,
          authorId: user?.id,
          timestamp: new Date().toISOString(),
        },
      })
      enqueueSnackbar('Blog post created successfully', { variant: 'success' })
      refetchBlogPosts()
    } catch (error) {
      enqueueSnackbar('Failed to create blog post', { variant: 'error' })
    }
  }

  const handleUpdateBlogPost = async (id: string, values: any) => {
    try {
      await updateBlogPost({ where: { id }, data: values })
      enqueueSnackbar('Blog post updated successfully', { variant: 'success' })
      refetchBlogPosts()
    } catch (error) {
      enqueueSnackbar('Failed to update blog post', { variant: 'error' })
    }
  }

  const handleDeleteBlogPost = (id: string) => {
    confirm({
      title: 'Are you sure you want to delete this blog post?',
      icon: <ExclamationCircleOutlined />,
      content: 'This action cannot be undone.',
      onOk: async () => {
        try {
          await deleteBlogPost({ where: { id } })
          enqueueSnackbar('Blog post deleted successfully', {
            variant: 'success',
          })
          refetchBlogPosts()
        } catch (error) {
          enqueueSnackbar('Failed to delete blog post', { variant: 'error' })
        }
      },
    })
  }

  const exchangeRateColumns = [
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
    { title: 'Rate', dataIndex: 'rate', key: 'rate' },
    {
      title: 'Action',
      key: 'action',
      render: (text: string, record: any) => (
        <InputNumber
          defaultValue={record.rate}
          onChange={value =>
            handleUpdateExchangeRate(record.id, value as number)
          }
        />
      ),
    },
  ]

  const orderColumns = [
    { title: 'User', dataIndex: ['user', 'name'], key: 'user' },
    {
      title: 'From Currency',
      dataIndex: ['fromCurrency', 'code'],
      key: 'fromCurrency',
    },
    {
      title: 'To Currency',
      dataIndex: ['toCurrency', 'code'],
      key: 'toCurrency',
    },
    { title: 'Amount From', dataIndex: 'amountFrom', key: 'amountFrom' },
    { title: 'Amount To', dataIndex: 'amountTo', key: 'amountTo' },
    { title: 'Status', dataIndex: 'status', key: 'status' },
    {
      title: 'Action',
      key: 'action',
      render: (text: string, record: any) => (
        <Select
          defaultValue={record.status}
          onChange={value => handleUpdateOrderStatus(record.id, value)}
        >
          <Select.Option value="pending">Pending</Select.Option>
          <Select.Option value="completed">Completed</Select.Option>
          <Select.Option value="cancelled">Cancelled</Select.Option>
        </Select>
      ),
    },
  ]

  const userColumns = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Email', dataIndex: 'email', key: 'email' },
    { title: 'Status', dataIndex: 'status', key: 'status' },
    { title: 'Global Role', dataIndex: 'globalRole', key: 'globalRole' },
    {
      title: 'Action',
      key: 'action',
      render: (text: string, record: any) => (
        <InputNumber
          defaultValue={record.balance}
          onChange={value =>
            handleUpdateUserBalance(record.id, value as number)
          }
        />
      ),
    },
  ]

  const blogPostColumns = [
    { title: 'Title', dataIndex: 'title', key: 'title' },
    { title: 'Content', dataIndex: 'content', key: 'content', ellipsis: true },
    {
      title: 'Date',
      dataIndex: 'timestamp',
      key: 'timestamp',
      render: (text: string) => dayjs(text).format('YYYY-MM-DD HH:mm'),
    },
    {
      title: 'Action',
      key: 'action',
      render: (text: string, record: any) => (
        <>
          <Button
            icon={<EditOutlined />}
            onClick={() =>
              handleUpdateBlogPost(record.id, {
                title: 'Updated Title',
                content: 'Updated Content',
              })
            }
          />
          <Button
            icon={<DeleteOutlined />}
            onClick={() => handleDeleteBlogPost(record.id)}
          />
        </>
      ),
    },
  ]

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Admin Dashboard</Title>
      <Text>
        Manage exchange rates, user orders, user accounts, and blog posts.
      </Text>

      <Tabs activeKey={activeTab} onChange={setActiveTab}>
        <TabPane tab="Exchange Rates" key="1">
          <Table
            dataSource={exchangeRates}
            columns={exchangeRateColumns}
            rowKey="id"
          />
        </TabPane>
        <TabPane tab="User Orders" key="2">
          <Table
            dataSource={exchangeOrders}
            columns={orderColumns}
            rowKey="id"
          />
        </TabPane>
        <TabPane tab="User Accounts" key="3">
          <Table dataSource={users} columns={userColumns} rowKey="id" />
        </TabPane>
        <TabPane tab="Blog Posts" key="4">
          <Form onFinish={handleCreateBlogPost}>
            <Form.Item name="title" rules={[{ required: true }]}>
              <Input placeholder="Blog post title" />
            </Form.Item>
            <Form.Item name="content" rules={[{ required: true }]}>
              <Input.TextArea placeholder="Blog post content" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Create Blog Post
              </Button>
            </Form.Item>
          </Form>
          <Table dataSource={blogPosts} columns={blogPostColumns} rowKey="id" />
        </TabPane>
      </Tabs>
    </PageLayout>
  )
}
