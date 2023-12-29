import { NavLink} from 'react-router-dom'

export const SearchResultsList = ({ results, setResults, setInput }) => {
  
  const handleClick = () =>{
    setInput('')
    setResults([])
  }

  return (
    <>
    {results.length !== 0 ? (
      <div className="w-full bg-white flex flex-col shadow-lg shadow-slate-700 rounded-md mt-2 p-6 max-h-[530px] overflow-y-scroll">
        {results.map((item, index) =>( 
          <>
            <NavLink to={`/products/${item.category}/${item.id}`} onClick={handleClick}>
              <p key={item.id} className="p-4 border-b-2 hover:bg-coral-red hover:text-white hover:text-2xl text-xl font-montserrat font-medium">
                  <img src={item.imgURL} className="w-[120px] max-h-[120px] inline-block mr-16" alt="item pic" />{item.name}
                </p> 
            </NavLink>
          </>
        ))}
      </div>
      ) : null}
    </>
  )
}
