import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Stepper from './pages/Stepper';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Stepper />
    },
    
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App
