import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../components/shared/Layout";
import Home from "../components/pages/Home";
import DashBoard from "../components/pages/DashBoard";
import SectionManito from "../components/pages/DashBoard/SectionManito";
import SectionInbox from "../components/pages/DashBoard/SectionInbox";
import SectionSent from "../components/pages/DashBoard/SectionSent";

/** 라우팅 컴포넌트 */
const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />}/>
                <Route path="dashboard" element={<DashBoard />}>
                    <Route path="manito" element={<SectionManito />} />
                    <Route path="inbox" element={<SectionInbox />} />
                    <Route path="sent" element={<SectionSent />} />
                </Route>
            </Route>
        </Routes>
    );
};

export default Router;
