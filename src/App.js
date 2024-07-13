import React, { useEffect } from 'react';
import './App.css';

const App = () => {
    useEffect(() => {
        const rawData = 'TWlya28xMDE=';
        const hiddenElement = document.getElementById('hiddenData');
        hiddenElement.textContent = rawData;
    }, []);

    return (
        <div className="App">
            <h1>Welcome to Your Quest</h1>
            <p>If you decode the secret, the treasure is yours.</p>
            <div id="hiddenData" className="hidden"></div>
        </div>
    );
};

export default App;

