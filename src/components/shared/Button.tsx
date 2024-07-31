const buttonStyles = {
  black: 'bg-p-black text-white hover:bg-p-green hover:text-black duration-300' as string,
  white: 'bg-white text-black border border-black hover:bg-p-green hover:text-black duration-300' as string,
  green: 'bg-p-green text-black hover:bg-white duration-300' as string,
};

type ButtonVariants = keyof typeof buttonStyles;
type ButtonProps = {
  children: React.ReactNode;
  variant?: ButtonVariants;
  className?: string;
  onClick?: () => void;
};

function Button({ children, variant, className, onClick }: ButtonProps) {
  const defaultStyles = variant ? buttonStyles[variant] : buttonStyles.black;

  return (
    <button className={`${defaultStyles} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;