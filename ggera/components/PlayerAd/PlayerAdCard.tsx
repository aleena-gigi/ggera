import styles from './PlayerAd.module.css'
import Image from 'next/image'
import styled from 'styled-components'

export interface PlayerAdCardProps {
  playerName: string
  playerDescription: string
  country: string
  kd: number
  orders: number
  rating: number
  profileImage: string
  onClick?: () => void
}

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
const PlayerAdCard = ({playerName, playerDescription, country, kd, orders, rating, profileImage, onClick}: PlayerAdCardProps) => {
  return (
      <div className={styles.slots}>
        <Image alt="profile photo" src={profileImage} width={134} height={134}/>
        <div className={styles.partyOwner}>
          <div style={{display: 'inline-flex', gap: '8px', fontSize: '24px',justifyContent: 'center'}}>{playerName}
            <Image alt= "crown" src={"/pro.svg"} width={25} height={20}/>
          </div>
          <div style={{ paddingTop: '12px', paddingBottom: '16px'}}>{playerDescription}</div>
          <Box>
            <div><span style={{color: '#F15232'}}>Country</span> {country}</div>
            <div><span style={{color: '#F15232', paddingRight: '8px'}}>KD </span> {kd}</div>
            <div style={{display: 'inline-flex'}}>{orders}
              orders
              <span style={{ paddingLeft: '9px', paddingRight: '3px' }}>
                <Image alt="rating" src={"/star.svg"} height={18} width={18}/>
              </span>
              {rating}
            </div>
          </Box>
        </div>
      </div>
  )
}

export default PlayerAdCard