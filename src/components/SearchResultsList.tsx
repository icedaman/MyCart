
export const SearchResultsList = ({ results }) => {
  return (
    <>
    {results.length !== 0 ? (
      <div className="w-full bg-white flex flex-col shadow-lg shadow-slate-700 rounded-md mt-2 p-6 max-h-[300px] overflow-y-scroll">
        {results.map((item, index) =>( 
          <>
            
            <p key={item.id} className="p-2 hover:bg-coral-red hover:text-white hover:text-2xl text-xl font-montserrat font-medium">
              <img src={item.imgURL} className="w-[80px] h-[80px] inline-block mr-8" alt="shoe" />{item.name}
            </p>
          </>
        ))}
      </div>
      ) : null}
    </>
  )
}
