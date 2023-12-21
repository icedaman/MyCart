import { useRef, useState } from "react"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createPost } from "./apiCalls"
import Post from "./Post"

const CreatePost = ({ setCurrentPage }) => {
  const titleRef = useRef()
  const bodyRef = useRef()

  const queryClient = useQueryClient()
  //alternative way to handle form data
  // const [formData, setFormData] = useState({})

  const { data, mutate, isError, isPending, error } = useMutation({
    mutationFn: createPost,
    onSuccess: (data) => {
      //manually set data in the cache after mutation fn finishes
      queryClient.setQueryData(["posts", data.id],  data)
      //invalidates the posts data with the exact query key posts + id instead of all posts queries
      queryClient.invalidateQueries(["posts"], { exact: true})
      setCurrentPage(<Post id={data?.id} />)
    }
  })

  // const handleChange = (e) =>{
  //   setFormData({
  //     ...formData,
  //     [e.target.name] : e.target.value
  //   })
  // }

  const onSubmit = (e) => {
    e.preventDefault()
    mutate({ 
      title: titleRef?.current.value ,
      body: bodyRef?.current.value 
    })
  }

  return (
    <div className="bg-teal-600 p-10">
      {/* <p>{isError && JSON.stringify(error.message)}</p> */}
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="title">title : </label>
          <input id="title" type="text"  ref={titleRef}/>
        </div>
        <div>
          <label htmlFor="body">body : </label>
          <input id="body" type="text" ref={bodyRef} />
          {/* <input name="body" id="body" type="text" onChange={handleChange} /> */}
        </div>
        <button className="m-2 border-2 p-2 border-r-red-600 bg-slate-500 text-white" disabled={isPending}>
          {isPending ? 'Loading........' : 'Create'}
        </button>
      </form>
      
      <p>title: {data?.title}</p>
      <p>body: {data?.body}</p>
    </div>
  )
}

export default CreatePost