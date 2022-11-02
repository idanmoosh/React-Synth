import './App.css';
import { About } from './components/About/About';
import { SynthSection } from './components/SynthSection/SynthSection';

function App() {
  return (
    <div className='App'>
      <header>
        <h1>SynTronica</h1>
      </header>
      <section>
        <SynthSection />
      </section>
      <footer>
        <About />
      </footer>
    </div>
  );
}

export default App;
