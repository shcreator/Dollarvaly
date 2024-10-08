'use client'
import { LandingCTA } from '@/designSystem/landing/LandingCTA'
import { LandingContainer } from '@/designSystem/landing/LandingContainer'
import LandingFAQ from '@/designSystem/landing/LandingFAQ'
import { LandingFeatures } from '@/designSystem/landing/LandingFeatures'
import { LandingHero } from '@/designSystem/landing/LandingHero'
import { LandingHowItWorks } from '@/designSystem/landing/LandingHowItWorks'
import { LandingPainPoints } from '@/designSystem/landing/LandingPainPoints'
import { LandingPricing } from '@/designSystem/landing/LandingPricing'
import { LandingSocialProof } from '@/designSystem/landing/LandingSocialProof'
import { LandingSocialRating } from '@/designSystem/landing/LandingSocialRating'
import { LandingTestimonials } from '@/designSystem/landing/LandingTestimonials'
import {
  DollarOutlined,
  SwapOutlined,
  GlobalOutlined,
  SafetyOutlined,
  RocketOutlined,
  CustomerServiceOutlined,
} from '@ant-design/icons'

export default function LandingPage() {
  const features = [
    {
      heading: `Seamless Crypto-Fiat Exchanges`,
      description: `Effortlessly convert between cryptocurrencies and local currencies with our intuitive platform.`,
      icon: <SwapOutlined />,
    },
    {
      heading: `Real-Time Exchange Rates`,
      description: `Stay informed with up-to-the-minute cryptocurrency pricing for smarter trading decisions.`,
      icon: <DollarOutlined />,
    },
    {
      heading: `Global Accessibility`,
      description: `Access our platform from anywhere, anytime, and trade with users worldwide.`,
      icon: <GlobalOutlined />,
    },
    {
      heading: `Enhanced Security`,
      description: `Rest easy with our state-of-the-art security measures protecting your digital assets.`,
      icon: <SafetyOutlined />,
    },
    {
      heading: `Fast Transactions`,
      description: `Experience lightning-fast trades and transfers, keeping you ahead in the crypto market.`,
      icon: <RocketOutlined />,
    },
    {
      heading: `24/7 Support`,
      description: `Get expert assistance anytime with our round-the-clock customer support team.`,
      icon: <CustomerServiceOutlined />,
    },
  ]

  const testimonials = [
    {
      name: `Rahul Sharma`,
      designation: `Crypto Enthusiast`,
      content: `This platform has revolutionized how I trade cryptocurrencies. The local payment integrations are a game-changer!`,
      avatar: 'https://randomuser.me/api/portraits/men/5.jpg',
    },
    {
      name: `Priya Patel`,
      designation: `Small Business Owner`,
      content: `I've been able to expand my business internationally thanks to the easy crypto conversions. Highly recommended!`,
      avatar: 'https://randomuser.me/api/portraits/women/6.jpg',
    },
    {
      name: `Mohammed Ali`,
      designation: `Freelance Developer`,
      content: `The real-time exchange rates and fast transactions have made managing my international clients' payments a breeze.`,
      avatar: 'https://randomuser.me/api/portraits/men/7.jpg',
    },
    {
      name: `Sarah Khan`,
      designation: `Investment Advisor`,
      content: `I trust this platform for all my crypto trading needs. The security features give me peace of mind for my clients' investments.`,
      avatar: 'https://randomuser.me/api/portraits/women/12.jpg',
    },
    {
      name: `Amit Gupta`,
      designation: `Tech Entrepreneur`,
      content: `As a startup founder, this platform has been crucial in managing our international transactions efficiently.`,
      avatar: 'https://randomuser.me/api/portraits/men/17.jpg',
    },
    {
      name: `Fatima Rahman`,
      designation: `Student`,
      content: `The user-friendly interface made it easy for me to start trading crypto. It's perfect for beginners!`,
      avatar: 'https://randomuser.me/api/portraits/women/27.jpg',
    },
  ]

  const navItems = [
    {
      title: `Features`,
      link: `#features`,
    },
    {
      title: `Pricing`,
      link: `#pricing`,
    },
    {
      title: `FAQ`,
      link: `#faq`,
    },
  ]

  const packages = [
    {
      title: `Basic`,
      description: `Perfect for beginners`,
      monthly: 9,
      yearly: 99,
      features: [
        `Standard exchange rates`,
        `Basic customer support`,
        `Limited daily transactions`,
      ],
    },
    {
      title: `Pro`,
      description: `Ideal for active traders`,
      monthly: 29,
      yearly: 319,
      features: [
        `Premium exchange rates`,
        `Priority customer support`,
        `Increased daily transaction limits`,
        `Advanced trading tools`,
      ],
      highlight: true,
    },
    {
      title: `Enterprise`,
      description: `For high-volume traders`,
      monthly: 99,
      yearly: 1089,
      features: [
        `Best-in-class exchange rates`,
        `24/7 dedicated support`,
        `Unlimited daily transactions`,
        `Custom integration options`,
      ],
    },
  ]

  const questionAnswers = [
    {
      question: `How secure is the platform?`,
      answer: `We employ state-of-the-art security measures, including multi-factor authentication, cold storage for funds, and regular security audits to ensure the safety of your assets.`,
    },
    {
      question: `What cryptocurrencies do you support?`,
      answer: `We support a wide range of cryptocurrencies including Bitcoin, Ethereum, USDT, and many others. We're constantly adding new options based on market demand and regulatory compliance.`,
    },
    {
      question: `How long do transactions take?`,
      answer: `Most transactions are processed within minutes. However, the exact time can vary depending on network congestion and the type of transaction.`,
    },
    {
      question: `Are there any geographic restrictions?`,
      answer: `While we strive to provide our services globally, some features may be restricted in certain jurisdictions due to local regulations. Please check our terms of service for more details.`,
    },
  ]

  const logos = [
    { url: 'https://i.imgur.com/afwBIFK.png' },
    { url: 'https://i.imgur.com/LlloOPa.png' },
    { url: 'https://i.imgur.com/j8jPb4H.png' },
    { url: 'https://i.imgur.com/mJ1sZFv.png' },
  ]

  const steps = [
    {
      heading: `Create Your Account`,
      description: `Sign up in minutes with our simple registration process.`,
    },
    {
      heading: `Verify Your Identity`,
      description: `Complete our secure KYC process to unlock full trading capabilities.`,
    },
    {
      heading: `Fund Your Wallet`,
      description: `Deposit funds using various local and international payment methods.`,
    },
    {
      heading: `Start Trading`,
      description: `Buy, sell, and exchange cryptocurrencies with ease.`,
    },
  ]

  const painPoints = [
    {
      emoji: `😓`,
      title: `Struggling with complex crypto platforms`,
    },
    {
      emoji: `💸`,
      title: `Losing money on high fees and poor exchange rates`,
    },
    {
      emoji: `🕒`,
      title: `Wasting time on slow transactions and customer support`,
    },
  ]

  const avatarItems = [
    {
      src: 'https://randomuser.me/api/portraits/men/51.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/women/9.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/women/52.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/men/5.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/men/4.jpg',
    },
  ]

  return (
    <LandingContainer navItems={navItems}>
      <LandingHero
        title={`Unlock the Power of Global Crypto Trading`}
        subtitle={`Join millions in the digital economy revolution. Exchange cryptocurrencies and fiat with ease, security, and speed.`}
        buttonText={`Start Trading Now`}
        pictureUrl={`https://marblism-dashboard-api--production-public.s3.us-west-1.amazonaws.com/698V82-dollarvaly-Gggq`}
        socialProof={
          <LandingSocialRating
            avatarItems={avatarItems}
            numberOfUsers={1000}
            suffixText={`from happy traders`}
          />
        }
      />
      <LandingSocialProof
        logos={logos}
        title={`Trusted by Leading Crypto News Outlets`}
      />
      <LandingPainPoints
        title={`Don't Let Crypto Complexities Hold You Back`}
        painPoints={painPoints}
      />
      <LandingHowItWorks
        title={`Your Journey to Crypto Success Starts Here`}
        steps={steps}
      />
      <LandingFeatures
        id="features"
        title={`Empower Your Crypto Journey with Our Cutting-Edge Features`}
        subtitle={`Discover how our platform makes cryptocurrency trading accessible, secure, and profitable for everyone.`}
        features={features}
      />
      <LandingTestimonials
        title={`Real Stories from Satisfied Traders`}
        subtitle={`See how our platform is changing lives and businesses across the globe.`}
        testimonials={testimonials}
      />
      <LandingPricing
        id="pricing"
        title={`Choose the Perfect Plan for Your Crypto Adventure`}
        subtitle={`From casual traders to high-volume investors, we have a solution tailored for you.`}
        packages={packages}
      />
      <LandingFAQ
        id="faq"
        title={`Got Questions? We've Got Answers`}
        subtitle={`Find quick solutions to common queries about our platform and services.`}
        questionAnswers={questionAnswers}
      />
      <LandingCTA
        title={`Ready to Revolutionize Your Crypto Trading?`}
        subtitle={`Join thousands of satisfied users and start your journey to financial freedom today.`}
        buttonText={`Create Your Account Now`}
        buttonLink={`/register`}
      />
    </LandingContainer>
  )
}
