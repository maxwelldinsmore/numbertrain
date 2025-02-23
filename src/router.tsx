import './routes/HomePage.css';
import { createBrowserRouter} from 'react-router-dom';

import Settings from "./routes/Settings";
import HomePage from './routes/HomePage';
import Stats from './routes/Stats';
import Root from './routes/Root';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
    { path: "", element: <HomePage /> },
    { path: "/Settings", element: <Settings />},
    { path: "/Stats", element: <Stats /> }
    ]
  },
]);


export default router;
