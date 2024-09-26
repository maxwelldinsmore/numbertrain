import './routes/MainGame.css';
import { createBrowserRouter} from 'react-router-dom';

import Settings from "./routes/Settings";
import HomePage from './routes/HomePage';
import Root from './routes/Root';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
    { path: "", element: <HomePage /> },
    { path: "/Settings", element: <Settings />}
    ]
  },
]);


export default router;
