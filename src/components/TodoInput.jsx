import { useState } from "react";

export function TodoInput(props) {
    const { handleAddTask } = props;
    const [inputValue, setInputValue] = useState('');

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && inputValue) {
            handleAddTask(inputValue);
            setInputValue('');
        }
    };

    return (
        <div className="input-container">
            <input 
                value={inputValue} 
                onChange={(e) => setInputValue(e.target.value)} 
                onKeyDown={handleKeyPress}
                type="text" 
                placeholder="Add a new task" 
            />
            <button onClick={() => {
                if (!inputValue) return;
                handleAddTask(inputValue);
                setInputValue('');
            }}>
                <i className="fa-solid fa-plus"></i>
            </button>
        </div>
    );
}