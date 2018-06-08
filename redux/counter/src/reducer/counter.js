let reducer = (state = {val: 0}, action) => {
    if(action.type == 'INCREMENT') {
        return {val: state.val + action.by}
    }
    else if(action.type == 'RESET') {
        return {val: 0}
    }
    return state
}

export default reducer;