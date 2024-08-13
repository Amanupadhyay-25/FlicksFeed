import Head from './components/Head';
import './App.css';
import { Body } from './components/Body';
import { Provider } from 'react-redux';
import store from './utils/store';
import { createBrowserRouter } from 'react-router-dom';

//it takes or array of path

function App() {
  return (
    <Provider store={store}>
    <div >
    <Head/>
    <Body/>
    </div>
    </Provider>
  );
}

export default App;
