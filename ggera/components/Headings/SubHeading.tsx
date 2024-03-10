import React from 'react'
import styled from 'styled-components'

interface SubHeadingProps {
  text: string
  description?: string
}
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 93px;
  font-size: 48px;
  font-weight: 600;
  line-height: 1.2;
  text-align: center;
`

const SubHeading = ({text, description}: SubHeadingProps) => {
  return (
    <Wrapper>
      <div>{text}</div>
      <div style={{ fontWeight: '400', fontSize: '16px', paddingTop: '20px', lineHeight: 'normal', width: '1000px'}}>{description}</div>
    </Wrapper>
  )
}

export default SubHeading