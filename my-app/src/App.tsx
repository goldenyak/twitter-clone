import React from 'react';
import './App.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const divStyle = {
    marginBottom: '20px',
    color: 'red',

}


function App() {
    return (
        <div className="App">
            <div style={{marginBottom: '50px', color: 'blue', textDecoration: 'line-through'}}>hello world</div>
            <button style={divStyle}>click me</button>
            <div>
                <Button variant="outlined">Outlined</Button>
            </div>
            <div>
                <TextField label="Введите" variant="standard" />
            </div>
        </div>
    );
}

export default App;

