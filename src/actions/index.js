
import request from './request'
import { GET_MOVIES,GET_COMING_MOVIES } from './actionType'
export const getMovies = () => {// redux-thunk要求我们返回值是一个函数，函数参数是dispatch
  return async dispatch => {
    //进行数据请求
    const result = await request({
      url: '/ajax/movieOnInfoList',
      params: {
        token: ''
      }
    })
    // 创建动作
    const action = {
      type: GET_MOVIES,
      payload: result.data 
     
    }

    // 发送动作 
    dispatch( action )
  }
}


// export const getComingMovie = ( id ) => {
//   console.log("兵哥: getComingMovie -> id", id)
//   return async dispatch => {
//     const result = await request({
//       url: '/ajax/moreComingList',
//       params: {
//         token: '',
//         movieIds: id
//       }
//     })
//     console.log("兵哥: getComingMovie -> result", result)
//     dispatch({
//       type: GET_COMING_MOVIES,
//       payload: result.data.coming
//     })
//   }
// }