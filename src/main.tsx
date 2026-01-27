import React from "react"
import ReactDOM from "react-dom/client"
import { RouterProvider } from "react-router"
import { router } from "./app/router"
import "./styles/index.css"
import { ThemeProvider } from "./providers/Themeprovider"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="system">
    <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
)