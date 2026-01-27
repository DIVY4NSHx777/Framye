// src/app/router.tsx
import { createBrowserRouter } from "react-router"
import Home from "./pages/Home"
import Layout from "./layouts/layout"
import About from "./pages/About"

export const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/about",
                element: <About />
            }
        ]
    }
])