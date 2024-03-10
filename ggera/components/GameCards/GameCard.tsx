import Image from 'next/image'
// import styles from '../../styles/Home.module.css'
import styled from 'styled-components'
import styles from './games.module.css';

export interface GameCardsProps {
  gameRedirectRoute?: string
  imageSrc: string
  alt: string
  width?: number
  height?: number
}
  
const GameWapper = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: center;
  padding-top: 93px;
  line-height: 1.2;
  text-align: flex-start;
  font-size: 15px;
`

const GameCard = ({ gameRedirectRoute, imageSrc, alt, width = 110, height = 16 }: GameCardsProps) => {
 
  const handleButtonClick = (gameRoute: string) => {
    console.log('game:', gameRoute)
  }
  return (
    <GameWapper>
      <div className={styles.gameCard}>
        <Image src={imageSrc} alt={alt} width={width} height={height} />
        <div>Play with pros, creators and celebrities</div>
        <ul className={styles.list}>
          <li>Improve your KD and Winrate</li>
          <li>Perfect experience with good teammates</li>
        </ul>
        <div style={{ display: 'flex', alignItems: 'flex-start' }}>
          <button className={styles.button} onClick={() => handleButtonClick(gameRedirectRoute || '')}>Try it now</button>
        </div>
      </div>
    </GameWapper>
  )
}

export default GameCard