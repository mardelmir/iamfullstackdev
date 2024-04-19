import './App.css'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import useFetchData from './hooks/useFetchData.js';

import Home from './components/Home.jsx'
import ItemDetailPage from './components/ItemDetailPage.jsx';
import InputCreate from './components/InputCreate.jsx';

const App = () => {
  //const urlApi = import.meta.env.VITE_APP_API_URL
  
  const urlApi = 'http://localhost:3000'
  const { data } = useFetchData(urlApi)

  return (
    <Router>
      <div className='App'>
        <nav className='nav'>
          <Link to='/'>Inicio</Link>
          <Link to='/create'>Create</Link>
        </nav>
        {data === null
          ? (<div>Cargando...</div>)
          :
          <Routes>
            <Route path='/' element={<Home data={data} />} />
            <Route path='/create' element={<InputCreate/>} />
            {data.map(item => (
              <Route
                key={item._id}
                path={`/${item._id}`}
                element={<ItemDetailPage item={item} />} />
            ))}
          </Routes>
        }
      </div>
    </Router>
  )
};

export default App;


// import { useEffect, useState } from "react";
// import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
// import Home from './Home.jsx'
// import ItemDetailPage from "./ItemDetailPage.jsx";
// import InputCreate from "./InputCreate.jsx";

// const App = () => {
//   const [data, setData] = useState(null)
//   const urlApi = 'http://localhost:3000'

// const fetchData = async () => {
//   try {
//     const response = await fetch(urlApi)
//     const resData = await response.json()
//     setData(resData)
//   } catch (error) {
//     console.log(error)
//   }
// }

// useEffect(() => {
//   fetchData()
// }, [data])

//   return (
//     <Router>
//       <div>
//         <nav>
//           <Link to="/">Inicio</Link>
//           <Link to="/create">create</Link>
//         </nav>
//         {data === null 
//         ? (<div>cargando...</div>) 
//         : 
//           <Routes>
//             <Route path="/" element={<Home data={data} />} />
//             <Route path="/create" element={<InputCreate />} />
//             {data.map(item => (
//               <Route key={item._id} path={`/${item._id}`} element={<ItemDetailPage item={item}/>} />
//             ))
//             }
//           </Routes>
//         }
        
//       </div>
//     </Router>
//   )
// };

// export default App;