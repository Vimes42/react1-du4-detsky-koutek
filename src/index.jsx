import * as React from "react";
import { createRoot } from 'react-dom/client';
import { HomePage } from './pages/HomePage';
import { About } from './pages/About/index.jsx';
import { Contact } from './pages/Contact/index.jsx';
import { ErrorPage } from "./pages/ErrorPage/index.jsx";
import { CentersPage } from './pages/CentersPage/index.jsx';
import { CenterDetail } from "./pages/CenterDetail/index.jsx";

import {
  createBrowserRouter,
  RouterProvider,
  Link,
  Outlet,

} from "react-router-dom";
import './global.css';

const App = () => (
  <>
  <div className="container">
      <header>
        <div className="logo" />
        <h1>Hernička</h1>
      </header>
          <nav>
            <Link to='/'>Domů</Link>
            <span> </span>
            <Link to='/pobocky'>Pobočky</Link>
            <span> </span>
            <Link to='/about'>O nás</Link>
            <span> </span>
            <Link to='/contact'>Kontakt</Link>
            <span> </span>
           </nav>
      <main>
      <Outlet />
      </main>

      <footer>
        <p>Czechitas, React 1, 2024
        </p>
      </footer>
    </div>
  </>
  )


const router = createBrowserRouter([
  {
    path: "/",
    element: (<App />),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: (<HomePage />),
      },
      {
        path: "/about",
        element: (<About />),
      },
      {
        path: "/contact",
        element: (<Contact />),
      },
      {
        path: "/pobocky",
        element: (<CentersPage />),
      },
      {
        path: "/pobocky/:id",
        element: (<CenterDetail />),
      }
    ]
  },
]);

{createRoot(document.querySelector('#app')).render(
  <RouterProvider router={router} />
)}

