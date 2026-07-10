import { useEffect, useState } from "react";
import Sidebar from "./sidebar/Sidebar";
import MobileSidebar from "./sidebar/MobileSidebar";
import Topbar from "./Topbar";
import DashboardView from "../pages/DashboardView";
import LoadingSpinner from "./LoadingSpinner";
import axios from "/src/api/axios";
import ProtectedRoute from "./ProtectedRoute";

const DashboardLayout = () => {
  const [isSessionLoading, setIsSessionLoading] = useState(true);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchAdminSession = async () => {
      try {
        const response = await axios.get("/auth/me");
        setUserData(response.data.user || null);
      } catch (error) {
        console.error("Error fetching admin data from API", error);
      } finally {
        setIsSessionLoading(false);
      }
    };

    fetchAdminSession();
  }, []);

  const [open, setOpen] = useState(false);

  return (
    <>
    <ProtectedRoute>
    {isSessionLoading ? <LoadingSpinner message="Loading session data..." /> :
    <>
      <Sidebar />
      <MobileSidebar open={open} setOpen={setOpen} />
      <div className="dashboard-main bg-amazon-bg lg:pl-72">
       <Topbar userData={userData} open={open} onMenuClick={() => setOpen((prev) => !prev)} />
        <DashboardView userData={userData} />
      </div>
      </>}
    </ProtectedRoute>
    </>
  );
};

export default DashboardLayout;
