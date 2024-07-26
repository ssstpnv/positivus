type SectionTitleProps = {
  title: string;
  children?: React.ReactNode;
};

function SectionTitle({ title, children }: SectionTitleProps) {
  return (
    <div className="flex flex-col md:flex-row gap-10 items-center text-center md:text-left">
      <h2 className="highlight-green">
        {title}
      </h2>
      {children}
    </div>
  );
}

export default SectionTitle;