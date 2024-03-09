import React from 'react'
import MainHeading from '../../components/MainHeading'
import { Wrapper } from '../../styles/styledComponents'
import MainDescription from '../../components/MainDescription'

const index = () => {
  return (
    <Wrapper>
      <div style={{ display: 'flex', gap: '16px', marginTop: '38px', marginBottom: '20px'}}>
        <MainHeading text={"About"}/>
        <MainDescription text={"Elevate Your Gaming Experience and Become a Champion with our Pro Players On Demand!" }/>
      </div>
    </Wrapper>
  )
}

export default index