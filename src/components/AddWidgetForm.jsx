import { useDispatch, useSelector } from "react-redux"
import { addWidget, setCategoryAddWidgetClick } from "../Slices/Widgets";
import { useState } from "react";

const AddWidgetForm = () => {
    const [name,setName] = useState('');
    const [text, setText] = useState('');
    const { categoryAddWidgetClick, category } = useSelector((state) => state.widgets);
    const dispatch = useDispatch();

    const onFormSubmit = (e) => {
        e.preventDefault();
        if(name.trim() === '' || text.trim() === ''){
            alert('Enter Widget name and text');
            return;
        }

        console.log(name);
        console.log(text);
        dispatch(addWidget({
            name: name.trim(),
            text: text.trim()
        }))
        dispatch(setCategoryAddWidgetClick(!categoryAddWidgetClick));
    }

    const onWidgetFormClose = () => {
        dispatch(setCategoryAddWidgetClick(!categoryAddWidgetClick));
    }

    const onNameChange = (e) => {
        setName(e.target.value);
    }

    const onTextChange = (e) => {
        setText(e.target.value);
    }

    return (
        <div className="w-full h-screen bg-black/70 flex justify-center items-center absolute top-0">
            <div className="px-2 text-slate-50 border absolute top-1 right-1 cursor-pointer" onClick={onWidgetFormClose}>x</div>
            <form onSubmit={onFormSubmit} className="bg-slate-50 text-slate-800 p-5 w-96">
                <h3 className="text-center font-semibold">Widget Data</h3>
                <div className="text-sm my-5">
                    <label className="block mb-1">Widget Name:</label>
                    <input type="text" onChange={onNameChange} placeholder="Widget Name" className="p-2 outline-none w-full border" required/>
                </div>
                <div className="text-sm">
                    <label className="block mb-1">Widget Text:</label>
                    <textarea onChange={onTextChange} className="p-2 outline-none w-full h-20 border"></textarea>
                </div>
                <div className="flex justify-center">
                    <button type="submit" className="bg-indigo-800 text-slate-50 px-2 py-1.5 items-center text-sm rounded-[5px] my-3">Add Widget</button>
                </div>
            </form>
        </div>
    )
}

export default AddWidgetForm