import {
    albumsErrorAction,
    requestAlbumsSuccessAction,
} from "../actions/Actions";
import {call, put, takeEvery, all} from "redux-saga/effects";
import {getAlbums} from "../api/Api";

function* getAlbumsWorker(currentPage) {
    try {
        const res = yield call(getAlbums, currentPage)
        yield put(requestAlbumsSuccessAction({items: res.data, totalCount: +res.headers["x-total-count"]}))
    } catch (error) {
        yield put(albumsErrorAction())
    }
}

function* getAlbumsWatcher() {
    yield takeEvery('REQUESTED_ALBUMS', getAlbumsWorker)
}


export const rootSaga = function* root() {
    yield all([
        getAlbumsWatcher(),
    ])
}
