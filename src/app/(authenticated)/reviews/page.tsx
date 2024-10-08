'use client'

import { Typography, List, Rate, Input, Button, Form, Space } from 'antd'
import { CommentOutlined, StarOutlined } from '@ant-design/icons'
import { useState } from 'react'
const { Title, Text, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function ReviewsPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()
  const [form] = Form.useForm()

  const {
    data: reviews,
    isLoading,
    refetch,
  } = Api.review.findMany.useQuery({
    include: { user: true, reviewer: true },
    orderBy: { dateCreated: 'desc' },
  })

  const { mutateAsync: createReview } = Api.review.create.useMutation()

  const [submitting, setSubmitting] = useState(false)

  const handleSubmitReview = async (values: {
    rating: number
    comment: string
  }) => {
    if (!user) {
      enqueueSnackbar('Please log in to submit a review', { variant: 'error' })
      return
    }

    setSubmitting(true)
    try {
      await createReview({
        data: {
          rating: values.rating,
          comment: values.comment,
          timestamp: new Date().toISOString(),
          userId: user.id,
          reviewerId: user.id,
        },
      })
      enqueueSnackbar('Review submitted successfully', { variant: 'success' })
      form.resetFields()
      refetch()
    } catch (error) {
      enqueueSnackbar('Failed to submit review', { variant: 'error' })
    }
    setSubmitting(false)
  }

  return (
    <PageLayout layout="narrow">
      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <Title level={2}>User Reviews</Title>
        <Paragraph>
          Read reviews from other users and share your own experience with our
          platform.
        </Paragraph>

        <Form form={form} onFinish={handleSubmitReview} layout="vertical">
          <Form.Item
            name="rating"
            label="Rating"
            rules={[{ required: true, message: 'Please rate' }]}
          >
            <Rate />
          </Form.Item>
          <Form.Item
            name="comment"
            label="Your Review"
            rules={[{ required: true, message: 'Please enter your review' }]}
          >
            <Input.TextArea rows={4} />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              icon={<CommentOutlined />}
              loading={submitting}
            >
              Submit Review
            </Button>
          </Form.Item>
        </Form>

        <List
          loading={isLoading}
          itemLayout="vertical"
          dataSource={reviews}
          renderItem={review => (
            <List.Item
              key={review.id}
              actions={[
                <Space key="rating">
                  <StarOutlined />
                  {review.rating?.toString()}
                </Space>,
                <Text key="date" type="secondary">
                  {dayjs(review.dateCreated).format('MMMM D, YYYY')}
                </Text>,
              ]}
            >
              <List.Item.Meta
                title={review.reviewer?.name || 'Anonymous'}
                description={review.comment}
              />
            </List.Item>
          )}
        />
      </Space>
    </PageLayout>
  )
}
