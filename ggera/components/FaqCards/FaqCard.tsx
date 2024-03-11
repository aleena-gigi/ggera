import { useState } from 'react';
import styles from './faq.module.css'

export interface FaqCardProps {
    question: string;
    answer?: string;
}
const FaqCard = ({question, answer}: FaqCardProps) => {
  const [showAnswer, setShowAnswer] = useState(false)
  const toggleAnswer = () => {
    setShowAnswer(!showAnswer)
  }
  return (
    <div className={styles.card}>
      <div className={styles.question}>
        <div>{question}</div>
        <button onClick={toggleAnswer}>	&#8853;	</button>
      </div>
      {showAnswer && <div>{answer}</div>}
    </div>
  )
}

export default FaqCard