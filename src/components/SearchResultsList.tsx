
export const SearchResultsList = ({ results }) => {
  return (
    <>
    {results.length !== 0 ? (
      <div className="w-full bg-white flex flex-col shadow-lg shadow-slate-700 rounded-md mt-2 p-6 max-h-[300px] overflow-y-scroll">
        {results.map((user, index) =>( 
          <p key={user.id} className="p-2 hover:bg-coral-red hover:text-white hover:text-2xl text-xl font-montserrat font-medium">
            {user.name}
          </p>
        ))}
      </div>
      ) : null}
    </>
  )
}
