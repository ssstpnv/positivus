import johnSmithImg from '../assets/images/profile/john-smith.png';
import janeDoeImg from '../assets/images/profile/jane-doe.png';
import michaelBrownImg from '../assets/images/profile/michael-brown.png';
import emilyJohnsonImg from '../assets/images/profile/emily-johnson.png';
import brianWilliamsImg from '../assets/images/profile/brian-williams.png';
import sarahKimImg from '../assets/images/profile/sarah-kim.png';

export type TeamMember = {
  id: number,
  name: string,
  position: string,
  description: string,
  imgUrl: string,
  linkedInUrl: string,
}

const teamMembers: TeamMember[] = [{
  id: 1,
  name: "John Smith",
  position: "CEO and Founder",
  description: "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
  imgUrl: johnSmithImg,
  linkedInUrl: "https://example.com",
}, {
  id: 2,
  name: "Jane Doe",
  position: "Director of Operations",
  description: "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
  imgUrl: janeDoeImg,
  linkedInUrl: "https://example.com",
}, {
  id: 3,
  name: "Michael Brown",
  position: "Senior SEO Specialist",
  description: "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
  imgUrl: michaelBrownImg,
  linkedInUrl: "https://example.com",
}, {
  id: 4,
  name: "Emily Johnson",
  position: "PPC Manager",
  description: "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
  imgUrl: emilyJohnsonImg,
  linkedInUrl: "https://example.com",
}, {
  id: 5,
  name: "Brian Williams",
  position: "Social Media Specialist",
  description: "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement",
  imgUrl: brianWilliamsImg,
  linkedInUrl: "https://example.com",
}, {
  id: 6,
  name: "Sarah Kim",
  position: "Content Creator",
  description: "2+ years of experience in writing and editing\n Skilled in creating compelling, SEO-optimized content for various industries",
  imgUrl: sarahKimImg,
  linkedInUrl: "https://example.com",
}];

export default teamMembers;
