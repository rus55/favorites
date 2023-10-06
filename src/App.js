import React from 'react';
import {Route, Routes} from "react-router";
import Layout from "./layout/Layout";
import NotFound from "./pages/NotFound";
import ListPage from "./pages/listPage/ListPage";
import DashBoardPage from "./pages/dashBoardPage/DashBoardPage";

function App() {
    return (
        <Routes>
            <Route path={'/'} element={<Layout/>}>
                <Route index element={<DashBoardPage/>}/>
                <Route path={'list'} element={<ListPage/>}/>
                <Route path={'*'} element={<NotFound/>}/>
            </Route>
        </Routes>
    );
}

export default App;