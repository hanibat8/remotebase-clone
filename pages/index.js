import Head from 'next/head'
import CompaniesSection from '../components/landingPage/CompaniesSection'
import FooterSection from '../components/landingPage/FooterSection'
import GlobalSection from '../components/landingPage/GlobalSection'
import HeaderSection from '../components/landingPage/HeaderSection'
import HiringProcessSection from '../components/landingPage/HiringProcessSection'
import StepsSection from '../components/landingPage/StepsSection'
import TechStacksSection from '../components/landingPage/TechStacksSection'
import Testimonials from '../components/landingPage/TestimonialsSection'
import ValuesSection from '../components/landingPage/ValuesSection'
import VettingSection from '../components/landingPage/VettingSection'
import WhyChooseSection from '../components/landingPage/WhyChooseSection'
import WhyDevelopersLoveSection from '../components/landingPage/WhyDevelopersLoveSection'

export default function Home() {
  return (
    <>
      <Head>
        <title>Remote Base</title>
        <meta name="description" content="Hire remote developers" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className=" mx-auto font-serif">
        <HeaderSection/>
        <CompaniesSection/>
        <HiringProcessSection/>
        <TechStacksSection/>
        <GlobalSection/>
        <VettingSection/>
        <StepsSection/>
        <WhyChooseSection/>
        <ValuesSection/>
        <WhyDevelopersLoveSection/>
        <Testimonials/>
        <FooterSection/>
      </div>
    </>
  )
}
