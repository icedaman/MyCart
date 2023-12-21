import { useQuery } from '@tanstack/react-query'
import { getPosts } from './apiCalls'

const PostList1 = () => {
  const { data: posts, status, error } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
    placeholderData: [{ id: 1, title: 'Initial Data'}]
  })

  if(status==='pending') return <div>Loading Post 1...</div>
  if(status==='error') return <div>OOPS! Error: {error.message}</div>
  
  return (
    <div className='bg-teal-200'>
      <h1 className='m-2'>POST LIST 1</h1>
      {posts?.sort().map((post: any) => {
        return (
          <p key={post.id}>{post.title}</p>
        )
      })}
    </div>
  )
}

export default PostList1