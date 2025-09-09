import WidgetCard from "./WidgetCard";
import { useDispatch, useSelector } from "react-redux";
import { setCategory, setCategoryAddWidgetClick } from "../Slices/Widgets";

const Category = ({category}) => {

    const dispatch = useDispatch();
    const { categoryAddWidgetClick, searchText} = useSelector((state) => state.widgets);

    const filteredWidgets = searchText !== '' ? category.widgets.filter(widget => widget.title.toLowerCase().includes(searchText.toLowerCase())) : category.widgets;
  
    const onAddWidgetClick = () => {
        dispatch(setCategoryAddWidgetClick(!categoryAddWidgetClick));
        dispatch(setCategory(category.name));
    }

    return (
        <div className="text-slate-800 mt-4">
            {
              filteredWidgets?.length > 0 && <h4 className="text-[15px] font-medium">{category.name}</h4>
            }
            <div className="flex flex-wrap justify-center sm:justify-normal gap-3">
              {
                filteredWidgets.map(widget => <WidgetCard key={widget.id} id={widget.id} title={widget.title} text={widget.text} isChecked={widget.isChecked} widgetCatName={category.name} />)
              }
              {
                searchText === '' && <div className="bg-white w-96 h-44 rounded-lg flex justify-center items-center">
                  <button className="px-2 py-1 bg-slate-50 border text-slate-600 text-xs" onClick={onAddWidgetClick}>+ Add Widget</button> 
                </div> 
              }
            </div>
        </div>
    )
}

export default Category;