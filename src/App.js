import './App.css';
import Home from './components/Home.js'
import store from './store/index'
import {Provider} from 'react-redux'


function App() {
  return (
    <Provider store={store}>

    <div className="App">
    <Home/>
    </div>
    </Provider>
  );
}

export default App;