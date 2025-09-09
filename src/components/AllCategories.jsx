import { useSelector } from "react-redux";
import Category from "./Category";

const AllCategories = () => {

    const { categories } = useSelector((state) => state.widgets);
    
    return (
        <div className="px-2">
            {
               categories.map(category => <Category category={category} />)
            }
        </div>
    )
}

export default AllCategories;