import SectionTitle from "./shared/SectionTitle.tsx";
import ServiceCard, { CardVariants } from './ServiceCard.tsx';
import illustration0 from '../assets/images/illustrations/tokyo-magnifier-web-search-with-elements.png';
import illustration1 from '../assets/images/illustrations/tokyo-selecting-a-value-in-the-browser-window 1.png';
import illustration2 from '../assets/images/illustrations/tokyo-browser-window-with-emoticon-likes-and-stars-around 2.png';
import illustration3 from '../assets/images/illustrations/tokyo-sending-messages-from-one-place-to-another 1.png';
import illustration4 from '../assets/images/illustrations/tokyo-many-browser-windows-with-different-information 1.png';
import illustration5 from '../assets/images/illustrations/tokyo-volumetric-analytics-of-different-types-in-web-browsers 2.png';

const services = [
  { id: '01', labels: ['Search engine', 'optimization'], img: illustration0, link: 'https://example.com', colorVariant: 'grey' },
  { id: '02', labels: ['Pay-per-click', 'advertising'], img: illustration1, link: 'https://example.com', colorVariant: 'green' },
  { id: '03', labels: ['Social Media', 'Marketing'], img: illustration2, link: 'https://example.com', colorVariant: 'black' },
  { id: '04', labels: ['Email', 'Marketing'], img: illustration3, link: 'https://example.com', colorVariant: 'grey' },
  { id: '05', labels: ['Content', 'Creation'], img: illustration4, link: 'https://example.com', colorVariant: 'green' },
  { id: '06', labels: ['Analytics and', 'tracking'], img: illustration5, link: 'https://example.com', colorVariant: 'black' },
];

function Services() {
  return (
    <div className="mt-[140px]">
      <SectionTitle title="Services">
        <p>
          At our digital marketing agency, we offer a range of services to
          <br className="mobile:hidden desktop:inline"/>
          help businesses grow and succeed online. These services include:
        </p>
      </SectionTitle>
      <div className="grid grid-cols-1 gap-10 desktop:grid-cols-2 mt-20">
        {services.map(({ id, labels, img, link, colorVariant }) => (
          <ServiceCard
            key={id}
            variant={colorVariant as CardVariants}
            labels={labels}
            img={img}
            link={link}
          />
        ))}
      </div>
    </div>
  )
}

export default Services;