import React from 'react';
import {NavLink, Outlet} from "react-router-dom";
import styles from './Layout.module.scss'

const Layout = () => {
    return (
        <div className={styles.root}>
            <div className={styles.wrapper}>
                <div className={styles.layout}>
                    <NavLink to={"/"} className={styles.navLink}>
                        Страница дэшбоард
                    </NavLink>
                    <NavLink to={"list"} className={styles.navLink}>
                        Список загрузки элементов
                    </NavLink>
                </div>
                <Outlet/>
            </div>
        </div>
    );
};

export default Layout;