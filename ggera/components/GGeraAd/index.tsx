import styles from './ad.module.css'
import Image from 'next/image'

interface AdProps {
  title: string
  imageSrc: string
  buttonText: string
  onClick: () => void
  description: string
}

const Ad = ({title, imageSrc, buttonText, onClick, description}: AdProps) => {
  return (
    <div className={styles.card}>
      <Image src={imageSrc} alt="logo" width={1030} height={240} />
      <div className={styles.textContainer}>
        <div style={{ display: 'flex', flexDirection: 'column'}}>
          <div style={{ fontSize: '24px', lineHeight:'normal'}}>{title}</div>
          <div style={{ fontSize: '16px', fontWeight: '400', lineHeight: 'normal', padding: '8px 0px 17px'}}>{description}</div>
        </div>
        <button className={styles.button} onClick={onClick}>{buttonText}</button>
      </div>
    </div>
  )
}

export default Ad