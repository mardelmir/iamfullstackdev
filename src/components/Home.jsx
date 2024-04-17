import { Link } from 'react-router-dom'

const Home = ({ children, data }) => {
  return (
    <>
      {children}
      <h2>Lista de tareas</h2>
      <ul className='taskList'>
        {data.map(item => (
          <li key={item._id}>
            <Link to={`/${item._id}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </>
  )
};

export default Home;