'use client'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';
const Wrapper = styled.div`
  display: flex;
  padding-left: 64px;
  padding-right: 64px;
  border-bottom: 1px solid #333;
  height: 88px;
  position: fixed;
  width: 100%;
  z-index: 4;
  background: black;
  align-items: center;
  &> button{
    border-radius: 10px;
    border: 1px solid #FFF;
    background: #FFF ;
    width: 81px;
    height: 41px;
    color: #F15232;
  }
  &>button: hover{
    border-radius: 10px;
    border: 1px solid #FFF;
    background: #333;
  }
`
const Nav= styled.div`
  display: flex;
  fontSize: 14px;
  align-items: center;
  width: 100%;
  height: 100%;
  gap: 35px;
  &>button{
    height: 100%;
    padding-left: 4px;
    padding-right: 4px;
  }
  &>button: hover{
    border-radius: 10px;
    border: 1px solid #FFF;
    background: #333;
  }
  &>img{
    width: 60px;
    height: 41.647px;
    flex-shrink: 0;
    margin-right: 64px;
  }
  `

const NavBar = () => {
  const router = useRouter()
  const navBarElements = ['Play with a Pro', 'Hangout', 'About', 'Blog', 'Job']
  const handleClick = () => {
    router.push('https://gaming.ggera.com/login')
  }
  return (
    <Wrapper>
      <Nav classname="shadow-xl bg-white">
      <Image src="/logo.png" alt="logo" width="60" height="41" />
        {navBarElements.map((element, index) => (
          <button key={index}>{element}</button>
          ))}
      </Nav>
      <button onClick={() => { handleClick() }}>Login</button>
    </Wrapper>
  )
}

export default NavBar