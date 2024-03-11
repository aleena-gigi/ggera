import PlanCard, { PlanCardProps } from './PlanCard'

interface PlanCardListProps {
	planList: PlanCardProps[]
}

const PlanCardList = ({planList}: PlanCardListProps) => {
  return (
    <div style={{ display: 'flex', gap: '10px'}}>
   	 {planList.map((planCard, index) => (
        <PlanCard key={index} {...planCard} />
			))}
    </div>
  )
}

export default PlanCardList