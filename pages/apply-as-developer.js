import Head from 'next/head'
import React from 'react'
import HeaderSection from '../components/applyAsDevelopersPage/HeaderSection'
import Navbar from '../components/applyAsDevelopersPage/Navbar'
import LookingForSkills from '../components/applyAsDevelopersPage/LookingForSkillsSection'
import RemoteJobsSection from '../components/applyAsDevelopersPage/RemoteJobsSection'
import RealiseYourFutureSection from '../components/applyAsDevelopersPage/RealiseYourFutureSection'
import WhyJoinSection from '../components/applyAsDevelopersPage/WhyJoinSection'
import TraitsSection from '../components/applyAsDevelopersPage/TraitsSection'
import DevelopersRemotebase from '../components/applyAsDevelopersPage/DevelopersRemotebaseSection'
import GetStartedSection from '../components/applyAsDevelopersPage/GetStartedSection'
import FAQsSection from '../components/applyAsDevelopersPage/FAQsSection'
import FooterSection from '../components/applyAsDevelopersPage/FooterSection'

const apply_as_developer = () => {
    return (
        <>
          <Head>
            <title>Remote Base</title>
            <meta name="description" content="Hire remote developers" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <div className=" mx-auto font-serif">
            <Navbar/>
            <HeaderSection/>
            <LookingForSkills/>
            <RemoteJobsSection/>
            <RealiseYourFutureSection/>
            <WhyJoinSection/>
            <TraitsSection/>
            <DevelopersRemotebase/>
            <GetStartedSection/>
            <FAQsSection/>
            <FooterSection/>
          </div>
        </>
    )
}

export default apply_as_developer