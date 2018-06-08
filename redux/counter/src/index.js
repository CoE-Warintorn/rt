import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
//import counterDOS from './middlewares/counterDOS';
//import actionDelay from './middlewares/actionDelay';
import counter from './reducer/counter';
//import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
//let store =  createStore(counter, applyMiddleware(counterDOS, actionDelay))
//let store =  createStore(counter, applyMiddleware(thunk))
import { take, put, race } from 'redux-saga/effects';
import { inc } from './actions';


function *accumulateConuter(){
    let val = 0;
    while(true){
        let {accumulate, accPush} = yield race({
            accumulate: take('ACCUMULATE'),
            accPush: take('ACC_PUSH')
        })
        if(accumulate)
            val++;
        else if(accPush){
            yield put(inc(val))
            val = 0;
        }
    }
}

let sagaMiddleware = createSagaMiddleware();
let store =  createStore(counter, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(accumulateConuter);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>    
    , 
    document.getElementById('root')
);
