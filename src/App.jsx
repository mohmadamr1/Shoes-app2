
import Products from "./components/Products"
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Sharedlsyout from "./components/Sharedlsyout";
import Home from "./components/Home";
import MySkills from "./components/MySkills";
import Man from "./components/Man";
import Women from "./components/women";
import NewArrivals from "./components/NewArrivals";



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
        {
          path: "/myskills ",
          element: <MySkills />,
        },
        {
          path: "/man",
          element: <Man />,
        },
        {
          path: "/women",
          element: <Women/>,
        },
        {
          path: "/new Arrivals",
          element: <NewArrivals/>,
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
