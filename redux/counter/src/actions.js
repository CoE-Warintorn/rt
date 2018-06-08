export const inc = (by = 1) => {
    return { type: 'INCREMENT', by }
}

export const incWithDelay = (by) => {
    // return (dispatch) => {
    //     setTimeout(() => {
    //         dispatch(inc(by))
    //     }, 1000)
    // }
    let action = inc(by)
    action.__delay = 2000
    return action
}

export const reset = () => {
    return { type: 'RESET'}
}

export const accumulate = () => {
    return { type: 'ACCUMULATE'}
}

export const accPush = () => {
    return { type: 'ACC_PUSH'}
}