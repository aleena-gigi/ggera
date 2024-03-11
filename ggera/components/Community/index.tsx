import CommunityCard, { CommunityCardProps } from "./CommunityCard";

interface CommunityList{
  profileList: CommunityCardProps[];
}

const CommunityList = ({profileList}: CommunityList) => {
  return (
    <div style={{ display: 'flex', gap: '10px'}}>
      {profileList.map((profile, index) => (
        <CommunityCard key={index} {...profile} />
      ))}
    </div>
  )
}

export default CommunityList
