import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducer'
import createSagaMiddleWare from 'redux-saga'
import sagas from './sagas'

const sagaMiddleWare = createSagaMiddleWare()

const composeEnhancers = (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})) || compose
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleWare))

const store = createStore(reducer, enhancer)
sagaMiddleWare.run(sagas)

export default store
