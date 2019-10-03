import React, { useState } from "react";

const AddTodo = props => {
    const { addTodo } = props;
    const [ input, setInput ] = useState("");
    const handleAddTodo = () => {
        addTodo(input);
        setInput("");
    }
    return (
        <div>
            <input
                onChange={e => setInput(e.target.value)}
                value={input}
            />
            <button className="add-todo" onClick={handleAddTodo}>Add Todo</button>
        </div>
    );
}

export default AddTodo;
