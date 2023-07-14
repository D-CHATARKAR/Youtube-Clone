import React, { Children } from 'react';
import {Provider} from 'react-redux';
import "./App.css";
import Head from './components/Head';
import Body from './components/Body';
import store from './utils/store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Maincontainer from './components/Maincontainer';
import Watchpage from './components/Watchpage';

function App() {
  const appRouter=createBrowserRouter([{
    path: "/",
    element:<Body/>,
    children:[
      {path:"/",
      element:<Maincontainer/>
    },
    {
      path:'watch',
      element:<Watchpage/>

    }
    ]
  }])
  return (
    <Provider store={store}>
    <div className='p-2 m-2'>
    <Head/>
    <RouterProvider router={appRouter}/>
   
    </div>
    </Provider>
  );
}

export default App;
