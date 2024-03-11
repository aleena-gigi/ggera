import MainHeading from '@/components/Headings/MainHeading'
import ProPlayerList from '@/components/ProProfile'
import { ProProfileCardProps } from '@/components/ProProfile/ProProfileCard'
import { Wrapper } from '@/styles/styledComponents'
import React from 'react'


const index = () => {
  const proPlayersList: ProProfileCardProps[] = [
    { profileImage: "/profiles/profile2.svg", playerName: "Smo1derTv#6923", playerDescription: "I'm in the top 50 players in the world  / Caldera Trios World...", country: "Lebanon", kd: 5, orders: 955, rating: 5},
    { profileImage: "/profiles/profile3.svg", playerName: "Smo1derTv#6923", playerDescription: "I'm in the top 50 players in the world  / Caldera Trios World...", country: "Lebanon", kd: 5, orders: 955, rating: 5},
    { profileImage: "/profiles/profile4.svg", playerName: "Smo1derTv#6923", playerDescription: "I'm in the top 50 players in the world  / Caldera Trios World...", country: "Lebanon", kd: 5, orders: 955, rating: 5},
    { profileImage: "/profiles/profile2.svg", playerName: "Smo1derTv#6923", playerDescription: "I'm in the top 50 players in the world  / Caldera Trios World...", country: "Lebanon", kd: 5, orders: 955, rating: 5},
    { profileImage: "/profiles/profile3.svg", playerName: "Smo1derTv#6923", playerDescription: "I'm in the top 50 players in the world  / Caldera Trios World...", country: "Lebanon", kd: 5, orders: 955, rating: 5},
    { profileImage: "/profiles/profile4.svg", playerName: "Smo1derTv#6923", playerDescription: "I'm in the top 50 players in the world  / Caldera Trios World...", country: "Lebanon", kd: 5, orders: 955, rating: 5},
  ]
  return (
    <Wrapper>
      <MainHeading text={'Play with a Pro'}/>
      <ProPlayerList proPlayers={proPlayersList}/>
    </Wrapper>
  )
}

export default index