
const Button = ({ label, iconURL, backgroundColor, borderColor, textColor, fullWidth }) => {
  return (
    <button className={`flex justify-center items-center
      px-7 py-4 border font-montserrat leading-none gap-2 rounded-full
      ${backgroundColor ? backgroundColor : 'bg-coral-red'}
      ${textColor ? textColor : 'text-white'}
      ${borderColor ? borderColor : 'border-coral-red'}
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