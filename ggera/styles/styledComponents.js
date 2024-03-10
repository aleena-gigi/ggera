import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: flex-start;
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: 70px; 
  padding: 133px 250px 30px;
`

export const FlexWrapper = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 38px;
  & div:first-child {
    padding-right: 16px;
    border-right: 1px solid white;
  }
`

export const Box = styled.div `
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