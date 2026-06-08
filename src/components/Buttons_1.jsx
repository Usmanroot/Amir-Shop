export default function Buttons_1({text, variant = 'primary', onClick}) {
  const baseStyles = 'px-4 py-2 rounded-xl font-semibold transition-colors duration-300';
  const variants = {
    primary: 'bg-[#2c60e6] text-white border-none hover:bg-[#ffff] hover:text-[#2c60e6] hover:border-[2px] hover:border-[#2c60e6]',
    secondary: 'bg-[#f0f0f0] text-gray-800 border-none hover:bg-[#e0e0e0]',
    danger: 'bg-red-500 text-white border-none hover:bg-red-600',
  }

  return (
    <button className={``} onClick={onClick}>
      {text}
    </button>
  );
}