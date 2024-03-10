import Image from 'next/image';
import GameCard, { GameCardsProps } from './GameCard';
import styles from './games.module.css';
import styled from 'styled-components';

interface GameListProps {
  gameList: GameCardsProps[]
}

const Wrapper = styled.div`
  display: flex;
  gap: 16px;
`

const GameCardList = ({gameList}: GameListProps) => {
return (
  <Wrapper>
    {gameList.map((game: GameCardsProps, index) => {
      return (
        <GameCard
          key={index}
          gameRedirectRoute={game.gameRedirectRoute}
          imageSrc={game.imageSrc}
          alt={game.alt}
          width={game.width}
          height={game.height}
        />
      )
    })}
    <button className={styles.transparentButton}><Image src="/rightarrow.svg" alt="go right" width={30} height={30} /></button>
  </Wrapper>
)
  
}
export default GameCardList