import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import ProjectsPage from "./pages/ProjectsPage";
import "./index.css";
import NotFound from "./pages/NotFound";
import Layout from "./pages/Layout";

// ReactDOM.createRoot(document.getElementById("root")!).render(
//   <React.StrictMode>
//     <Router>
//       <Routes>
//         <Route path="/" element={<App />} />
//         <Route path="/projects" element={<ProjectsPage />} />
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </Router>
//   </React.StrictMode>
// );

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <App /> },
      { path: "projects", element: <ProjectsPage /> },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
