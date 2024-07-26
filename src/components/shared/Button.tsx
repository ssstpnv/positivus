const buttonStyles = {
  primary: 'bg-p-black text-white hover:bg-p-green hover:text-black duration-300' as string,
  secondary: 'bg-white text-black border border-black hover:bg-p-green hover:text-black duration-300' as string,
};

type ButtonVariants = keyof typeof buttonStyles;
type ButtonProps = {
  label: string;
  variant?: ButtonVariants;
  className?: string;
  onClick?: () => void;
};

function Button({ label, variant, className, onClick }: ButtonProps) {
  const defaultStyles = variant ? buttonStyles[variant] : buttonStyles.primary;

  return (
    <button className={`${defaultStyles} ${className}`} onClick={onClick}>
      {label}
    </button>
  );
}

export default Button;