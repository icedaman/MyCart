import { useInfiniteQuery } from "@tanstack/react-query"
import { getPostsPaginated } from "./apiCalls"

function PostInfiniteScrolling() {

  const { data, fetchNextPage, isFetchingNextPage, hasNextPage, status, error, isFetchingPreviousPage, hasPreviousPage} = useInfiniteQuery({
    queryKey: ["posts", "infinite"],
    getNextPageParam: (prevPage) => prevPage.nextPage,
    queryFn: ({ pageParam = 1}) => getPostsPaginated(pageParam),
  })

  return (
    <div>
      {data?.pages
        .flatMap((data: any) => data.posts)
        .map(post => (
          <div key={post.id}>
            {post.title}
          </div>
        ))
      }
      {hasNextPage && (
        <button onClick={() => fetchNextPage()} className="p-4 bg-amber-500">
          {isFetchingNextPage ? 'Loading....' : 'Load More'}
        </button>
      )}
    </div>
  )
}

export default PostInfiniteScrolling