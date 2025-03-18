import './App.css';
import Layout from './components/Layout';
import Grid from './components/Grid';
import Hero from './components/Hero';

function App() {
  return (
    <div className="app">
    <Layout>
      <main>
        <Hero />
        <Grid />
      </main>
    </Layout>
    </div>
  );
}

export default App;
