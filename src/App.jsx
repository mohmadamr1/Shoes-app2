
import Products from "./components/Products"
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Sharedlsyout from "./components/Sharedlsyout";
import Home from "./components/Home";
function App() {
  
  const Router = createBrowserRouter([
    {
      path: "/",
      element: <Sharedlsyout/>,
      children: [
        {
          path: "/",
          element: < Home />,
        },
        {
          path: "/products",
          element: <Products />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={Router} />
    </>
  );
}

export default App
