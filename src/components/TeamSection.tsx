import TeamMemberCard from './TeamMemberCard.tsx';
import mockTeamMembersData from '../mockData/mockTeamMembers.ts';

function TeamSection() {
  return (
    <div>
      <div className="flex gap-10 items-center">
        <h2 className="font-bold bg-p-green px-1.5 rounded-lg">
          Team
        </h2>
        <p className="max-w-[480px] text-left">
          Meet the skilled and experienced team behind our successful digital marketing strategies
        </p>
      </div>
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 desktop:grid-cols-3 mt-20">
        {mockTeamMembersData.map((teamMember) => (
          <TeamMemberCard
            key={teamMember.id}
            {...teamMember}
          />
        ))}
      </div>
      <div className="flex justify-end mt-10">
        <button className="w-64 h-16 bg-p-black text-p-grey">
          See all team
        </button>
      </div>
    </div>
  )
}

export default TeamSection;