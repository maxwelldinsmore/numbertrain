import './css/HomePage.css';
import { createBrowserRouter} from 'react-router-dom';

import Settings from "./Routes/Settings";
import HomePage from './Routes/HomePage';
import Stats from './Routes/Stats';
import Root from './Routes/root';

/*
* Router element using reacts router to create paths 
* associated with their elements
*/
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
