import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter} from "react-router-dom";
import {RouterProvider} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import APage from "./pages/APage";
import BPage from "./pages/BPage";
import HomePage from "./pages/HomePage";

const router = createBrowserRouter([
    {
        path: '/', element: <MainLayout/>,
        children: [
            {path: ' ', element:<HomePage/>},
            {path: 'a', element:<APage/>},
            {
                path: 'b', element:<BPage/>, children: [
                    {path: '1', element: <div>content 1</div>},
                    {path: '2', element: <div>content 2</div>},
                    {path: '3', element: <div>content 3</div>},
                ]},
        ]
    },
])

createRoot(document.getElementById('root')!)
    .render(<RouterProvider router={router} />)
