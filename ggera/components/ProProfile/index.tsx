import React from 'react'
import ProProfileCard, { ProProfileCardProps } from './ProProfileCard'

interface ProPlayerListProps {
  proPlayers: ProProfileCardProps[]
}
const ProPlayerList = ({proPlayers}: ProPlayerListProps) => {
  return (
    <div style={{width: '100%', paddingTop: '65px'}}>
      {proPlayers.map((proPlayer, index) => {
        return (
          <ProProfileCard
            key={index}
            playerName={proPlayer.playerName}
            playerDescription={proPlayer.playerDescription}
            country={proPlayer.country}
            kd={proPlayer.kd}
            orders={proPlayer.orders}
            rating={proPlayer.rating}
            profileImage={proPlayer.profileImage}
          />
        )
      })}
    </div>
  )
}

export default ProPlayerList