import { VisibilityFilters, setVisibilityFilter } from "../actions";
import { handleActions } from 'redux-actions';
/* const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action) => {
    if(action.type === 'SET_VISIBILITY_FILTER'){
        return action.filter
    }
    return state
} */

/* { inc: function(x) { return x + 1 }}
{ ['inc']: function(x){ return x + 1}}
{ ['inc'](x){ return x + 1 }} */

const visibilityFilter = handleActions({
    [setVisibilityFilter](state, action){
        return action.payload.filter
    }
}, VisibilityFilters.SHOW_ALL)

export default visibilityFilter;