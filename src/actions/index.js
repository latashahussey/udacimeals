
/* Actions (events that update the application state) */
export const ADD_RECIPE = 'ADD_RECIPE'
export const REMOVE_FROM_CALENDAR = 'REMOVE_FROM_CALENDAR'

/* Action creators
 * To make actions more portable, wrap in action creator functions */
export function addRecipe({ day, recipe, meal }) {
    return {
        type: ADD_RECIPE,
        recipe,
        day,
        meal
    }
}

export function removeFromCalendar({ day, meal }) {
    return {
        type: REMOVE_FROM_CALENDAR,
        day,
        meal
    }
}
