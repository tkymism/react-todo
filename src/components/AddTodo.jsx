import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "../redux/actions";

const AddTodo = props => {
    const { addTodo, } = props;
    const [ input, setInput ] = useState("");
    const updateInput = newInput => setInput(newInput);
    const handleAddTodo = () => {
        addTodo(input);
        setInput("");
    }
    return (
        <div>
            <input
                onChange={e => updateInput(e.target.value)}
                value={input}
            />
            <button className="add-todo" onClick={handleAddTodo}>Add Todo</button>
        </div>
    );
}

export default connect(null,{ addTodo })(AddTodo);
// export default AddTodo;
