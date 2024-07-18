type SectionTitleProps = {
  title: string;
  children?: React.ReactNode;
};

function SectionTitle({ title, children }: SectionTitleProps) {
  return (
    <div className="flex gap-10 items-center text-left">
      <h2 className="highlight-green">
        {title}
      </h2>
      {children}
    </div>
  );
}

export default SectionTitle;