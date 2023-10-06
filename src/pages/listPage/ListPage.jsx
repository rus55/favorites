import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {
    requestAddAlbumsToFavoritesSuccessAction,
    requestAlbumsAction,
    requestDeleteAlbumFromFavoritesAction,
    setLoading,
    setScroll
} from "../../redux/actions/Actions";
import styles from './ListPage.module.scss'
import {NavLink} from "react-router-dom";

const ListPage = () => {
    const dispatch = useDispatch()
    const favoritesAlbums = useSelector(state => state.favoritesAlbums)
    const albums = useSelector(state => state.albums)
    const totalCount = useSelector(state => state.totalCount)
    const currentPage = useSelector(state => state.currentPage)
    const isLoading = useSelector(state => state.isLoading)
    const scroll = useSelector(state => state.scroll)

    useEffect(() => {
        if (isLoading) {
            if (albums.length < totalCount) {
                dispatch(requestAlbumsAction(currentPage))
            } else if ((albums.length = totalCount)) {
                dispatch(setLoading(false));
            }
        }
    }, [isLoading]);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        window.scrollTo(0, scroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [totalCount]);

    const handleScroll = () => {
        const { scrollHeight, scrollTop, clientHeight } = document.documentElement;
        dispatch(setScroll(scrollTop));
        if (scrollHeight - scrollTop - clientHeight < 100) {
            if (albums.length < totalCount) {
                dispatch(setLoading(true));
            }
        }
    };

    const addFavorites = (albumId) => favoritesAlbums?.map(album => album.id).includes(albumId)

    const addToFavorites = (album) => {
        if (!addFavorites(album.id)) {
            dispatch(requestAddAlbumsToFavoritesSuccessAction(album))
        } else {
            dispatch(requestDeleteAlbumFromFavoritesAction(album))
        }
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.back}><NavLink to={'/'} className={styles.backText}>Назад</NavLink></div>
            {albums?.map((album) => (
                <div key={album.id} className={styles.card}>
                    <img className={styles.icon} src={album.thumbnailUrl}/>
                    <div className={styles.block}>
                        <div><span className={styles.fontWeight}>Идентификатор:</span> {album.id}</div>
                        <div className={styles.header}><span
                            className={styles.fontWeight}>Заголовок:</span> {album.title}</div>
                        <div className={styles.wrapperButton}>
                            <button className={styles.button} onClick={() => addToFavorites(album)}>{addFavorites(album.id) ? 'Удалить из избранного' : 'Добавить в избранное'}</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ListPage;