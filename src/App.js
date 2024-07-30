import logo from './logo.svg';
import './App.css';
import {  RouterProvider } from 'react-router-dom';
import router from './Router/Routes/Routes';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-photo-view/dist/react-photo-view.css';

function App() {
  
  return (
    <div >
    <RouterProvider router={router}></RouterProvider>
    <ToastContainer position='top-center'></ToastContainer>
    </div>
  );
}

export default App;
