import axios from "axios"

///dummy apis examples
export const GetPosts = async () =>{ 
  return await axios.get(`https://dummyjson.com/posts`)
  .then((res) => res.data.posts)
}

export const GetPost = async (id: number) =>{ 
  return await axios.get(`https://dummyjson.com/posts/${id}`)
  .then((res) => res.data)
}
export const CreatePost = async ({ title, userId}) =>{ 
  const payload = {
    title: title,
    userId: userId,
  }
  return await axios.post(`https://dummyjson.com/posts/add`, payload)
  .then((res) => res.data)
}

export const GetUser = async (id: number) =>{ 
  return await axios.get(`https://dummyjson.com/users/${id}`)
  .then((res) => res.data)
}
///


//web dev api calls to localhost using json-server

//POSTS
export async function getPosts() {
  const res = await axios
    .get("http://localhost:3030/posts", { params: { _sort: "title" } })
  return res.data
}

export async function getPostsPaginated(page) {
  const res = await axios
    .get("http://localhost:3030/posts", {
      params: { _page: page, _sort: "title", _limit: 2 },
    })
  const hasNext = page * 2 <= parseInt(res.headers["x-total-count"])
  return {
    nextPage: hasNext ? page + 1 : undefined,
    previousPage: page > 1 ? page - 1 : undefined,
    posts: res.data,
  }
}

export async function getPost(id) {
  const res = await axios.get(`http://localhost:3030/posts/${id}`)
  return res.data
}

export async function createPost({ title, body }) {
  const res = await axios
    .post("http://localhost:3030/posts", {
      title,
      body,
      userId: Math.floor(Math.random() * 5 + 1),
      id: Date.now(),
    })
  return res.data
}

//USERS
export async function getUser(id) {
  const res = await axios.get(`http://localhost:3030/users/${id}`)
  return res.data
}
