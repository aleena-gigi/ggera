import JobCard, { JobCardProps } from "./JobCard"

interface JobCardListProps {
  jobList: JobCardProps[]
}
const JobCardList = ({jobList}: JobCardListProps) => {
  return (
    <div>
      {jobList.map((jobCard, index) => (
        <JobCard key={index} {...jobCard} reverse={index % 2 === 0} />
      ))}
    </div>
  )
}

export default JobCardList