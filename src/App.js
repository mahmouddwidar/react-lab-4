import './App.css';
import Home from './Components/Home';
import Nav from './Components/Nav';
import Products from './Components/Products';
import Error from './Components/Error'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import AddProduct from './Components/AddProduct';
import { CommentsContextProvider } from './ContextApis/CommentsContext';
import Comments from './Components/Comments';
import CommentsTable from './Components/CommentsTable';
import ShowProduct from './Components/ShowProduct';
import EditProduct from './Components/EditProduct';

function App() {
  return (
    <CommentsContextProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </CommentsContextProvider>
  );
}

function AppRoutes() {
  // let location = useLocation();
  // let isRouteDefined = ['/', '/home', '/products', '/add', '/comments', '/commentstable', '/products/:id'].includes(location.pathname);

  return (
    <>
    <Nav />
      <div className="container mt-3">
        <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/add" element={<AddProduct />} />
              <Route path="/products/:id" element={<ShowProduct />} />
              <Route path="/edit/:id" element={<EditProduct />} />
              <Route path="/comments" element={<Comments />} />
              <Route path="/commentstable" element={<CommentsTable />} />
            <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </>
  );
}

export default App;