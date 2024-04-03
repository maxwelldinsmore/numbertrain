import React, { ChangeEvent, useEffect } from 'react';
import './routes/App.css';
import { useState, FunctionComponent, Component } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Settings from "./routes/Settings";
import HomePage from './routes/HomePage';
import Root from './routes/root';
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
