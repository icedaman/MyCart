import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { fetchTodos, addTodo } from "./mockdata"
import TodoCard from "./TodoCard"
import { useState } from "react"

const TodosDemo = () => {
  const queryClient = useQueryClient()
  
  const [title, setNewTodoTitle] = useState('')
  const [search, setSearch] = useState('')

  const {data: todos, isLoading} = useQuery({
    //catches the data for the 'todos' query key(result of the fetch); Also, every param the fn depends on has to be added on the query key
    queryKey: ['todos', { search }],
    queryFn: () => fetchTodos(search),
    //tells the data is not stale and it won't refetch the data in the background
    staleTime: Infinity,
    //removes the caching functionality, data is garbage collected, telling it to never cache the data & make a fetch request every time
    gcTime: 0
  })

  const { mutateAsync: addTodoMutation} = useMutation({
    mutationFn: addTodo,
    //tells r query that there is new data & to refetch the todos(updated) again
    onSuccess: () => {
      //invalidates todos query to make it refetch the data
      queryClient.invalidateQueries(['todos'])
    }
  })

  const handleAddNewTodo = async () => {
    try {
      await addTodoMutation({ title })
      setNewTodoTitle('')
    } catch (error) {
      console.error(error)
    }
  }

  if(isLoading){
    return <div>Loading..</div>
  }
  
  return (
    <div>
      <input type="text" value={title} onChange={(e) => setNewTodoTitle(e.target.value)} className="border-2 border-red-400" />
      <button onClick={handleAddNewTodo} className="p-4 border-2 border-blue-500">Add Todo</button>
      {todos?.map((todo) => {
        return <TodoCard key={todo.id} todo={todo} />
      })}
    </div>
  )
}

export default TodosDemo