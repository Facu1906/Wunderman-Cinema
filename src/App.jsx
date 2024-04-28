import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Welcome from './pages/Welcome.jsx';
import Movie from './pages/Movie.jsx';
import Datos from './pages/Datos.jsx'
import Cartelera from './pages/Cartelera.jsx';
import Destacada from './pages/Destacada.jsx'
import Destacada2 from './pages/Destacada2.jsx';
import Destacada3 from './pages/Destacada3.jsx';
import Felicitaciones from './pages/Felicitaciones.jsx';
import YoutubeVideo from './pages/YoutubeVideo.jsx';
import YoutubeVideo2 from './pages/YoutubeVideo2.jsx';
import YoutubeVideo3 from './pages/YoutubeVideo3.jsx';


const router = createBrowserRouter([
  { path: '/', element: <Welcome /> },
  { path: '/movie', element: <Movie /> },
  { path: '/datos', element: <Datos />},
  { path: '/cartelera', element: <Cartelera />},
  { path: '/destacada', element: <Destacada /> },
  { path: '/destacada2', element: <Destacada2 /> },
  { path: '/destacada3', element: <Destacada3 />},
  { path: '/felicitaciones', element: <Felicitaciones /> },
  { path: '/youtubevideo', element: <YoutubeVideo /> },
  { path: '/youtubevideo2', element: <YoutubeVideo2 /> },
  { path: '/youtubevideo3', element: <YoutubeVideo3 />}
]);

function App() {
  return <RouterProvider router={router} />
}

export default App;
