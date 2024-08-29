import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import routes from "./routes";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css"
import Root from "./routes/Root";
import ErrorPage from "./ErrorPage";
import Contact from "./routes/Contact";
// const router = createBrowserRouter(routes)

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <RouterProvider router={router} />
//   </StrictMode>,
// );


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    errorElement:<ErrorPage/>,
    children: [
      {
        path: 'contacts/:contactId',
        element: <Contact/>,
      }
    ],
  },
])

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)