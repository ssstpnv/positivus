import TeamMemberCard from './TeamMemberCard.tsx';
import mockTeamMembersData from '../mockData/mockTeamMembers.ts';
import SectionTitle from "./shared/SectionTitle.tsx";
import Button from "./shared/Button.tsx";

function Team() {
  return (
    <div className="mt-[140px]">
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
        <Button variant="primary" label="See all team" style="w-64 h-16" />
      </div>
    </div>
  )
}

export default Team;