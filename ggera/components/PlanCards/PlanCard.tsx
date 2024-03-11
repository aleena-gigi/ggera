import styled from "styled-components"
import styles from './plancard.module.scss'

export interface PlanCardProps {
  rate: string
  planPeriod: string
  planDescription: string[]
  handleClick: () => void
}

const Wrapper =styled.div`
  display: flex;
`
const PlanHeaderWrapper =styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 13px;
  padding-bottom: 36px;
  border-bottom: 1px solid black;
`

const PlanCard = ({rate, planPeriod, planDescription, handleClick}: PlanCardProps) => {
  return (
    <Wrapper>
      <div className={styles.whiteCard}>
        <PlanHeaderWrapper>
          <div className={styles.rate}>{rate}</div>
          <div className={styles.planPeriod}>{planPeriod}</div>
        </PlanHeaderWrapper>
        <ul className={styles.list}>
          {planDescription.map((description, index) => (
            // <li key={index}>{description}</li>
            <li>&#10004; {description}</li>
          ))}
        </ul>
          <button className={styles.button} onClick={() => {handleClick()}}> Learn More</button>
      </div>
    </Wrapper>
  )
}

export default PlanCard