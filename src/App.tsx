import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import "./App.css";
import ErrorPage from "./pages/Error";
import HomePage from "./pages/Home";
import MoviePage from "./pages/Movie";
import PersonPage from "./pages/Person";
import RootPage from "./pages/Root";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/person/:name", element: <PersonPage /> },
      // { path: "/movie/:mname", element: <TestPage /> },
      { path: "/movie/:name", element: <MoviePage /> },
    ],
    errorElement: <ErrorPage/>
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={routers}></RouterProvider>
    </>
  );
}

export default App;
