import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className='pt-24'>
      <div className="drawer drawer-mobile">
        <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ">

          <h1 className="text-3xl text-purple-500">Dashboard</h1>
          <Outlet></Outlet>

        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <Link to='/dashboard'>My Appointments</Link>
            <Link to='/dashboard/myReview'>My Review</Link>
            <Link to='/dashboard/myHistory'> myHistory</Link>

          </ul>

        </div>
      </div>

    </div>
  )
}

export default Dashboard