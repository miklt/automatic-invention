import { useState } from 'react'
export default function TodoForm({ addTodo }) {
  const [value, setValue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!value) return
    addTodo(value)
    setValue('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="h-10 bg-yellow-300 focus:bg-yellow-200"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <input
        className="h-10 px-4 py-2 ml-2 text-black bg-yellow-400 rounded-lg shadow-md hover:bg-yellow-300 "
        type="submit"
        value="enviar"
      />
    </form>
  )
}
