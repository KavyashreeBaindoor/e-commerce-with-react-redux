import { createStore, applyMiddleware ,compose} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootreducer } from './reducers';
import thunk from "redux-thunk"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootreducer,composeEnhancers(applyMiddleware(thunk))
  );

export default store