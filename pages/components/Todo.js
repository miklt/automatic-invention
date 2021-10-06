export default function Todo({ todo, index, completeTodo, removeTodo }) {
  return (
    <div
      className="flex flex-row justify-start px-2 text-lg"
      id={index}
      style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }}
    >
      <div>{todo.text}</div>
      <div>
        <button
          className="font-bold text-green-800 "
          onClick={() => completeTodo(index)}
        >
          ✔
        </button>
        <button
          className="font-bold text-red-800 "
          onClick={() => removeTodo(index)}
        >
          &#10060;
        </button>
      </div>
    </div>
  )
}
