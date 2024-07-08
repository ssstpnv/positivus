import TeamMemberCard from './TeamMemberCard.tsx';
import mockTeamMembersData from '../mockData/mockTeamMembers.ts';
import SectionTitle from "./shared/SectionTitle.tsx";

function TeamSection() {
  return (
    <div>
      <SectionTitle
        title="Team"
        description="Meet the skilled and experienced team behind our
         successful digital marketing strategies"
      />
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 desktop:grid-cols-3 mt-20">
        {mockTeamMembersData.map((teamMember) => (
          <TeamMemberCard
            key={teamMember.id}
            {...teamMember}
          />
        ))}
      </div>
      <div className="flex justify-end mt-10">
        <button className="w-64 h-16">
          See all team
        </button>
      </div>
    </div>
  )
}

export default TeamSection;