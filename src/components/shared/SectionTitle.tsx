type SectionTitleProps = {
  title: string;
  children?: React.ReactNode;
};

function SectionTitle({ title, children }: SectionTitleProps) {
  return (
    <div className="
      flex flex-col md:flex-row gap-8 items-center text-center md:text-left
      mt-[60px] tablet:mt-[140px] mb-[40px] tablet:mb-[80px]
    ">
      <h2 className="highlight-green">
        {title}
      </h2>
      {children}
    </div>
  );
}

export default SectionTitle;