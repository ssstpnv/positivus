import amazonLogo from '../assets/images/logos/amazon.svg';
import dribbleLogo from '../assets/images/logos/dribble.svg';
import hubspotLogo from '../assets/images/logos/hubspot.svg';
import notionLogo from '../assets/images/logos/notion.svg';
import netflixLogo from '../assets/images/logos/netflix.svg';
import zoomLogo from '../assets/images/logos/zoom.svg';

const logos = [
  { id: 'amazon', src: amazonLogo },
  { id: 'dribble', src: dribbleLogo },
  { id: 'hubspot', src: hubspotLogo },
  { id: 'notion', src: notionLogo },
  { id: 'netflix', src: netflixLogo },
  { id: 'zoom', src: zoomLogo },
];

function LogoCarousel() {
  return (
    <div className="relative overflow-hidden mt-[70px] [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
      <div className="flex w-full justify-around animate-infinite-scroll">
        {logos.map(({id, src}) => (
          <img src={src} alt={`${id} logo`}/>
        ))}
      </div>
      <div className="flex w-full justify-around absolute top-0 animate-infinite-scroll-2" aria-hidden="true">
        {logos.map(({id, src}) => (
          <img src={src} alt={`${id} logo`}/>
        ))}
      </div>
    </div>
  )
}

export default LogoCarousel;