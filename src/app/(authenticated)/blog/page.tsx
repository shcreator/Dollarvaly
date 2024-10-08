'use client'

import { Typography, List, Card, Space, Row, Col } from 'antd'
import {
  ReadOutlined,
  UserOutlined,
  ClockCircleOutlined,
} from '@ant-design/icons'
const { Title, Text, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function BlogPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const { data: blogPosts, isLoading } = Api.blogPost.findMany.useQuery({
    include: { author: true },
    orderBy: { timestamp: 'desc' },
  })

  const handleReadPost = (postId: string) => {
    router.push(`/blog/${postId}`)
  }

  return (
    <PageLayout layout="narrow">
      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <Title level={1}>Blog Posts</Title>
        <Paragraph>Discover interesting articles on various topics.</Paragraph>

        {isLoading ? (
          <Text>Loading blog posts...</Text>
        ) : (
          <List
            grid={{ gutter: 16, xs: 1, sm: 2, md: 2, lg: 2, xl: 3, xxl: 3 }}
            dataSource={blogPosts}
            renderItem={post => (
              <List.Item>
                <Card
                  hoverable
                  cover={
                    post.imageUrl && (
                      <img alt={post.title} src={post.imageUrl} />
                    )
                  }
                  onClick={() => handleReadPost(post.id)}
                >
                  <Card.Meta
                    title={post.title}
                    description={
                      <Space direction="vertical">
                        <Row gutter={8}>
                          <Col>
                            <UserOutlined />{' '}
                            {post.author?.name || 'Unknown Author'}
                          </Col>
                          <Col>
                            <ClockCircleOutlined />{' '}
                            {dayjs(post.timestamp).format('MMMM D, YYYY')}
                          </Col>
                        </Row>
                        <Paragraph ellipsis={{ rows: 2 }}>
                          {post.content}
                        </Paragraph>
                        <Text type="secondary">
                          <ReadOutlined /> Read more
                        </Text>
                      </Space>
                    }
                  />
                </Card>
              </List.Item>
            )}
          />
        )}
      </Space>
    </PageLayout>
  )
}
