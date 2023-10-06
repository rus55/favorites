import React from 'react';
import styles from './Dashboard.module.scss';
import {useSelector} from "react-redux";

const Dashboard = () => {
    const favoritesAlbums = useSelector(state => state.favoritesAlbums)

    return (
        <div className={styles.wrapper}>{favoritesAlbums?.map((favoritesAlbum) => (
            <div key={favoritesAlbum.id} className={styles.card}>
                <img className={styles.icon} src={favoritesAlbum.thumbnailUrl}/>
                <div className={styles.block}>
                    <div><span className={styles.fontWeight}>Идентификатор:</span> {favoritesAlbum.id}</div>
                    <div className={styles.header}><span className={styles.fontWeight}>Заголовок:</span> {favoritesAlbum.title}</div>
                </div>
            </div>
        ))}</div>
    );
};

export default Dashboard;