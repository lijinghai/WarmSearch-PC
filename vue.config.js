const port = 8093; // dev port
module.exports = {
    devServer: {
        port,
        // // eslint-disable-next-line no-unused-vars
        // before(app, serve) {
        //
        // }
    }
}



// All configuration item explanations can be find in https://cli.vuejs.org/config/
// module.exports = {
//     devServer: {
//         port,
//         open: true,
//         overlay: {
//             warnings: false,
//             errors: true
//         },
//         // 配置代理 （以接口 https://www.easy-mock.com/mock/5ce2a7854c85c12abefbae0b/api 说明）
//         proxy: {
//             "/api": {
//                 target: process.env.VUE_APP_URL,
//                 changeOrigin: true, // 是否改变域名
//                 ws: true
//                 // pathRewrite: {
//                 //   // 路径重写
//                 //   "/api": "" // 这个意思就是以api开头的，定向到哪里, 如果你的后边还有路径的话， 会自动拼接上
//                 // }
//             }
//         }
//         // 下边这个， 如果你是本地自己mock 的话用after这个属性，线上环境一定要干掉
//         // after: require("./mock/mock-server.js")
//     }
// };
