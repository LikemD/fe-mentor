import ChartSection from './components/ChartSection.js';
import BalanceSection from './components/BalanceSection.js';
import './App.css';

function App() {
  return (
    <div className="App bg-cream flex flex-col justify-center items-center min-h-screen px-4">
      <main>
        <BalanceSection />
        <ChartSection  />
      </main>
    </div>
  );
}

export default App;
