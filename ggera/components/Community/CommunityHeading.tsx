import styles from './community.module.css'

interface CommunityHeadingPrpos {
  headingList: string[];
}
const CommunityHeading = ({headingList}: CommunityHeadingPrpos) => {
  return (
    <div className={styles.heading}>
      {headingList.map((heading, index: number) => {
        return <div key={index}>
              <div>{heading}</div>
              {index !== headingList.length - 1 && <div className={styles.slash}> / </div>}
          </div>
        }
      )}
    </div>
  )
}

export default CommunityHeading