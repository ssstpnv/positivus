const ButtonStyles = {
  primary: 'bg-p-black text-white border border-black hover:bg-p-green hover:text-black duration-300' as string,
  secondary: 'bg-white text-black border border-black hover:bg-p-green hover:text-black duration-300' as string,
};

type ButtonVariants = keyof typeof ButtonStyles;
type ButtonProps = {
  label: string;
  variant: ButtonVariants;
  style?: string;
  onClick?: () => void;
};

function Button({ label, variant, style, onClick }: ButtonProps) {
  const defaultStyles = ButtonStyles[variant];

  return (
    <button className={`${defaultStyles} ${style || ''}`} onClick={onClick}>
      {label}
    </button>
  );
}

export default Button;