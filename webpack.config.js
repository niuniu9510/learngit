module.exports = {
	//启用source-map
    devtool: 'eval-source-map',//配置生成Source Maps，选择合适的选项

    //入口配置
    entry:  __dirname + "/src/scripts/app.js",//已多次提及的唯一入口文件

    //出口配置
    output: {
        path: __dirname + "/prd",//打包后的文件存放的地方
        filename: "bundle.js"//打包后输出文件的文件名
   	},
   	module: {//在配置文件里添加JSON loader
	    loaders: [
	    	{
	        	test: /\.css$/,
	        	loader: "style!css" //添加对样式表的处理
	        	//注：感叹号的作用在于使同一文件能够使用不同类型的loader
	    	},
	    	{
		        test: /\.js$/,
		        exclude: /node_modules/,
		        loader: 'babel',//在webpack的module部分的loaders里进行配置即可
		        query: {
		       	    presets: ['es2015','react']
	        }
	    ]
	},

	//启用服务
    devServer: {
        contentBase: "./prd",//本地服务器所加载的页面所在的目录
        colors: true,//终端中输出结果为彩色
        historyApiFallback: true,//不跳转
        inline: true//实时刷新
    } 
}
