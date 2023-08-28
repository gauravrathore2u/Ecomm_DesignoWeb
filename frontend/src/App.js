import './App.css';
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import { store } from './redux/store'
import { Provider } from 'react-redux'
import Signup from './pages/Signup';
import ErrorPage from './components/ErrorPage';
import Login from './pages/Login'
import Home from './pages/Home';
import ProductDetail from './components/ProductDetail';
import Cart from './pages/Cart';
import Admin from './pages/Admin';
import Additem from './pages/Additem';
import UpdateItem from './pages/UpdateItem';
import Deleteitem from './pages/Deleteitem';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/signup",
    element: <Signup/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/login",
    element: <Login/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/product/:id",
    element: <ProductDetail/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/cart",
    element: <Cart/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/admin",
    element: <Admin/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/admin/add",
    element: <Additem/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/admin/update",
    element: <UpdateItem/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/admin/delete",
    element: <Deleteitem/>,
    errorElement: <ErrorPage/>
  }
]);

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </div>
  );
}

export default App;
