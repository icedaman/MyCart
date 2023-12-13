
const ShoeCard = ({ shoeObj, changeBigShoeImg, selectedBigShoeImg }) => {
  const handleClick = () => {
    if(selectedBigShoeImg !== shoeObj.bigShoe){
      changeBigShoeImg(shoeObj.bigShoe)
    }
  }

  return (
    <div className={`border-2 rounded-xl
      ${selectedBigShoeImg === shoeObj.bigShoe ? 'border-coral-red' : 'border-transparent' }
      cursor-pointer max-sm:flex-1 `}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center bg-card bg-center bg-cover rounded-xl
        sm:w-40 sm:h-40 max-sm:p-4"
      >
        <img src={shoeObj.thumbnail} alt="shoe collection" width={127} height={103} className="object-contain" /> 
      </div>
    </div>
  )
}

export default ShoeCard