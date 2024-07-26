const colorSchemeOptions = {
  green: 'text-black after:bg-p-green',
  black: 'text-black after:bg-black',
  grey: 'text-p-grey after:bg-p-grey',
  'green-full': 'text-p-green after:bg-p-green',
};
type LinkVariants = keyof typeof colorSchemeOptions;
type LinkProps = {
  href: string;
  label: string;
  variant?: LinkVariants;
  onClick?: () => void;
};

function Link ({ href, label, onClick, variant }: LinkProps) {
  const colorScheme = colorSchemeOptions[variant as LinkVariants] || colorSchemeOptions.green;

  return (
    <a href={href} target="_blank" className={`text-lg relative ${colorScheme}
      after:h-[3px] after:absolute after:w-0 after:left-0 after:-bottom-[3px] after:rounded after:duration-300
      hover:after:w-full`}
      onClick={onClick}
    >
      {label}
    </a>
  );
}

export default Link;