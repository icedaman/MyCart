
const Button = ({ label, iconURL, backgroundColor, borderColor, textColor, fullWidth }) => {
  return (
    <button className={`flex justify-center items-center
      px-7 py-4 border font-montserrat leading-none gap-2 rounded-full
      hover:text-[20px] ease-in-out duration-200
      ${backgroundColor ? backgroundColor : 'bg-coral-red hover:bg-[#ff4000] active:bg-orange-700 focus:bg-orange-800'}
      ${textColor ? textColor : 'text-white'}
      ${borderColor ? borderColor : 'border-[#ff4000]'}
      ${fullWidth && 'w-full'}
    `}
    >
      {label}
      {iconURL &&
        <img src={iconURL} alt="arrow-right-icon" className="ml-2 rounded-full w-5 h-5" />
      }
    </button>
  )
}

export default Button