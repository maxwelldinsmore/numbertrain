import React from "react";
import Header from "../Components/header";
import HomePage from "./HomePage";
import Settings from "./Settings";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
const Root = () => { 

    return (
        <div>
            <Header></Header>
            <Outlet/>
        </div>
        
      );
    };
    
    export default Root;