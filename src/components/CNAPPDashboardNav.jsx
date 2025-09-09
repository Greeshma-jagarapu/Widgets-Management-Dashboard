import { useDispatch } from "react-redux";
import { setSelectionWindowState } from "../Slices/Widgets";

const CNAPPDashboardNav = () => {
    const dispatch = useDispatch();

    return (
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-0 justify-between items-center text-base relative">
            <h3 className="font-semibold text-slate-800">CNAPP Dashboard</h3>
            <div className="flex text-xs items-center gap-3 text-[11px]">
                <button onClick={() => dispatch(setSelectionWindowState(true))} className="px-2 py-1 bg-slate-50 border text-slate-600">Add Widget +</button>
                <i className="fa-solid fa-rotate bg-slate-50 p-2 px-3 flex justify-center text-[8px] border text-slate-600"></i>
                <i className="fa-solid fa-ellipsis-vertical bg-slate-50 text-[10px] border py-2 px-3 text-slate-600"></i>
                <div className="flex items-center bg-slate-50 border border-indigo-700 text-indigo-900 p-1 rounded-sm">
                  <i className="fa-solid fa-clock pr-1"></i>
                  <p className="px-1 border-l border-indigo-700 font-medium">Last 2 days</p>
                  <i className="fa-solid fa-angle-down"></i>
                </div>
            </div>
        </div>
    )
}

export default CNAPPDashboardNav;