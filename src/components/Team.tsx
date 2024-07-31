import TeamMemberCard from './TeamMemberCard.tsx';
import mockTeamMembersData from '../mockData/mockTeamMembers.ts';
import SectionTitle from "./shared/SectionTitle.tsx";
import Button from "./shared/Button.tsx";

function Team() {
  return (
    <div className="mt-[140px]">
      <SectionTitle title="Team">
        <p>
          Meet the skilled and experienced team behind our
          <br className="mobile:hidden desktop:inline"/>
          successful digital marketing strategies
        </p>
      </SectionTitle>
      <div className="grid grid-cols-1 gap-5 desktop:gap-10 tabletLarge:grid-cols-2 desktop:grid-cols-3 mt-20">
        {mockTeamMembersData.map((teamMember) => (
          <TeamMemberCard
            key={teamMember.id}
            {...teamMember}
          />
        ))}
      </div>
      <div className="flex justify-end mt-10">
        <Button className="w-64 h-16">See all team</Button>
      </div>
    </div>
  )
}

export default Team;