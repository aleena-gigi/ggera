import styled from "styled-components"
import PlayerAdCard, { PlayerAdCardProps } from "./PlayerAdCard"

interface PlayerAdListProps {
  players: PlayerAdCardProps[]
}

const Wrapper = styled.div`
  display: flex;
  gap: 16px;
  padding-top: 20px;
`

const PlayerAdList = ({players}: PlayerAdListProps) => {
  return (
    <Wrapper>
      {players.map((player: PlayerAdCardProps, index) => {
        return (
          <PlayerAdCard
            key={index}
            playerName={player.playerName}
            playerDescription={player.playerDescription}
            country={player.country}
            kd={player.kd}
            orders={player.orders}
            rating={player.rating}
            profileImage={player.profileImage}
          />
        )
      })}
    </Wrapper>
  )
}

export default PlayerAdList