import React from 'react'
import MainHeading from '../../components/Headings/MainHeading'
import { Wrapper } from '../../styles/styledComponents'
import MainDescription from '../../components/MainDescription'
import styled from 'styled-components'
import PlayerCard from '../../components/PlayerCards/PlayerCard'
import PlayerCardWrapper from '../../components/PlayerCards/PlayerCardWrapper'
import SubHeading from '../../components/Headings/SubHeading'
import GameCardList from '../../components/GameCards'
import GameCards, { GameCardsProps } from '../../components/GameCards/GameCard'

const FlexWrapper = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 38px;
  margin-bottom: 20px;
  & div:first-child {
    padding-right: 16px;
    border-right: 1px solid white;
  }
  `
const index = () => {
  const ultimatePlatformtext = "Welcome to GG Era, the ultimate platform for gamers. Connect, collaborate, and level up with pros and creators from around the world. Whether you aspire to be a pro gamer or a content creator, GG Era provides a vibrant community where you can learn, grow, and showcase your skills. Play alongside top professionals, gain exclusive insights, and participate in thrilling collaborative gameplay sessions. Showcase your creativity, collaborate with like-minded creators, and build your brand. With access to training materials, workshops, and personalized coaching, you can enhance your skills and reach new heights. Join GG Era today and embark on an exciting journey of gaming, collaboration, and endless possibilities. The next level of gaming awaits you."
  const prosOnDemandText = "Unleash your gaming potential with personalized 1-1 coaching or by joining a premade party. Book now to elevate your skills and achieve extraordinary results in gaming!"
  const gameCardsList: GameCardsProps[] = [
    { imageSrc: "/Valorant_logo.svg", alt: "Valorant", gameRedirectRoute: "/valorant" },
    { imageSrc: "/COD.svg", alt: "COD", gameRedirectRoute: "/cod" },
    { imageSrc: "/fortnite.svg", alt: "Fortnite", gameRedirectRoute: "/fortnite" },
    { imageSrc: "/apex.svg", alt: "Apex", gameRedirectRoute: "/apex" },
  ]
  return (
    <Wrapper>
      <FlexWrapper>
        <MainHeading text={"About"}/>
        <MainDescription text={"Elevate Your Gaming Experience and Become a Champion with our Pro Players On Demand!" }/>
      </FlexWrapper>
      <PlayerCardWrapper>
        <PlayerCard
          imageSrc={"/aboutPlayerImage.jpg"}
          width={509}
          height={314}
          title={"Become a Champion"}
          titleColor='white'
          description={"Experience gaming like never before with GGera! Play with pro players on demand, dominate in competitive matches, and have a blast while improving your skills."}
          buttonText={"Try it now!"}
          onClick={() => {}}
        />
        <PlayerCard
          imageSrc={"/aboutplayerImage2.jpg"}
          width={509}
          height={314}
          title={"Top 1% Ranked Players on demand"}
          description={"Test your skills against the elite, learn from the masters, or simply enjoy the thrill of intense competition, we've got you covered."}
          buttonText={"Learn More"}
          buttonColor='white'
          onClick={() => {}}
        />
      </PlayerCardWrapper>
      <SubHeading text={"The Ultimate Platform for Gamers"} description={ultimatePlatformtext}/>
      <GameCardList gameList={gameCardsList} />
      <SubHeading text={"Pros on Demand"} description={prosOnDemandText}/>
    </Wrapper>
  )
}

export default index