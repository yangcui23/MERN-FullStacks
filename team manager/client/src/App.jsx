import {Routes , Route , Link,Navigate} from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import List from './views/list';
import NewPlayer from './components/Form';
import Status from './views/status';
function App() {
  return (

    <div className="App">
      <div className="nav">
        <Link to={'/players/list'}>Manage Players</Link>
        <span>|</span>
        <Link to={'/status/1'}>Manage player status</Link>

      </div>
      <div>
        <Routes>
          <Route path='/' element={<Navigate to='/players/list'/>}/>
          <Route path='/players/list' element={<List/>} />
          <Route path='/players/new' element={<NewPlayer/>}/>
          <Route path='/status/1' element={<Status/>}/>
          <Route path='/status/2'/>
          <Route path='/status/3'/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
