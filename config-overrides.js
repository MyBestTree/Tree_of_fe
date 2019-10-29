const { override, fixBabelImports,addWebpackAlias } = require( 'customize-cra' );
const path = require('path');

function pathResolve ( alias ) {
    return path.join( __dirname,  alias )
  }

module.exports = override(
    fixBabelImports( 'import', {  //todo antd-mobile 的按需引入
        libraryName: 'antd-mobile',
        style: 'css',
    } ),
    addWebpackAlias( {  // todo 路径别名: 对应的绝对路径
        '@': pathResolve( './src' ),
        'Global%': pathResolve( './src/assets/global_style' ),
        'Comp%': pathResolve( './src/components' ),
        'View%': pathResolve( './src/views' ),
        'Utile%': pathResolve( './src/utils' ),
        'Home%': pathResolve( './src/views/home' ),
    } )
);