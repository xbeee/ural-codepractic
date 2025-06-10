import { useState } from "react";
import logo from "/logo.svg";
import { decodeROT13 } from "./utils";
import "./App.css";

function App() {
    const [showAnswer, setShowAnswer] = useState(false);
    const [value, setValue] = useState(''); // Хранение ввода пользователя
    const [result, setResult] = useState(''); // Хранение результата декодирования

    // Обработчик изменения текста в поле ввода
    const handleChange = (event) => {
        setValue(event.target.value.toUpperCase());
    };

    // Обработчик нажатия кнопки
    const handleClick = () => {
        setResult(decodeROT13(value));
    };


    return (
        <>
            <div>
                <a href="https://sbergraduate.ru/" target="_blank" rel="noopener noreferrer">
                    <img src={logo} className="logo" alt="Sber logo"/>
                </a>
            </div>
            <h1>Sber Ural Code</h1>
            <input 
                className="input" 
                type="text" 
                value={value} 
                onChange={handleChange} 
            />
           {result && (
                <>
                    <span>Ответ на контрольный вопрос:</span>
                    <h3 className="answer">
                        {result}
                    </h3>
                </>
            )}
            <div className="card">
                <button onClick={handleClick}>
                    Декодировать
                </button>
                <p>
                    Отредактируйте <code>src/App.jsx</code> и нажмите кнопку, <br/>
                    чтобы получить ответ на контрольный вопрос
                </p>
            </div>
            <p className="read-the-docs">Нажмите на логотип, чтобы узнать о Сбере</p>
        </>
    );
}

export default App;
