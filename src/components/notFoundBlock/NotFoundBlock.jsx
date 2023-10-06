import React from 'react'
import styles from './NotFoundBlock.module.scss'
import {NavLink} from "react-router-dom";

export const NotFoundBlock = () => {
    return (
        <div className={styles.root}>
            <span>😞</span>
            <h1>Ничего не найдено</h1>
            <p>К сожалению, данная страница отсутствует</p>
            <p>Вернуться на <NavLink to={'/'}>Страницу дэшбоард</NavLink></p>
        </div>
    )
}