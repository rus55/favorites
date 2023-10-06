import React from 'react';
import Dashboard from "../../components/dashboard/Dashboard";
import style from "./DashBoardPage.module.scss";
import {useSelector} from "react-redux";

const DashBoardPage = () => {
    const count = useSelector(state => state.favoritesAlbums)?.length
    return (
        <div>
            <div className={style.dashboard}>Количество избранных элементов: {count}</div>
            <Dashboard/>
        </div>
    );
};

export default DashBoardPage;