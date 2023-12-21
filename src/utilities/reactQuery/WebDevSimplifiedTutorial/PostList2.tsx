import { useQueries, useQuery } from '@tanstack/react-query'
import { getPost, getPosts } from './apiCalls'

const PostList2 = () => {
  const { data: posts, status, error } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  })

  // running a query for each post -> accepts an array as arg -- returns empty array if posts is null => (posts ?? [])
  const queriesList = useQueries({
    queries: (posts ?? []).map(post => {
      console.log(post.id)
      return {
        querykey: ["posts", post.id],
        queryFn: () => getPost(post.id)
      }
    })
  })

  //has bug, array either contains the 1st or last index for each entry
  console.log(queriesList.map(query => query.data))

  if(status==='pending') return <div>Loading Post 1...</div>
  if(status==='error') return <div>OOPS! Error: {error.message}</div>
  
  return (
    <div className='bg-teal-400'>
      <h1 className='m-2'>POST LIST 2</h1>
      {posts?.map((post: any) => {
        return (
          <p key={post.id}>{post.title}</p>
        )
      })}
    </div>
  )
}

export default PostList2