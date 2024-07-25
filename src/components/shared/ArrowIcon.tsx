type ArrowIconProps = {
  direction: 'left' | 'right';
  color?: string;
};

function ArrowIcon ({ direction, color }: ArrowIconProps) {
  return direction === 'left' ? (
    <svg width="35px" height="35px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 12H19M5 12L11 6M5 12L11 18" stroke={color || "#000000"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ) : (
    <svg width="35px" height="35px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke={color || "#000000"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default ArrowIcon;