import {
    requestAlbumsErrorAction,
    requestAlbumsSuccessAction,
    requestAddAlbumsToFavoritesErrorAction,
    requestAddAlbumsToFavoritesAction
} from "../actions/Actions";
import {call, put, takeEvery, all} from "redux-saga/effects";
import {getAlbums} from "../api/Api";

function* getAlbumsWorker(currentPage) {
    try {
        const res = yield call(getAlbums, currentPage /*{currentPage: currentPage}*/)
        yield put(requestAlbumsSuccessAction({data: res.data, totalCount: +res.headers["x-total-count"]}))
    } catch (error) {
        yield put(requestAlbumsErrorAction())
    }
}

function* getAlbumsWatcher() {
    yield takeEvery('REQUESTED_ALBUMS', getAlbumsWorker)
}

function* getAddToFavoritesWorker() {
    try {
        yield put(requestAddAlbumsToFavoritesAction())
    } catch (error) {
        yield put(requestAddAlbumsToFavoritesErrorAction())
    }
}

function* getAddToFavoritesWatcher() {
    yield takeEvery('REQUESTED_ADD_ALBUMS_TO_FAVORITES', getAddToFavoritesWorker)
}

export const rootSaga = function* root() {
    yield all([
        getAlbumsWatcher(),
        getAddToFavoritesWatcher()
    ])
}
