import SectionTitle from "./shared/SectionTitle.tsx";
import Link from "./shared/Link.tsx";
import arrowGreenIcon from '../assets/images/icons/arrow-green.svg';

const mockStudies = [
  { id: '01', description: 'For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.', url: 'https://example.com' },
  { id: '02', description: 'For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.', url: 'https://example.com' },
  { id: '03', description: 'For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.', url: 'https://example.com' },
];

function CaseStudies() {
  return (
    <div className="mt-[140px]">
      <SectionTitle title="Case Studies">
        <p>
          Explore Real-Life Examples of Our Proven Digital Marketing
          <br className="mobile:hidden desktop:inline"/>
          Success through Our Case Studies
        </p>
      </SectionTitle>
      <div className="rounded-[45px] mt-[80px] bg-p-black py-[70px] flex flex-col tablet:flex-row justify-between">
        {mockStudies.map(({ id, description, url}) => (
          <div key={id} className="relative text-left px-[60px] [&:not(:last-child)]:after:border-l-[1px] [&:not(:last-child)]:after:border-white [&:not(:last-child)]:after:absolute [&:not(:last-child)]:after:top-0 [&:not(:last-child)]:after:bottom-0 [&:not(:last-child)]:after:right-0">
            <p className="text-white">
              {description}
            </p>
            <div className="mt-5 flex gap-3 items-center">
              <Link label="Learn more" href={url} variant="green-full" />
              <img src={arrowGreenIcon} alt="arrow icon" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CaseStudies;