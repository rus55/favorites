export function requestAlbumsAction(currentPage) {
    return { type: 'REQUESTED_ALBUMS', currentPage};
}

export function requestAlbumsSuccessAction(data) {
    return { type: 'REQUESTED_ALBUMS_SUCCESS', data: data };
}

export function albumsErrorAction() {
    return { type: 'REQUESTED_ALBUMS_FAILED'};
}

export function addAlbumToFavoritesAction(album) {
    return { type: 'ADD_ALBUMS_TO_FAVORITES', album: album};
}

export function setLoadingAction(loadingFlag) {
    return { type: 'SET_LOADING', loadingFlag: loadingFlag };
}

export function setScrollAction(scrollTop) {
    return { type: 'SET_SCROLL', scrollTop: scrollTop };
}

export function deleteAlbumFromFavoritesAction(album) {
    return { type: 'DELETE_FROM_FAVORITES', album: album };
}
