import FirstComponent from './components/FirstComponent';
import TempleteExpressions from './components/TempleteExpressions';
import MyComponent from './components/MyComponent';
import Events from './components/Events';

import './App.css';

function App() {

  return (
    <>
      <div className='app'>
        <h1>Fundamentos React</h1>
        <FirstComponent />
        <TempleteExpressions />
        <MyComponent />
        <Events />
      </div>
    </>
  )
}

export default App;
