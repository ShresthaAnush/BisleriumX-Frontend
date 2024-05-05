import { BrowserRouter, Route, Routes } from "react-router-dom";
import SiteLayout from "./site/SiteLayout";
import AdminLayout from "./site/AdminLayout";


const AppRoutes = () => {
    return (
        <>
        <BrowserRouter>
            <Routes>
                <Route path=" " element={<SiteLayout />}>
                    <Route index element={<HomePage />} />

                    <Route path="login" element={
                        <Public>
                            {/* PublicnRoutings halney */}
                        </Public>
                    }/>
                </Route>

                <Route path="/admin" element={
                    <IsAdmin>
                        <AdminLayout />
                    </IsAdmin>
                    }
                >
                    {/* Set Route */}
                </Route>
            </Routes>
        </BrowserRouter>
        </>
    );
};

export default AppRoutes