import { useQuery } from "@tanstack/react-query"
import { getPosts, getPost, getUser } from './apiCalls'

const Post = ({ id }: any) => {
  const {data: postsData, status: postsStatus, error: postsError} = useQuery({
    queryKey: ["posts",  id],
    queryFn: () => getPost(id),
    //staleTime: 60 * 1000
  })
  
  const {data: usersData, status: usersStatus, error: usersError, isLoading} = useQuery({
    queryKey: ["users",  postsData?.userId],
    // only runs the users query if the id of the post id is not null
    enabled: postsData?.userId != null,
    queryFn: () => getUser(postsData?.userId)
  })

  if(postsStatus=== 'pending') return <div>Loading</div>
  if(postsStatus=== 'error') return <div>An Error ococcured: {postsError.message}</div>

  return (
    <>
      <div className="bg-amber-300">
        <h3 className="bg-coral-red">
          {usersStatus === 'pending'
            ? 'Loading......'
            : usersStatus === 'error'
            ? `Error: ${usersError.message}` 
            : usersData?.name
          }
        </h3>

        {postsData.title}
      </div>
    </>
  )
}

export default Post