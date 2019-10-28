import axios from 'axios'
// import { Toast } from 'antd-mobile'

// axios.defaults.baseURL = 'https://api.example.com';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post[ 'Content-Type' ] = 'application/x-www-form-urlencoded';


const request = ( {
    url,
    method = 'get',
    headers,
    params,
    data, //post请求的数据参数
    withCredentials, //跨源凭证，想后端证明我们是有资格来进行后端接口请求 
} ) => {
    return new Promise( ( resolve, reject ) => {
        switch ( method ) {
            case 'get' || 'GET':
                axios.get( url, {
                    headers,
                    params,
                    withCredentials
                } ).then( res => resolve( res ) ).catch( e => console.log( e ) )
                break;

            case 'post' || 'POST':
                let paramsData = new URLSearchParams()
                for ( var key in data ) {
                    paramsData.append( key, data[ key ] )
                }
                axios( {
                    url,
                    data: paramsData,
                    headers
                } ).then( res => resolve( res ) )
                    .catch( err => console.log( err ) )
                break;
            case 'put' || 'PUT':
                axios( {
                    url,
                    method,
                    params,
                    headers
                } ).then( res => resolve( res ) )
                    .catch( err => console.log( err ) )
                break;
            case 'delete' || 'DELETE':
                console.log( 'method', method )
                axios( {
                    url,
                    params,
                    method,
                    headers
                } ).then( res => resolve( res ) )
                    .catch( err => console.log( err ) )
                break;
            default:
                break;
        }

// // ! axios拦截 
// //   * 1. 拦截用户无登录操作，用户不登录那么久无法进入项目
// //   * 2. 常用的效果： Loading

//         axios.interceptors.request.use( function ( config ) {
//             Toast.loading( 'Loading...', 1, () => {
//                 console.log( 'Load complete !!!' );
//             } );
//             return config;
//         }, function ( error ) {
//             return Promise.reject( error );
//         } );

//         axios.interceptors.response.use( function ( response ) {
//             return response;
//         }, function ( error ) {
//             return Promise.reject( error );
//         } );
//     } )
// }

export default request
