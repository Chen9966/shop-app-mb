const { createProxyMiddleware } = require("http-proxy-middleware");
modele.exports=function(app){
    app.use(
        "/api",
        createProxyMiddleware({
          target: "http://api.tf2sc.cn/api",
          changeOrigin: true,
          pathRewrite:{
            // ^/ 是一种正则匹配规则，是http-proxy-middleware 中间件内部用来匹配代理地址      
            '^/api':''
          }
        })
      );
}