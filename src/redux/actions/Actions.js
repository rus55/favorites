export function requestAlbumsAction(currentPage) {
    return { type: 'REQUESTED_ALBUMS', currentPage};
}

export function requestAlbumsSuccessAction(data) {
    return { type: 'REQUESTED_ALBUMS_SUCCESS', data: data };
}

export function requestAlbumsErrorAction() {
    return { type: 'REQUESTED_ALBUMS_FAILED'};
}

export function requestAddAlbumsToFavoritesAction(album) {
    return { type: 'REQUESTED_ADD_ALBUMS_TO_FAVORITES', album: album};
}

export function requestAddAlbumsToFavoritesSuccessAction(album) {
    return { type: 'REQUESTED_ADD_ALBUMS_TO_FAVORITES_SUCCESS', album: album};
}

export function requestAddAlbumsToFavoritesErrorAction() {
    return { type: 'REQUESTED_ADD_ALBUMS_TO_FAVORITES_FAILED'};
}

export function setLoading(data) {
    return { type: 'SET_LOADING', data: data };
}

export function setScroll(data) {
    return { type: 'SET_SCROLL', data: data };
}

export function requestDeleteAlbumFromFavoritesAction(data) {
    return { type: 'DELETE_FROM_FAVORITES', data: data };
}
