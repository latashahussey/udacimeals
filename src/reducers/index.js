/* import actions */
import {
    ADD_RECIPE,
    REMOVE_FROM_CALENDAR
} from '../actions/index.js'

import { combineReducers } from 'redux';

/* set initial food state, handles recipes */
function food(state = {}, action) {
    switch(action.type) {
        case ADD_RECIPE :
            const {recipe} = action

            return {
                ...state,
                [recipe.label]: recipe
            }
            default :
                return state
    }
}

/* set initial calendar state */
const initialCalendarState = {
    sunday: {
        breakfast: null,
        lunch: null,
        dinner: null
    },
    monday: {
        breakfast: null,
        lunch: null,
        dinner: null
    },
    tuesday: {
        breakfast: null,
        lunch: null,
        dinner: null
    },
    wednesday: {
        breakfast: null,
        lunch: null,
        dinner: null
    },
    thursday: {
        breakfast: null,
        lunch: null,
        dinner: null
    },
    friday: {
        breakfast: null,
        lunch: null,
        dinner: null
    },
    saturday: {
        breakfast: null,
        lunch: null,
        dinner: null
    }
}

function calendar(state = initialCalendarState, action) {
    const { day, recipe , meal} = action

    /* new state of our store */
    switch(action.type) {
        case ADD_RECIPE:
            return {
                ...state,
                [day]: {
                    ...state[day],
                    [meal]: recipe.label
                }
            }
        case REMOVE_FROM_CALENDAR:
            return {
                ...state,
                [day]: {
                    ...state[day],
                    [meal]: null
                }
            }
        default:
            return state;
    }
}

export default combineReducers({
    food,
    calendar
})
