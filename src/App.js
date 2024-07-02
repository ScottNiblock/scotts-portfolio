
import './App.css';
import Projects from './containers/projects/Projects'
import {Contact, Header, Navbar, Project, Tech} from './components'

function App() {
  return (
    <div className="App">
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Tech />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
