import "./App.css";
import ErrorApp from "./ErrorAppComponent/ErrorApp";
import About from "./AboutComponent/About";
import Pricing from "./PricingComponent/Pricing";
import Contact from "./ContactComponent/Contact";
import Root from "./RootComponent/Root";
import Header from "./HeaderComponent/Header";
import AddToWishlist from "./AddToWishlistComponent/AddToWishlist";
import Upload from "./UploadComponent/Upload";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorApp />,
    children: [
      {
        path: "/",
        element: <Header />,
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
      {
        path: "/wishlist",
        element: <AddToWishlist />,
      },
      {
        path: "/upload",
        element: <Upload />,
      }
    ],
  },
]);
const queryClient = new QueryClient();
function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </>
  );
}

export default App;
