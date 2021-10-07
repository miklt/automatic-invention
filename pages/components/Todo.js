export default function Todo({ todo, index, completeTodo, removeTodo, id }) {
  let isCompleted = false
  let text = ''
  if (todo) {
    isCompleted = todo.isCompleted
    text = todo.text
  }
  return (
    <div
      className="flex flex-row justify-start px-2 text-lg"
      style={{ textDecoration: isCompleted ? 'line-through' : '' }}
    >
      <div id={id}>{text}</div>
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
