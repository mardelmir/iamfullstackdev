import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import useFetchData from './hooks/useFetchData.js';

import Home from './components/Home.jsx'
import ItemDetailPage from './components/ItemDetailPage.jsx';
import InputCreate from './components/InputCreate.jsx';

const App = () => {
  const urlApi = 'http://localhost:3000'
  const { data } = useFetchData(urlApi)

  return (
    <Router>
      <div>
        <nav>
          <Link to='/'>Inicio</Link>
        </nav>
        {data === null
          ? (<div>Cargando...</div>)
          :
          <Routes>
            <Route
              path='/'
              element={
                <Home data={data}>
                  <InputCreate />
                </Home>} />
            {data.map(item => (
              <Route
                key={item._id}
                path={`/${item._id}`}
                element={<ItemDetailPage item={item} />} />
            ))
            }
          </Routes>
        }
      </div>
    </Router>
  )
};

export default App;