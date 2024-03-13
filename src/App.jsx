import "./App.css";
import ErrorApp from "./ErrorAppComponent/ErrorApp";
import About from "./AboutComponent/About";
import Pricing from "./PricingComponent/Pricing";
import Contact from "./ContactComponent/Contact";
import Root from "./RootComponent/Root";
import Search from "./SearchComponent/Search";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorApp />,
    children: [
      {
        path: "/",
        element: <Search />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/pricing",
        element: <Pricing />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
