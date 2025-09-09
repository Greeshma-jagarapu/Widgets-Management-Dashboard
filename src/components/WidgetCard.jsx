import { useDispatch } from "react-redux"
import { deleteWidget } from "../Slices/Widgets"

const WidgetCard = ({id,title,text,isChecked,widgetCatName}) => {
    const dispatch = useDispatch();
    const onWidgetDeleteClick = () => {
       dispatch(deleteWidget({
          catName : widgetCatName,
          widgetId : id
       }))
    }

    return (
        isChecked && <div className="bg-white p-3 w-96 h-44 rounded-md shadow-sm relative">
            <div onClick={onWidgetDeleteClick} className="absolute right-0.5 top-0.5 border px-2 bg-slate-100 rounded-sm cursor-pointer">x</div>
            <h4 className="text-[14px] font-medium">{title}</h4>
            <p className="text-sm">{text}</p>
        </div>
    )
}

export default WidgetCard;