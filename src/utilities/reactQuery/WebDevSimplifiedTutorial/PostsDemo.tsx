
import { useState } from "react"
import PostList1 from "./PostList1"
import PostList2 from "./PostList2"
import CreatePost from "./CreatePost"
import Post from "./Post"
import PostListPaginated from "./PostListPaginated"
import PostInfiniteScrolling from "./PostInfiniteScrolling"
import { useQueryClient } from "@tanstack/react-query"
import { getPost } from "./apiCalls"

const PostsDemo = () => {
  const [currentPage, setCurrentPage] = useState(<PostList1 />)

  const queryClient = useQueryClient()

function onHoverPrefetchPost () {
   queryClient.prefetchQuery({
    queryKey: ["posts", 1],
    queryFn: () => getPost(1)
  })
}
  return (
    <>
      <button onMouseEnter={onHoverPrefetchPost} onClick={() => setCurrentPage(<Post id={1} />)} className="ml-2 bg-teal-200 p-2">
        First Post
      </button>
      <button onClick={() => setCurrentPage(<PostList1 />)} className="ml-2 bg-teal-200 p-2">
        Post List 1
      </button>
      <button onClick={() => setCurrentPage(<PostList2 />)} className="ml-2 bg-teal-400 p-2">
        Post List 2
      </button>
      <button onClick={() => setCurrentPage(<CreatePost setCurrentPage={setCurrentPage} />)} className="ml-2 bg-teal-600 p-2">
        Create New Post
      </button>
      <button onClick={() => setCurrentPage(<PostListPaginated />)} className="text-white ml-2 bg-teal-800 p-2">
       Post List Paginated
      </button>
      <button onClick={() => setCurrentPage(<PostInfiniteScrolling />)} className="text-white ml-2 bg-purple-900 p-2">
       Post List Infinite
      </button>

      {currentPage}
    </>
  )
}

export default PostsDemo