type SectionTitleProps = {
  title: string;
  description?: string;
};

function SectionTitle({ title, description }: SectionTitleProps): JSX.Element {
  return (
    <div className="flex gap-10 items-center">
      <h2 className="font-bold bg-p-green px-1.5 rounded-lg">
        {title}
      </h2>
      {description && (
        <p className="text-left whitespace-pre-line">
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionTitle;