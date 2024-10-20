import { useEffect, useState } from 'react'




function App() {
  const [newtask, setNewTask] = useState('')
  const [tasks, setTasks] = useState(() => {
    const savedTask = localStorage.getItem('tasks')
    return savedTask ? JSON.parse(savedTask) : [];
  })

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
    // localStorage.clear()
  }, [tasks])

  const [isEdit, setIsEdit] = useState(null)
  const [newEdit, setNewEdit] = useState('')
  function handelAdd() {
    setTasks([...tasks, { toDo: newtask, isCheck: false }])
    setNewTask('')

  }
  function handelCheck(index) {
    const updateCheckTask = tasks.map((v, i) =>
      i === index ? { ...v, isCheck: !v.isCheck } : v
    )

    setTasks(updateCheckTask)
  }
  function handelEdit(index) {
    setIsEdit(index)
    setNewEdit(tasks[index].toDo)
  }
  function handelSave(index) {
    const updateCheckTask = tasks.map((v, i) =>
      i === index ? { ...v, toDo: newEdit } : v
    )

    setTasks(updateCheckTask)
    setIsEdit(null)
  }
  function handelRemove(index) {
    const updatedTasks = tasks.filter((v, i) => i !== index)
    setTasks(updatedTasks)
  }


  return (
    <div className='w-3/4 m-auto bg-slate-300 rounded-xl py-4'>
      <div className='text-center '>
        <h1 className='text-4xl font-bold my-4'>Our Todo List</h1>
        <div >
          <input type="text" onChange={(e) => setNewTask(e.target.value)} value={newtask} className='border-2 border-black'
            onKeyDown={(e) => e.key === "Enter" ? handelAdd() : null} />
          <button onClick={handelAdd} className='bg-black text-white px-2 ml-3'>Add</button>
        </div>
        <div className='text-center my-4'>
          <h1 className='text-3xl font-semibold my-6'>Our Task To Do</h1>
          {tasks.map((task, index) => (
            <div className='flex gap-4 justify-center items-center my-3' key={index}>
              <input type="checkbox" onChange={() => handelCheck(index)} checked={task.isCheck} />
              {isEdit === index ? (
                <input className='border-2 w-60 border-black rounded-lg pl-2' type='text' value={newEdit} onChange={(e) => setNewEdit(e.target.value)} />
              ) : (
                <div className={`w-64 ${ task.isCheck ? 'line-through' : ''}`}>{task.toDo}</div>
              )

              }
              <div className='flex gap-4'>
                {isEdit === index ? (
                  <button onClick={() => handelSave(index)} className='bg-black text-white px-3  rounded-xl'>Save</button>
                ) : (
                  <button onClick={() => handelEdit(index)} className='bg-black text-white px-3 rounded-xl'>Edit</button>
                )}
                <button onClick={() => handelRemove(index)} className='bg-black text-white px-3 rounded-xl'>Remove</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
