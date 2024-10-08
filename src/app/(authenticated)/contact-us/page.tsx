'use client'

import { Typography, Form, Input, Button, Row, Col, Card } from 'antd'
import {
  PhoneOutlined,
  MailOutlined,
  EnvironmentOutlined,
  SendOutlined,
} from '@ant-design/icons'
const { Title, Text, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function ContactUsPage() {
  const router = useRouter()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const [form] = Form.useForm()

  const { mutateAsync: sendMessage } = Api.message.create.useMutation()

  const onFinish = async (values: { content: string }) => {
    try {
      await sendMessage({
        data: {
          content: values.content,
          readStatus: false,
          timestamp: new Date().toISOString(),
          senderId: user?.id || '',
          receiverId: 'admin', // Assuming there's an admin user to receive messages
        },
      })
      enqueueSnackbar('Message sent successfully', { variant: 'success' })
      form.resetFields()
    } catch (error) {
      enqueueSnackbar('Failed to send message', { variant: 'error' })
    }
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Contact Us</Title>
      <Paragraph>
        We're here to help! Please find our contact information below or send us
        a message.
      </Paragraph>

      <Row gutter={[16, 16]} justify="center">
        <Col xs={24} md={12}>
          <Card title="Contact Information">
            <Paragraph>
              <PhoneOutlined /> Phone: +1 (123) 456-7890
            </Paragraph>
            <Paragraph>
              <MailOutlined /> Email: support@example.com
            </Paragraph>
            <Paragraph>
              <EnvironmentOutlined /> Address: 123 Main St, City, Country
            </Paragraph>
          </Card>
        </Col>
        <Col xs={24} md={12}>
          <Card title="Send us a message">
            <Form form={form} onFinish={onFinish} layout="vertical">
              <Form.Item
                name="content"
                rules={[
                  { required: true, message: 'Please enter your message' },
                ]}
              >
                <Input.TextArea rows={4} placeholder="Your message" />
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  icon={<SendOutlined />}
                >
                  Send Message
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    </PageLayout>
  )
}
