import SectionTitle from "./shared/SectionTitle.tsx";
import ExpandableRow from "./shared/ExpandableRow.tsx";

const mockWorkingProcessSteps = [
  { id: '01', name: 'Consultation', description: 'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.' },
  { id: '02', name: 'Research and Strategy Development', description: 'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.' },
  { id: '03', name: 'Implementation', description: 'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.' },
  { id: '04', name: 'Monitoring and Optimization', description: 'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.' },
  { id: '05', name: 'Reporting and Communication', description: 'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.' },
  { id: '06', name: 'Continual Improvement', description: 'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.' },
]

function WorkingProcess() {
  const getStepNumber = (index: number) => {
    if (index > 8) return index + 1;
    return `0${index + 1}`;
  }

  return (
    <div className="mt-[140px]">
      <SectionTitle title="Our Working Process">
        <p>
          Step-by-Step Guide to Achieving
          <br className="mobile:hidden desktop:inline" />
          Your Business Goals
        </p>
      </SectionTitle>
      <div className="mt-20 flex flex-col gap-7">
        {mockWorkingProcessSteps.map(({ id, name, description, }, index) => (
          <ExpandableRow key={id} number={getStepNumber(index)} title={name}>
            <p>{description}</p>
          </ExpandableRow>
        ))}
      </div>
    </div>
  );
}

export default WorkingProcess;
