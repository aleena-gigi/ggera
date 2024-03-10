import React from 'react'
import { FlexWrapper, Wrapper } from '../../styles/styledComponents'
import MainHeading from '../../components/Headings/MainHeading'
import MainDescription from '../../components/MainDescription'
import { BlogCardProps } from '../../components/BlogCards/BlogCard'
import BlogList from '../../components/BlogCards'

const Blog = () => {
  const blogList: BlogCardProps[] = [
    { imageSrc: "/blog1.png", alt: "blog1", title: "70K Customers", description: "Connect with pros & creators. Collaborate, train, have fun. Level up skills, build lasting connections.", buttonHandleClick: () => {}},
    { imageSrc: "/blog2.png", alt: "blog2", title: "6K Professional Gamers", description: "Connect with pros & creators. Collaborate, train, have fun. Level up skills, build lasting connections.", buttonHandleClick: () => {}},
    { imageSrc: "/blog3.png", alt: "blog3", title: "70K Customers", description: "Connect with pros & creators. Collaborate, train, have fun. Level up skills, build lasting connections.", buttonHandleClick: () => {}},
    { imageSrc: "/blog4.png", alt: "blog4", title: "6K Professional Gamers", description: "Connect with pros & creators. Collaborate, train, have fun. Level up skills, build lasting connections.", buttonHandleClick: () => {}},
    { imageSrc: "/blog5.png", alt: "blog5", title: "70K Customers", description: "Connect with pros & creators. Collaborate, train, have fun. Level up skills, build lasting connections.", buttonHandleClick: () => {}},
    { imageSrc: "/blog6.png", alt: "blog6", title: "6K Professional Gamers", description: "Connect with pros & creators. Collaborate, train, have fun. Level up skills, build lasting connections.", buttonHandleClick: () => {}},
  ]
  return (
    <Wrapper>
      <FlexWrapper>
        <MainHeading text={'Blog'}/>
        <MainDescription text="The home of the Pro gamers, where Subscribers can play with them on the same team or invest in emerging stars.."/>
      </FlexWrapper>
      <BlogList blogs={blogList}/>
    </Wrapper>
  )
}

export default Blog