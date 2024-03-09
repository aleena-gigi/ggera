import React from 'react'
import styled from 'styled-components'

const MainDescriptionWrapper = styled.div`
  display: flex;
  line-height: 32px;
  size: 22px;
  justify-content: center;
  `
const MainDescription = ({text}) => {
  return (
    <MainDescriptionWrapper>{text}</MainDescriptionWrapper>
  )
}

export default MainDescription