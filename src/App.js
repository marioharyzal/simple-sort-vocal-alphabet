import logo from "./logo.svg";
import "./App.css";
import Form from "./Form.js";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>Masukkan kata di sini</p>
                <Form />
            </header>
        </div>
    );
}

export default App;
