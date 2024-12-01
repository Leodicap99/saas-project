import logo from './logo.svg';
import './App.css';
import ProjectComponent from './components/ProjectComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">Kick Starter Projects</header>
      <div className="table-wrapper">
        <ProjectComponent />
      </div>
    </div>
  );
}

export default App;
