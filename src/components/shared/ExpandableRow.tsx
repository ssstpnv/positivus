import { useState } from "react";
import plusIcon from "../../assets/images/icons/plus.svg";
import minusIcon from "../../assets/images/icons/minus.svg";

type ExpandableRowProps = {
  number?: string | number;
  title: string;
  children: React.ReactNode;
};

function ExpandableRow({ number, title, children }: ExpandableRowProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`card p-[30px] tablet:px-14 tablet:py-10 ${isExpanded ? 'bg-p-green' : 'bg-p-grey'} transition-colors duration-300`}>
      <div className="flex justify-between">
        <div className="flex gap-6 items-center">
          {number && (
            <span className="text-3xl tablet:text-6xl font-medium">
              {number}
            </span>
          )}
          <p className="text-lg tablet:text-3xl leading-[22px] font-medium">
            {title}
          </p>
        </div>
        <button onClick={() => setIsExpanded(!isExpanded)}>
          <img
            src={isExpanded ? minusIcon : plusIcon} alt={isExpanded ? 'Close Row' : 'Expand Row'}
            className="max-w-[30px] tablet:max-w-[58px]"
          />
        </button>
      </div>
      <div className={`grid overflow-hidden ${isExpanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0' } transition-all ease-in-out duration-300`}>
        <div className="overflow-hidden">
          <hr className="border-black mt-5 tablet:mt-10" />
          <div className="mt-5 tablet:mt-10">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExpandableRow;