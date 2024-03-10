import Ad from '@/components/GGeraAd'
import PlayerAdList from '@/components/PlayerAd'
import { PlayerAdCardProps } from '@/components/PlayerAd/PlayerAdCard'
import GameCardList from '../../components/GameCards'
import { GameCardsProps } from '../../components/GameCards/GameCard'
import MainHeading from '../../components/Headings/MainHeading'
import SubHeading from '../../components/Headings/SubHeading'
import MainDescription from '../../components/MainDescription'
import PlayerCard from '../../components/PlayerCards/PlayerCard'
import PlayerCardWrapper from '../../components/PlayerCards/PlayerCardWrapper'
import { FlexWrapper, Wrapper } from '../../styles/styledComponents'

const index = () => {
  const ultimatePlatformtext = "Welcome to GG Era, the ultimate platform for gamers. Connect, collaborate, and level up with pros and creators from around the world. Whether you aspire to be a pro gamer or a content creator, GG Era provides a vibrant community where you can learn, grow, and showcase your skills. Play alongside top professionals, gain exclusive insights, and participate in thrilling collaborative gameplay sessions. Showcase your creativity, collaborate with like-minded creators, and build your brand. With access to training materials, workshops, and personalized coaching, you can enhance your skills and reach new heights. Join GG Era today and embark on an exciting journey of gaming, collaboration, and endless possibilities. The next level of gaming awaits you."
  const prosOnDemandText = "Unleash your gaming potential with personalized 1-1 coaching or by joining a premade party. Book now to elevate your skills and achieve extraordinary results in gaming!"
  const gameCardsList: GameCardsProps[] = [
    { imageSrc: "/Valorant_logo.svg", alt: "Valorant", gameRedirectRoute: "/valorant" },
    { imageSrc: "/COD.svg", alt: "COD", gameRedirectRoute: "/cod" },
    { imageSrc: "/fortnite.svg", alt: "Fortnite", gameRedirectRoute: "/fortnite" },
    { imageSrc: "/apex.svg", alt: "Apex", gameRedirectRoute: "/apex" },
  ]
  const playersList: PlayerAdCardProps[] = [
    { profileImage: "/profiles/profile2.svg", playerName: "Smo1derTv#6923", playerDescription: "I'm in the top 50 players in the world  / Caldera Trios World...", country: "Lebanon", kd: 5, orders: 955, rating: 5},
    { profileImage: "/profiles/profile3.svg", playerName: "Smo1derTv#6923", playerDescription: "I'm in the top 50 players in the world  / Caldera Trios World...", country: "Lebanon", kd: 5, orders: 955, rating: 5},
    { profileImage: "/profiles/profile4.svg", playerName: "Smo1derTv#6923", playerDescription: "I'm in the top 50 players in the world  / Caldera Trios World...", country: "Lebanon", kd: 5, orders: 955, rating: 5},
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
      <PlayerAdList players={playersList}/>
      <Ad
        imageSrc='/ggEraAd.jpg'
        title='Join GG Era: Level Up Your Gaming Experience Today!'
        description='Connect, collaborate, and level up with pros and creators. Enhance your skills, showcase your talent, and join the vibrant gaming community. Sign up now!'
        buttonText='Join now'
        onClick={() => {console.log('clicked')}}
      />
    </Wrapper>
  )
}

export default index