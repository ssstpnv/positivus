import greenArrowDarkCircle from '../assets/images/icons/arrow-green-circle-dark.svg';
import darkArrowWhiteCircle from '../assets/images/icons/arrow-dark-circle-white.svg';
import Link from "./shared/Link.tsx";

const colorSchemeOptions = {
  grey: {
    background: 'bg-p-grey',
    highlight: 'highlight-green',
    icon: greenArrowDarkCircle,
    linkVariant: 'green',
  },
  green: {
    background: 'bg-p-green',
    highlight: 'highlight-grey',
    icon: greenArrowDarkCircle,
    linkVariant: 'black',
  },
  black: {
    background: 'bg-p-black',
    highlight: 'highlight-grey',
    icon: darkArrowWhiteCircle,
    linkVariant: 'grey',
  },
};
export type CardVariants = keyof typeof colorSchemeOptions;
type ServiceCardProps = {
  labels: string[];
  link: string;
  img: string;
  variant: CardVariants;
};

function ServiceCard({ labels, link, img, variant = 'grey' }: ServiceCardProps) {
  const { background, highlight, icon, linkVariant } = colorSchemeOptions[variant];

  return (
    <div className={`card p-12 flex ${background}`}>
      <div className="flex flex-col justify-between">
        <div>
          {labels.map((label) => (
            <h3 key={label} className={`text-left w-fit ${highlight}`}>
              {label}
            </h3>
          ))}
        </div>
        <img src={img} alt={`${labels[0]} illustration`}/>
        <div className="flex gap-[15px] items-center">
          <img src={icon} alt="arrow"/>
          <Link href={link} label="Learn More" variant={linkVariant as CardVariants}/>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;