import SlotMachine from './components/SlotMachine';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>🎰 利稻老虎機 🎰</h1>
      </header>
      <main>
        <SlotMachine />
      </main>
    </div>
  );
}

export default App;
