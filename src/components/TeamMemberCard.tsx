import { TeamMember } from '../mockData/mockTeamMembers.ts';
import linkedInIcon from '../assets/images/icons/linked-in.svg';
import ImageCrossClip from './ImageCrossClip.tsx';

function TeamMemberCard({
  name,
  description,
  imgUrl,
  position,
  linkedInUrl
}: TeamMember) {
    return (
      <div className="card flex flex-col w-[390px] px-9 py-10 gap-y-7 bg-white">
        <div className="flex flex-row">
          <ImageCrossClip imgUrl={imgUrl} />
          <div className="flex flex-col justify-between text-left basis-full">
            <div className="flex justify-end">
              <a href={linkedInUrl} target="_blank" rel="noopener noreferrer">
                <img src={linkedInIcon} alt="linked-in-icon"/>
              </a>
            </div>
            <div className="ml-5">
              <p className="font-bold">{name}</p>
              <p>{position}</p>
            </div>
          </div>
        </div>
        <hr className="border-black" />
        <p className="text-left whitespace-pre-line">
          {description}
        </p>
      </div>
    );
}

export default TeamMemberCard;