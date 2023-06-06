import './App.css';
import Leftbar from './Components/Leftbar/Leftbar';
import Rightbar from './Components/Rightbar/Rightbar';

function App() {
  return (
    <div className='container'>
      <div className="row">
        <div className="col-md-7">
          <Leftbar />
        </div>
        <div className="col-md-1 d-flex align-items-start vertical">
          <div className="vertical-line"></div>
        </div>
        <div className="col-md-4">
          <Rightbar />
        </div>
      </div>
    </div>
  );
}

export default App;
