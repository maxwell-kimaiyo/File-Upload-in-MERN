import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { imageReducer,  pdfReducer } from '../reducer/fileUpload.reducer';


const initialState = { }

const reducer = combineReducers(
  {
   
    imageSave:imageReducer,
     pdfSave: pdfReducer,
    
  }
)
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));
export default store;