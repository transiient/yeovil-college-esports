import React from 'react';
import './App.scss';

// Components
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';

function App() {
    return (
        <div className="App">
            <Header />
            <Home />
            <Footer />
        </div>
    );
}

export default App;
