import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './Componenet/Blog/Blog';
import Quiz from './Componenet/Quiz/Quiz';
import Statistics from './Componenet/Statistics/Statistics';
import Topics from './Componenet/Topics/Topics';
import Main from './layout/Main';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
          element: <Topics></Topics>
        },
        {
          path: '/statistics',
          // loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
          element: <Statistics></Statistics>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/:ID',
          loader: async (props)=>{return fetch(`https://openapi.programming-hero.com/api/quiz/${props.params.ID}`)},
          element: <Quiz></Quiz>
        }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
