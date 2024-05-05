import { Outlet } from "react-router-dom";
// import Sidebar from "../admin/sidebar/Sidebar";
// import ReactToast from "../site/components/Toast/ReactToast";



const AdminLayout = () => {
  return (
    <>
          {/* <Sidebar /> */}
        
          <Outlet />
    </>
  );
};

export default AdminLayout;
