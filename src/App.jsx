import Navbar from './components/Navbar'
import CNAPPDashboardNav from './components/CNAPPDashboardNav'
import AllCategories from './components/AllCategories'
import AddWidgetForm from './components/AddWidgetForm'
import { useSelector } from 'react-redux'
import SelectWidgetsOFCategories from './components/SelectWidgetsOfCategories'


function App() {

  const { categoryAddWidgetClick, isSelectionWindowOpen } = useSelector((state) => state.widgets)
  return (
    <div className="bg-slate-100 relative">
      <Navbar />
      <div className="px-8 py-7">
        <CNAPPDashboardNav />
        <div className="min-h-screen">
          <AllCategories />
        </div>
      </div>
      {
        categoryAddWidgetClick && <AddWidgetForm />
      }
      {
        isSelectionWindowOpen && <div className="w-full h-screen bg-black/70 absolute z-10 top-0">
          <SelectWidgetsOFCategories />
        </div>
      }
    </div>
  )
}

export default App
