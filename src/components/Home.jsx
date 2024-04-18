import { Link } from 'react-router-dom'

const Home = ({ data }) => {
  const checkTask = async (task) => {
    const urlPut = `http://localhost:3000/markascompleted/${task._id}`
    await fetch(urlPut, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ completed: !task.completed })
    })
  }

  const deleteTask = async (id) => {
    const urlDelete = `http://localhost:3000/id/${id}`
    await fetch(urlDelete, { method: 'DELETE' })
  }

  return (
    <>
      <h2>Lista de tareas</h2>
      <ul className='taskList'>
        {data.map(item => (
          <li className='task' key={item._id}>
            <Link
              to={`/${item._id}`}
              style={{ textDecoration: item.completed === true ? 'line-through' : 'none' }}
            >{item.title}</Link>
            <div className='icons'>
              <img className='check' src='./src/assets/check.svg' onClick={() => checkTask(item)} />
              <img className='trash' src='./src/assets/trash.svg' onClick={() => deleteTask(item._id)} />
            </div>
          </li>
        ))}
      </ul>
    </>
  )
};

export default Home;