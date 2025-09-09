import { useDispatch } from "react-redux";
import { setSearchText } from "../Slices/Widgets";

const Navbar = () => {
    const dispatch = useDispatch();
    const handleSearch = (e) => {
        dispatch(setSearchText({
            searchValue: e.target.value.trim()
        }));
    }
    return (
        <nav className="flex flex-col sm:flex-row gap-1 sm:gap-0 items-center px-8 justify-between bg-slate-50 py-1 text-sm">
            <div className="flex items-center text-xs">
                <h3 className="text-slate-400">Home</h3>
                <i className="fa-solid fa-angle-right text-slate-400"></i>
                <h3 className="text-indigo-900 font-semibold">Dashboard V2</h3>
            </div>
            <div className="flex items-center gap-5">
                <div  className="bg-slate-100 border p-0.5 flex items-center">
                  <i className="fa-solid fa-magnifying-glass text-slate-400 mr-1"></i>
                  <input type="text" onChange={handleSearch} placeholder="Search anything.." className="bg-slate-100 outline-none sm:w-72" />
                </div>
                <i className="fa-regular fa-bell"></i>
                <i className="fa-solid fa-circle-user"></i>
            </div>
        </nav>
    )
}

export default Navbar;