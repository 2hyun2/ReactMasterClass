import { BrowserRouter, Routes, Route, createBrowserRouter} from "react-router-dom";
import Header from "./components/header";
import Home from "./screens/home";
import About from "./screens/about";
import Root from "./Root"
import NotFound from "./components/NotFound";
import User from "./screens/users/User";
import Followers from "./screens/users/Followers";


const router = createBrowserRouter([
    {
        path:"/",
        element: <Root />,
        children : [
            {
                path:"",
                element: <Home />
            },
            {
                path:"about",
                element: <About />
            },
            {
                path: "users/:userId",
                element: <User />,
                children: [
                    {
                        path: "followers",
                        element: <Followers />
                    }
                ]
            },

        ],
        errorElement: <NotFound />
    }
])


export default router;
