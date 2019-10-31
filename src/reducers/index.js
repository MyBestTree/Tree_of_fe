import { combineReducers } from 'redux'
import homeReducer   from './homeReducer';
// combineReducers 它是用来帮助我们实现数据分块的

const rootReducer = combineReducers({
  // 分块的reducer
  home: homeReducer
})


export default rootReducer