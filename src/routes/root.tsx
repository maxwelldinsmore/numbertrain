import Header from "../components/header";

import {Outlet} from "react-router-dom";
const Root = () => { 

    return (
        <div>
            <Header></Header>
            <Outlet/>
        </div>
      );
};
    
export default Root;