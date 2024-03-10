import React from 'react'
import styles from './blog.module.css'
import Image from 'next/image'
export interface BlogCardProps {
  imageSrc: string
  alt: string
  width?: number
  height?: number
  buttonHandleClick: () => void
  buttonText?: string
  title: string
  date?: string
  description: string
}

const BlogCard = ({imageSrc, alt, width = 519, height =100, buttonHandleClick, title, buttonText = "Learn More", date = "20th May 2023", description}: BlogCardProps) => {
  return (
    <div className={styles.card}>
      <Image src={imageSrc} alt={alt} width={width} height={height} />
      <div className={styles.textContainer}>
        <div style={{ fontSize: '24px', lineHeight:'normal', color: '#F15232'}}>{title}</div>
        <div style={{ fontSize: '14px', fontWeight: '400', lineHeight: 'normal'}}>{date}</div>
        <div style={{ fontSize: '16px', fontWeight: '400', lineHeight: 'normal'}}>{description}</div>
        <button className={styles.button} onClick={buttonHandleClick}>{buttonText}</button>
      </div>
    </div>
  )
}

export default BlogCard