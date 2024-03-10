'use client'
import Image from 'next/image'
import styled from 'styled-components'
import { Icon } from '@iconify/react';
import 'iconify-icon';
import styles from '../styles/Home.module.css'
import { useEffect, useState } from 'react';
// Import the necessary components and styles
// Import the necessary components and styles
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useRouter } from 'next/navigation';
import { Wrapper } from '../styles/styledComponents';
import MainHeading from '../components/Headings/MainHeading';
import MainDescription from '../components/MainDescription';
import SubHeading, { SubHeadingBody } from '../components/Headings/SubHeading';
import PlayerCardWrapper from '../components/PlayerCards/PlayerCardWrapper';


const Box= styled.div `
  gap: 10px;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  &>div{
    font-weight: 600;
    padding: 4px 11px;
    background: #4E4E4E;
    border-radius: 5px;
    height: 32px;
  }
`
export default function Home() {
  const router = useRouter();
  // Define the sliderSettings variable
  const sliderSettings = {
    infinite: true,
    slidesToShow: 3, // Show 3 slots at a time (adjust as needed)
    slidesToScroll: 3,
    autoplaySpeed: 500, // Adjust autoplay speed as needed
    dots: true,
  };

  const [selectedGame, setSelectedGame] = useState('valorant') 
  const handleButtonClick = (game) => {
    setSelectedGame(game)
  }
  const handleClick = () => {
    router.push('https://gaming.ggera.com/login')
  }
  const handleLoginBtn = () => {
    if(!currentUser) {
      router.push('/login')
    }
  }
  useEffect(() => { console.log(selectedGame) }, [selectedGame])
  return (
    <Wrapper>
      <MainHeading
        text={"Elevate your gaming experience to the next level"}
      />
      <MainDescription
        text={"Join us now and step into a world where only the best compete."}
      />
      <PlayerCardWrapper>
        <div className={styles.playerCard}>
          <Image src="/playerCard.png" alt="logo" width="509" height="485" />
          <div className={styles.container}>
            <div style={{ fontSize: '24px', lineHeight:'normal'}}>Play with Pros</div>
            <div style={{ fontSize: '16px', fontWeight: '400', lineHeight: 'normal', padding: '8px 0px 17px'}}>Enhance your skills, triumph, and immerse yourself in the ultimate emotions of your favorite game.</div>
            <button className={styles.button} onClick={() => {handleClick()}}>Play Now</button>
          </div>
        </div>
        <div className={styles.whiteCard}>
          <div style={{ color: '#F15232', fontSize: '58px', fontWeight: 600, lineHeight: '66px'}}>Play with Pros</div>
          <div style={{color: '#000'}}>Hangout</div>
          <div>
            <Icon icon="solar:gamepad-outline" color="rgba(0, 0, 0, 0.5019607843137255)" width={'60'} height={'43'} style={{ margin: 'auto' }}/>
          </div>
          <div style={{ fontSize: '24px', color: 'black', lineHeight: '34px', padding: '24px 60px'}}>Attain gaming excellence. Begin your journey today!</div>
          <button className={styles.button} onClick={() => {handleClick()}}> Learn More</button>
        </div>
      </PlayerCardWrapper>
      <div className={styles.game}>
        <button style={{background: '#F15232'}} >Select Your Game</button>
        <button onClick={() => { handleButtonClick('valorant') }}><Image src="/Valorant_logo.svg" alt="Valorant logo" width={110} height={16} /></button>
        <button onClick={() => { handleButtonClick('cod') }}><Image src="/COD.svg" alt="cod logo" width={104} height={34} /></button>
        <button onClick={() => { handleButtonClick('fortnite') }}><Image src="/fortnite.svg" alt="fortnite logo" width={102} height={28} /></button>
        <button onClick={() => { handleButtonClick('apex') }}><Image src="/apex.svg" alt="apex logo" width={70} height={44} />
        </button>
        <button className={styles.transparentButton}><Image src="/rightarrow.svg" alt="go right" width={30} height={30} /></button>
      </div>
      <SubHeading text={"Book your 1-1 Session"} description={"Elevate your skills with personalized 1-1 coaching. Book now to unlock your gaming potential and achieve extraordinary results."} />
      <div className={styles.profile}>
        <button><Image src="/profiles/profile2.svg" width={134} height={134}/></button>
        <Image src="/profiles/active.svg" width={16} height={16}/>
        <button><Image src="/profiles/profile3.svg" width={134} height={134}/></button>
        <Image src="/profiles/active.svg" width={16} height={16}/>
        <button><Image src="/profiles/profile4.svg" width={134} height={134}/></button>
        <Image src="/profiles/active.svg" width={16} height={16}/>
        <button><Image src="/profiles/profile5.svg" width={134} height={134}/></button>
        <Image src="/profiles/active.svg" width={16} height={16}/>
        <button><Image src="/profiles/profile6.svg" width={134} height={134}/></button>
        <Image src="/profiles/active.svg" width={16} height={16}/>
        <button><Image src="/profiles/profile7.svg" width={134} height={134}/></button>
        <Image src="/profiles/active.svg" width={16} height={16}/>
        <button><Image src="/profiles/profile8.svg" width={134} height={134}/></button>
        <Image src="/profiles/active.svg" width={16} height={16}/>
      </div>
      <div style={{ fontSize: '48px', fontWeight: 600, paddingTop: '93px'}}>Join Premade Party</div>
      <div style={{ fontWeight: '400', fontSize: '16px', paddingTop: '20px', lineHeight: 'normal', width: '551px'}}>Elevate your skills with personalized 1-1 coaching. Book now to unlock your gaming potential and achieve extraordinary results.</div>

      {/* PREMADE PARTY 1 */}
      <div className={styles.premade}>
        <iframe
          width="992"
          height="407"
          src={`https://www.youtube.com/embed/p_EbnbEqnVM`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <div>Valorant</div>
          <div className={styles.slotsTag}>3 Slots left</div>
        </div>
        <div className={styles.slots}>
        
          <div className={styles.partyOwner}>
            <div style={{display: 'inline-flex', gap: '8px', fontSize: '24px',justifyContent: 'center'}}>Smo1derTv#6923
              <Image src="/pro.svg" width={25} height={20}/>
            </div>
            <div style={{ paddingTop: '12px', paddingBottom: '16px'}}>I'm in the top 50 players in the world  / Caldera Trios World...</div>
            <Box>
              <div><span style={{color: '#F15232'}}>Country</span> Lebanon</div>
              <div><span style={{color: '#F15232', paddingRight: '8px'}}>KD </span> 5</div>
              <div style={{display: 'inline-flex'}}>955 
                <span style={{ paddingLeft: '9px', paddingRight: '3px' }}>
                  <Image src={"/star.svg"} height={18} width={18}/>
                </span>
                orders</div>
            </Box>
          </div>
          <Image src="/profiles/profile7.svg" width={134} height={134}/>
          <div>Occupied</div>
          <Image src="/profiles/profile7.svg" width={134} height={134}/>
          <div>Free Slot</div>
          <Image src="/profiles/profile7.svg" width={134} height={134}/>
        </div>
        <button style={{ borderRadius: '10px',background: '#F15232' }} onClick={() => {handleClick()}}>Join the party $12/1 hour</button>
      </div>

      {/* PREMADE PARTY 2 */}
      <div className={styles.premade}>
        <iframe
          width="992"
          height="407"
          src={`https://www.youtube.com/embed/p_EbnbEqnVM`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <div>Valorant</div>
          <div className={styles.slotsTag}>3 Slots left</div>
        </div>
        <div className={styles.slots}>
        
          <div className={styles.partyOwner}>
            <div style={{display: 'inline-flex', gap: '8px', fontSize: '24px',justifyContent: 'center'}}>Smo1derTv#6923
              <Image src="/pro.svg" width={25} height={20}/>
            </div>
            <div style={{ paddingTop: '12px', paddingBottom: '16px'}}>I'm in the top 50 players in the world  / Caldera Trios World...</div>
            <Box>
              <div><span style={{color: '#F15232'}}>Country</span> Lebanon</div>
              <div><span style={{color: '#F15232', paddingRight: '8px'}}>KD </span> 5</div>
              <div style={{display: 'inline-flex'}}>955 
                <span style={{ paddingLeft: '9px', paddingRight: '3px' }}>
                  <Image src={"/star.svg"} height={18} width={18}/>
                </span>
                orders</div>
            </Box>
          </div>
          <Image src="/profiles/profile7.svg" width={134} height={134}/>
          <div>Occupied</div>
          <Image src="/profiles/profile7.svg" width={134} height={134}/>
          <div>Free Slot</div>
          <Image src="/profiles/profile7.svg" width={134} height={134}/>
        </div>
        <button style={{ borderRadius: '10px',background: '#F15232' }} onClick={() => {handleClick()}}>Join the party $12/1 hour</button>
      </div>
      
      
      {/* https://www.youtube.com/embed/${videoId}this is the format */}
    </Wrapper>
  )
}