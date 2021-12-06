import Todo from './components/Todo'
import TodoForm from './components/TodoForm'
import { useState } from 'react'
import Head from 'next/head'
import uuid from 'react-uuid'
function App() {
  const [todos, setTodos] = useState([
    {
      text: 'Criar aplicação',
      isCompleted: false,
    },
    {
      text: 'Preparar apresentação',
      isCompleted: false,
    },
    {
      text: 'Testar usando selenium',
      isCompleted: false,
    },
  ])

  const addTodo = (text) => {
    const newTodos = [...todos, { text }]
    setTodos(newTodos)
  }

  const completeTodo = (index) => {
    const newTodos = [...todos]
    newTodos[index].isCompleted = true
    setTodos(newTodos)
  }

  const removeTodo = (index) => {
    const newTodos = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }

  return (
    <>
      <Head>
        <title>Mais uma Todo...</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="container px-4 py-4 mx-auto text-center">
        <div className="flex flex-col ">
          <h1 className="font-mono text-2xl font-bold text-center bg-yellow-200">
            Mais uma Todo...
          </h1>

          <ul className="flex-col p-3">
            <li>Digite alguma tarefa no quadrado amarelo e aperte enter.</li>
            <li>Clique no ✔ indicar uma tarefa feita</li>
            <li>Clique no &#10060;para remover uma tarefa</li>
          </ul>
        </div>

        <div className="flex flex-col py-2 ">
          {todos.length > 0 ? (
            <div id="tituloLista" className="text-lg font-semibold">
              A seguir a Lista de Tarefas...
            </div>
          ) : (
            <div id="listaVazia" className="text-lg font-semibold text-red-800">
              a Todo-List está vazia, adicione uma tarefa...
            </div>
          )}
          <div className="flex flex-col items-center py-2" id={'listaTodos'}>
            {todos.map((todo, index) => (
              <Todo
                key={uuid()}
                id={uuid()}
                index={index}
                todo={todo}
                completeTodo={completeTodo}
                removeTodo={removeTodo}
              />
            ))}
          </div>
          <div className="py-2">
            <TodoForm addTodo={addTodo} />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
