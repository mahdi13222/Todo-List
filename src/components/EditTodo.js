import React,{useState} from "react";
import { editTodo} from "../store/slices/todosSlice"
import {useDispatch} from "react-redux";
import axios from "axios";

function EditTodo({ text , edit }){
    const [input, setInput] = useState(text)

    const edittodo = () => edit(input)
    let inputHandler = e => setInput(e.target.value);

    return(
        <>
            <div className="flex mb-4 items-center">
                <input value={input} onChange={inputHandler} className='mr-auto  line-through text-green-600 text-gray-700' />

                <button  className="p-1 px-2 ml-4 mr-2 border-2 rounded hover:text-white text-gray-400 border-gray-400 hover:bg-gray-400" onClick={edittodo}>Edit</button>
            </div>
        </>
    )
}
export default EditTodo;