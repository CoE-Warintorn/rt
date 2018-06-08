let middleware = store => next => action => {
    if(action.__delay && action.__delay > 0){
        setTimeout(() => {
            next(action)
            //delete action.__delay
            //store.dispatch(action)
        }, action.__delay)
        return
    }
    next(action);
}

export default middleware;