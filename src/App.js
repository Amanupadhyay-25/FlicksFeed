import Head from './components/Head';
import './App.css';
import { Body } from './components/Body';
import { Provider } from 'react-redux';
import store from './utils/store';
import WatchPage from './components/WatchPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import Demo from './components/Demo';

//it takes or array of path
const appRouter=createBrowserRouter([
  {
  path:"/",
  element:<Body/>,
  children:[
    {
      path:"/",
      element:<MainContainer/>,
    },
    {
      path:"watch",
      element:<WatchPage/>,
    },
    {
      path:"demo",
      element:<Demo/>
    },
  ],
  },
])

function App() {
  return (
    <Provider store={store}>
    <div >
    <Head/>
  <RouterProvider router={appRouter}/>
    </div>
    </Provider>
  );
}

export default App;
