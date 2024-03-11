import styled from 'styled-components';
import styles from './community.module.css'
import Image from 'next/image';

export interface CommunityCardProps {
  imageSrc: string;
  alt: string;
  name: string;
  buttonLink?: string;
}
const FlexWrapper = styled.div`
  display: flex;
  gap: 2px;
  flex-direction: column;
`
const CommunityCard = ({imageSrc, alt, name, buttonLink}: CommunityCardProps) => {
  return (
    <FlexWrapper>
      <img src={imageSrc} alt={alt} />
      <div className={styles.communityName}>{name}</div>
      {buttonLink && <a className={styles.communityButton} href={buttonLink}>Watch <Image src={'/community/orangeArrow.png'} alt="arrow" height={6} width={9}/></a>}
    </FlexWrapper>
  )
}

export default CommunityCard