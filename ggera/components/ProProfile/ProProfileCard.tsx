import Image from 'next/image'
import styles from './proProfie.module.css'
import styled from 'styled-components'
import { Box } from '@/styles/styledComponents'

export interface ProProfileCardProps {
  playerName: string
  playerDescription: string
  country: string
  kd: number
  orders: number
  rating: number
  profileImage: string
  onClick?: () => void
}

const ProfileWrapper = styled.div`
 display: flex;
 justify-content: space-between;
 width: 100%;
 `

 const GameButtonWrapper = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;
`

const ProProfileCard = ({playerName, playerDescription, country, kd, orders, rating, profileImage, onClick}: ProProfileCardProps) => {
  return (
      <div className={styles.slots}>
        <Image alt="profile photo" src={profileImage} width={134} height={134}/>
        <div className={styles.partyOwner}>
          <ProfileWrapper>
            <div style={{display: 'inline-flex', gap: '8px', fontSize: '24px',justifyContent: 'center'}}>{playerName}
              <Image alt= "crown" src={"/pro.svg"} width={25} height={20}/>
            </div>
            <GameButtonWrapper>
              <div style={{ color: '#04B17D'}}>Online</div>
              <img src={'active.png'}/>
            </GameButtonWrapper>
          </ProfileWrapper>
          <div style={{ paddingTop: '12px', paddingBottom: '16px'}}>{playerDescription}</div>
          <div className={styles.gamebutton}>
            <Box>
              <div><span style={{color: '#F15232'}}>Country</span> {country}</div>
              <div><span style={{color: '#F15232', paddingRight: '8px'}}>KD </span> {kd}</div>
              <div style={{display: 'inline-flex', alignItems: 'center'}}>Platform
                <span style={{ paddingLeft: '9px', paddingRight: '3px' }}>
                  <Image alt="rating" src={"/platform.png"} height={18} width={18}/>
                </span>
              </div>
            </Box>
            <GameButtonWrapper>
              <button onClick={onClick} className={styles.pro}>Play with this PRO</button>
              <button onClick={onClick} className={styles.chat}>
                <Image alt="chat" src={"/chat.png"} height={18} width={18}/>
              </button>
            </GameButtonWrapper>
          </div>
        </div>
      </div>
  )
}

export default ProProfileCard