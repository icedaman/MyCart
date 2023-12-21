import { useQuery } from '@tanstack/react-query'
import { getPostsPaginated } from './apiCalls'
import { useState } from 'react'

const PostListPaginated = () => {
  const [page, setPage] = useState(1)

  const { data, status, error, isPlaceholderData  } = useQuery({
    queryKey: ["posts", { page }],
    placeholderData: (previousData, previousQuery) => previousData,
    queryFn: ()=> getPostsPaginated(page),
  })

  if(status==='pending') return <div>Loading Post 1...</div>
  if(status==='error') return <div>OOPS! Error: {error.message}</div>
  
  return (
    <div className='bg-teal-400'>
      <h1 className='m-2 '>POST LIST Paginated</h1>
      <br />
        <small>{isPlaceholderData && "Previous Data"}</small>
      {data?.previousPage ? (
        <button onClick={() => setPage(data.previousPage)} className='p-2 bg-red-700 m-2'>Previous Page</button>
      ) : ('')}
      {data?.nextPage ? (
        <button onClick={() => setPage(data.nextPage)} className='p-2 bg-red-700 m-2'>Next Page</button>
      ) : ('')}
      
      {data?.posts?.map((post: any) => {
        return (
          <>
            <p key={post.id}>title: {post.title}</p>
          </>
        )
      })}
    </div>
  )
}

export default PostListPaginated
