import MainHeading from '@/components/Headings/MainHeading'
import MainDescription from '@/components/MainDescription'
import { FlexWrapper, Wrapper } from '@/styles/styledComponents'
import PlayerCard from '@/components/PlayerCards/PlayerCard'
import SubHeading from '@/components/Headings/SubHeading'
import styles from './job.module.css'
import Image from 'next/image'
import JobCardList from '@/components/JobCards'
import { JobCardProps } from '@/components/JobCards/JobCard'
import PlanCardList from '@/components/PlanCards'
import { PlanCardProps } from '@/components/PlanCards/PlanCard'
import BlogList from '@/components/BlogCards'
import { BlogCardProps } from '@/components/BlogCards/BlogCard'
import CommunityHeading from '@/components/Community/CommunityHeading'
import CommunityList from '@/components/Community'
import { CommunityCardProps } from '@/components/Community/CommunityCard'
import FaqCard, { FaqCardProps } from '@/components/FaqCards/FaqCard'
import FaqCardList from '@/components/FaqCards'

const index = () => {
  const jobCardLists: JobCardProps[] = [
    { imageSrc: '/jobs/job1.png', title: 'Apply to become a pro player', description: `You live for adrenaline, exhilaration and the vastness of worlds beyond our own. You thrive on competition and, above all else, victory—defeating all who stand before you. Your life is larger than just you. You are a symbol of all that's right in the gaming world. An envy to others. A prodigy behind the screen. <br/> Are you ready to take your career as a pro gamer to the next level? The adrenaline-fueled thrill of a pro gamer is unlike virtually any job in the world. Get paid to train under-skilled players and join pro lobbies to challenge yourself and the players under your wing. <br/> Find out what it takes below our expectations of you and join our team.` },
    { imageSrc: '/jobs/job2.png', title: 'Who are we Looking for?', description: 'Introduce yourself to your players as a pro gamer. <br/> Each customer will need to be trained differently. Learn their needs and set up a gaming coaching session appropriately.<br/> Set goals for each player and guide them to accomplishing each one.<br/> Apex Legends ' },
    { imageSrc: '/jobs/job3.png', title: 'In-Game Protocol', description: 'Don’t ignore the player in-game. You’re here to help them (even if that means losing).<br/> When players are killed, cheer them up and reassure them that you’re on your way to resurrect them.<br/> Ensure the game doesn’t go silent. Speak for more than 40% of the match. <br/> Stay cool, control your emotions, and take the perspective of the player you’re training. <br/> Make jokes and tell stories at least 4 times per hour to keep the banter going. <br/> COD' },
    { imageSrc: '/jobs/job4.png', title: 'Stats Feedback', description: 'Compliment the player for making a kill or some generally awesome moves in-game. <br/> Analyze game results and make comparisons to previous games that show growth while you’re in the queue and after each session. <br/>Provide constructive feedback on mistakes. Always opt for discussion instead of silence.' },
  ]
  const planHandleClick = () => {
    console.log('plan clicked')
  }
  const planCardLists: PlanCardProps[] = [
    { rate: 'Free', planPeriod: 'Intro Lesson ', handleClick: planHandleClick, planDescription: 
      [ 'Get personalized package',
        'See how our program work',
        'Learn about our Community',
        'Have all your questions answered',
      ] },
    { rate: '$170/mo', planPeriod: '6 to 12 Month Program', handleClick: planHandleClick,
       planDescription: [
        '1:1 Coaching, VOD reviews and Group Practicing with a personal',
        'See how our program work',
        'Learn about our Community',
        'Have all your questions answered',
        'See how our program work',
        'Learn about our Community'
      ]},
    { rate: '$2000', planPeriod: '3-month Program', handleClick: planHandleClick,
      planDescription: [
        '1:1 Coaching, VOD reviews and Group Practicing with a personal',
        'See how our program work',
        'Learn about our Community',
        'Have all your questions answered',
        'See how our program work',
        'Learn about our Community'
      ]},
  ]
  const moreAboutPro: BlogCardProps[] = [
    { imageSrc: "/blog1.png", alt: "blog1", title: "70K Customers", description: "Connect with pros & creators. Collaborate, train, have fun. Level up skills, build lasting connections.", buttonHandleClick: () => {}},
    { imageSrc: "/blog2.png", alt: "blog2", title: "6K Professional Gamers", description: "Connect with pros & creators. Collaborate, train, have fun. Level up skills, build lasting connections.", buttonHandleClick: () => {}},
  ]

  const communityList: CommunityCardProps[] = [
    { imageSrc: 'community/community1.png', alt: 'community1', name: 'Jes', buttonLink: '/' },
    { imageSrc: 'community/community2.png', alt: 'community2', name: 'Alex', buttonLink: '/' },
    { imageSrc: 'community/community3.png', alt: 'community3', name: 'Paul', buttonLink: '/' },
  ]

  const faqCardList: FaqCardProps[] = [
    { question: 'How does the income guarantee work?', answer: 'We guarantee a minimum income for the first 6 months of your contract. If you don’t make that amount, we’ll pay you the difference.' },
    { question: 'How does the onboarding process and featuring work?', answer: 'We guarantee a minimum income for the first 6 months of your contract. If you don’t make that amount, we’ll pay you the difference.' },
    { question: 'Can OUTGO be redeemed on a mobile device?', answer: 'We guarantee a minimum income for the first 6 months of your contract. If you don’t make that amount, we’ll pay you the difference.'},
    { question: 'What are the terms of refunds?', answer: 'We guarantee a minimum income for the first 6 months of your contract. If you don’t make that amount, we’ll pay you the difference.'},
    { question: 'What are the requirements to join the program?', answer: 'We guarantee a minimum income for the first 6 months of your contract. If you don’t make that amount, we’ll pay you the difference.'}, 
    { question: 'Do we have to manage our own campaign?', answer: 'We guarantee a minimum income for the first 6 months of your contract. If you don’t make that amount, we’ll pay you the difference.'},
    { question: 'How do we get started?', answer: 'We guarantee a minimum income for the first 6 months of your contract. If you don’t make that amount, we’ll pay you the difference.'}
  ]
  const handleButtonClick = (gameRoute: string) => {
    console.log('game:', gameRoute)
  }
  return (
    <Wrapper>
       <FlexWrapper>
        <MainHeading text={'Job'}/>
        <MainDescription text="The home of the Pro gamers, where Subscribers can play with them on the same team or invest in emerging stars.."/>
      </FlexWrapper>
      <PlayerCard
        imageSrc={"/aboutPlayerImage.jpg"}
        width={1035}
        height={559}
        title={"Become a Champion"}
        titleColor='white'
        description={"Experience gaming like never before with GGera! Play with pro players on demand, dominate in competitive matches, and have a blast while improving your skills."}
        buttonText={"Try it now!"}
        onClick={() => {}}
      />
      <SubHeading text={"Games we support"}/>
      <div className={styles.game}>
        <button style={{background: '#F15232'}} >Select Your Game</button>
        <button onClick={() => { handleButtonClick('valorant') }}><Image src="/Valorant_logo.svg" alt="Valorant logo" width={110} height={16} /></button>
        <button onClick={() => { handleButtonClick('cod') }}><Image src="/COD.svg" alt="cod logo" width={104} height={34} /></button>
        <button onClick={() => { handleButtonClick('fortnite') }}><Image src="/fortnite.svg" alt="fortnite logo" width={102} height={28} /></button>
        <button onClick={() => { handleButtonClick('apex') }}><Image src="/apex.svg" alt="apex logo" width={70} height={44} />
        </button>
        <button className={styles.transparentButton}><Image src="/rightarrow.svg" alt="go right" width={30} height={30} /></button>
      </div>
      <JobCardList
        jobList={jobCardLists}
      />
      <SubHeading
        text={"Select Your Plan"}
        description={"Elevate your skills with personalized 1-1 coaching. Book now to unlock your gaming potential and achieve extraordinary results."}
      />
      <PlanCardList
        planList={planCardLists}
      />
      <SubHeading
        text='Read more about our PROs'
        description='Elevate your skills with personalized 1-1 coaching. Book now to unlock your gaming potential and achieve extraordinary results.'
      />
      <BlogList
        blogs={moreAboutPro}
        showButton={false}
      />
      <SubHeading
        text='Our community'
        description='Elevate your skills with personalized 1-1 coaching. Book now to unlock your gaming potential and achieve extraordinary results.'
      />
      <CommunityHeading
        headingList={['Team', 'Our Coaches', ' Influencers with LF']}
      />
      <CommunityList
        profileList={communityList}
      />
      <SubHeading
        text={"Faq"}
        description='Elevate your skills with personalized 1-1 coaching. Book now to unlock your gaming potential and achieve extraordinary results.'
      />
      <FaqCardList
        faqList={faqCardList}
      />
    </Wrapper>
  )
}

export default index