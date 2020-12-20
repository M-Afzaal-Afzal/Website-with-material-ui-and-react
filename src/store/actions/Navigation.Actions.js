import * as actionTypes from './actionTypes'

export const navHandler = (value) => {
    return {
        type: actionTypes.SET_VALUE,
        value: value,
    }
}

export const popupHandler = (popupIndex) => {
    return {
        type: actionTypes.SET_POPUP_INDEX,
        popupIndex: popupIndex,
    }
}