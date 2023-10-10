const initialState = {
    albums: [],
    favoritesAlbums: [],
    currentPage: 1,
    scroll: 0,
    totalCount: 1,
    isLoading: true,
}

export const reducer = (state = initialState, action) => {
    if (!Object.entries(state).length) {
        state = initialState;
    }
    switch (action.type) {
        case 'REQUESTED_ALBUMS_SUCCESS':
            return {
                ...state,
                albums: [...state.albums, ...action.data.items],
                totalCount: action.data.totalCount,
                isLoading: false,
                currentPage: state.currentPage + 1
            }
        case 'REQUESTED_ALBUMS_FAILED':
            return {
                ...state,
                isLoading: false
            }
        case 'ADD_ALBUMS_TO_FAVORITES':
            return {
                ...state,
                favoritesAlbums: state.favoritesAlbums?.length ? [...state.favoritesAlbums, action.album] : [action.album],
                isLoading: false
            }
        case 'SET_LOADING':
            return {
                ...state,
                isLoading: action.loadingFlag
            }
        case 'SET_SCROLL':
            return {
                ...state,
                scroll: action.scrollTop
            }
        case 'DELETE_FROM_FAVORITES':
            return {
                ...state,
                favoritesAlbums: state.favoritesAlbums.filter((album) => album.id !== action.album.id)
            }
        default:
            return state
    }
}