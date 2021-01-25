import './App.css';
import { BrowserRouter as Router } from "react-router-dom";

import Header from './components/Header'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import History from './pages/History'
import Distributions from './pages/Distributions'
import Terminal from './pages/Terminal'
import Quiz from './pages/Quiz'

function App() {
  return (
    <Router className="App">
      <Header />
      <Navigation />
      <Home/>
      <History />
      <Terminal />
      <Distributions />
      <Quiz />
    </Router>
  );
}

export default App;
