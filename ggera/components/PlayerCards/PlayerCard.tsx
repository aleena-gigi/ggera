import Image from 'next/image'
import React from 'react'
import styles from '../../styles/Home.module.css'
import { Icon } from '@iconify/react/dist/iconify.js'
import { useRouter } from 'next/router'



interface PlayerCardProps {
  imageSrc: string
  width?: number
  height?: number
  title: string
  titleColor?: string
  description: string
  buttonText: string
  onClick: () => void
  buttonColor?: string
}

const playerCard = ({imageSrc, width = 509, height = 485, title, titleColor = '#F15232', description, buttonText, onClick, buttonColor}: PlayerCardProps) => {
  const router = useRouter()

  return (
      <div className={styles.playerCard}>
        <Image src={imageSrc} alt="logo" width={width} height={height} />
        <div className={styles.container}>
          <div style={{ fontSize: '24px', lineHeight:'normal', color: titleColor}}>{title}</div>
          <div style={{ fontSize: '16px', fontWeight: '400', lineHeight: 'normal', padding: '8px 0px 17px'}}>{description}</div>
          <button style={{backgroundColor: buttonColor}} className={styles.button} onClick={onClick}>{buttonText}</button>
        </div>
      </div>
  )
}

export default playerCard