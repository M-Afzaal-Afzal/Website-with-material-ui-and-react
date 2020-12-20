import * as actionTypes from '../actions/actionTypes'

const initialState = {
    value: 0,
    popupIndex: null,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_VALUE:
            return {
                ...state,
                value: action.value,
            }
        case actionTypes.SET_POPUP_INDEX:
            return {
                ...state,
                popupIndex: action.popupIndex,
            }
        default:
            // throw new Error('You should define the reducer case for this action. Should not reach there');
            return state;
    }
}

export default reducer;