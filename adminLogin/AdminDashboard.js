import React, {useMemo, useState} from 'react'
import BatchesData from '../BatchesData';
import DashboardHome from './DashboardHome';
import NewBatches from '../NewBatches';
import ViewEnquiry from '../Pages/ViewEnquiry';
import AddCourse from '../Pages/AddCourse';
import ViewCourse from '../Pages/ViewCourse';
import LatestNews from '../Pages/LatestNews';
const AdminDashboard = () => {

  const [view, setView] = useState("");
  const DashboardView = () => {
    if(view === ""){
      return <DashboardHome />
    }else if(view === "viewBatch"){
      return <BatchesData />
    }else if(view === "addBatch"){
      return <NewBatches />
    }else if(view === "viewEnquiry"){
      return <ViewEnquiry />
    }else if(view === "addCourse"){
      return <AddCourse />
    }else if(view === "viewCourse"){
      return <ViewCourse />
    }else if(view === "latestNews"){
      return <LatestNews />
    }
  }
  return (
    <div className='container-fluid'>
        <div className='row'>
            <aside className='col-12 col-xl-3 py-5'>
                <h3>Admin Dashboard</h3>
                <button onClick={() => setView("addBatch")}>Add batch</button>
                <button onClick={() => setView("viewBatch")}>View batches</button>
                <button onClick={() => setView("addCourse")}>Add Course</button>
                <button onClick={() => setView("viewCourse")}>View Course</button>
                <button onClick={() => setView("viewEnquiry")}>View Enquires</button>
                <button onClick={() => setView("latestNews")}>Latest News</button>
            </aside>
            <div className='col-12 col-xl-9 d-flex justify-content-center text-center align-items-center'>
              {useMemo(() => {
                return DashboardView()
              },[view])}
            </div>
        </div>
    </div>
  )
}

export default AdminDashboard