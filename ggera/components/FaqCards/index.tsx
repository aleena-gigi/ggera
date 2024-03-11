import FaqCard, { FaqCardProps } from "./FaqCard";

interface FaqCardListProps {
    faqList: FaqCardProps[];
}

const FaqCardList = ({faqList}: FaqCardListProps) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%', gap: '10px'}}>
    {faqList.map((faq, index) => (
      <FaqCard key={index} {...faq} />
    ))}
    </div>
  )
}

export default FaqCardList
