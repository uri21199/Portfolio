import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Projects from './components/Projects/Projects';
import Navbar from './components/Navbar/Navbar';
import Skills from './components/Skills/Skills';

function App() {
    return (
        <div className='App'>
            <Navbar/>
            <About/>
            <Skills/>
            <Projects/>
            <Contact/>
        </div>
    );
}

export default App;
