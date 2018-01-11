class Config {
    constructor () {

    }
    
}

// 静态配置 调用静态调用 类.属性
// api公共地址
Config.restUrl = 'http://lw.cn/api/v1/';
//Config.restUrl = 'http://isliuwei.com/zerg/public/api/v1/';
// 精选主题theme的id号
Config.themeIDs = [1,2,3];
export { Config }