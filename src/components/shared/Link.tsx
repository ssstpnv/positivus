type LinkProps = {
  href: string;
  label: string;
  onClick?: () => void;
};

function Link ({ href, label, onClick }: LinkProps) {
  return (
    <a href={href} target="_blank" className="text-lg relative
      after:bg-p-green after:h-[3px] after:w-0 after:left-0 after:-bottom-[3px] after:absolute after:duration-300
      hover:after:w-[100%]"
      onClick={onClick}
    >
      {label}
    </a>
  );
}

export default Link;