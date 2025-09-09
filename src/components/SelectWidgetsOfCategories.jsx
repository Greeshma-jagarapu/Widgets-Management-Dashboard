import { useDispatch, useSelector } from "react-redux"
import { setCategory, setSelectionWindowState, setWidgetCheckedUnchecked } from "../Slices/Widgets";
import { useState } from "react";

const SelectWidgetsOFCategories = () => {

    const dispatch = useDispatch();
    const { categories, category } = useSelector((state) => state.widgets);

    const [draft,setDraft] = useState(categories);

    const getStyles = () => {
        return "w-20 h-8 border-b-2 flex justify-center items-center cursor-pointer";
    }

    const handleToggle = (id) => {
        setDraft((prev) => prev.map(cat => cat.name === category ? {...cat, widgets: cat.widgets.map(widget => widget.id === id ? {...widget, isChecked: !widget.isChecked} : widget)} : cat));       
    }

    const onConfirmClick = () => {
        dispatch(setWidgetCheckedUnchecked(draft))
        dispatch(setSelectionWindowState(false));
    }
   
    const categoryWidgets = draft.find(cat => cat.name === category);

    return (
        <div className="w-12/12 sm:w-7/12 md:w-5/12 bg-slate-50 h-screen absolute right-0">
            <div className="bg-indigo-900 text-slate-50 p-2 flex justify-between items-center">
                <p className="text-xs ml-3 font-medium">Add Widget</p>
                <div className="cursor-pointer" onClick={() => dispatch(setSelectionWindowState(false))}>x</div>
            </div>
            <p className="text-slate-700 p-3 pl-4 text-sm">Personalise your dashboard by adding the following widgets</p> 
            <div className="px-1 text-xs font-medium flex items-center">
               <div onClick={() => dispatch(setCategory("CSPM Executive Dashboard"))} className={`${getStyles()} ${category === "CSPM Executive Dashboard" ? "border-indigo-800 text-indigo-800" : "text-slate-500"}`}>CSPW</div>
               <div onClick={() => dispatch(setCategory("CWPP Dashboard"))} className={`${getStyles()} ${category === "CWPP Dashboard" ? "border-indigo-800 text-indigo-800" : "text-slate-500"}`}>CWPP</div>
               <div onClick={() => dispatch(setCategory("Registry Scan"))} className={`${getStyles()} ${category === "Registry Scan" ? "border-indigo-800 text-indigo-800" : "text-slate-500"}`}>Image</div>
            </div>
            <div className="py-2 px-6">
               {
                  categoryWidgets.widgets?.map(widget => <div className="text-sm py-1 px-2 border my-2 flex items-center text-slate-800" key={widget.id}>
                    <input onChange={() => handleToggle(widget.id)} className="mr-2 size-3 cursor-pointer" checked={widget.isChecked} type="checkbox"/>
                    <span>{widget.title}</span>
                  </div>)
               }
            </div>
            <div className="absolute bottom-2 right-0">
                <button onClick={() => dispatch(setSelectionWindowState(false))} className="text-sm border border-indigo-900 text-indigo-900 w-24 h-8 mr-2 rounded-md">cancel</button>
                <button onClick={onConfirmClick} className="text-sm border border-indigo-900 bg-indigo-900 text-slate-50 w-24 h-8 mr-2 rounded-md">confirm</button>
            </div>
        </div>
    )
}

export default SelectWidgetsOFCategories