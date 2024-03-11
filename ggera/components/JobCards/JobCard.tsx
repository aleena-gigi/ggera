import styled from 'styled-components'
import SubHeading from '../Headings/SubHeading'
import styles from './jobcards.module.css'

const Wrapper = styled.div<{ reverse?: boolean }>`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
& > div {
  flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
}
`

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  font-size: 16px;
  font-weight: 400;
`

export interface JobCardProps {
  title: string
  description: string
  imageSrc: string
  reverse?: boolean
}


const JobCard = ({title, description, imageSrc, reverse}: JobCardProps) => {
  const paragraphs = description.split('<br/>');
  return (
    <Wrapper reverse={reverse}>
      <div className={styles.card}>
        <img src={imageSrc} alt={title} />
        <ContentWrapper>
          <div className={styles.title}>{title}</div>
          {paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </ContentWrapper>
      </div>
    </Wrapper>
  )
}

export default JobCard