import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
const Wrapper = styled.div`
margin: 28px 400px 28px 400px;
padding-top: 20px;
font-size: 16px;
line-height: normal;
height: 50px;
flex-shrink: 0;
display: flex;
justify-content: space-between;
border-top: 1px solid #333;
`
const Footer = () => {
  return (
    <Wrapper>
      <div>Copyright © 2023, All Rights Reserved GGera</div>
      <div style={{ display: 'flex',gap: '4px'}}>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <Image src="/fb.svg" width={24} height={24}/>
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <Image src="/twitter.svg" width={24} height={24}/>
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <Image src="/insta.svg" width={24} height={24}/>
        </a>
      </div>
    </Wrapper>
  )
}

export default Footer