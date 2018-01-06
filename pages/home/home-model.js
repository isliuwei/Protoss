import { Base } from '../../utils/base.js';
import { Config } from '../../utils/config.js';

class Home extends Base {
    constructor () {
        super();
    }
    getBannerData (callback) {
        var params = {
            url: 'banner/1',
            sCallback: function (data) {
                callback && callback(data.items);
            }
        };
        this.request(params);
    };

    getThemeData (callback) {
        var ids = Config.themeIDs && Config.themeIDs.join(",");
        var params = {
            url: 'theme?ids='+ ids,
            sCallback: function (data) {
                callback && callback(data);
            }
        }
        this.request(params);
    };

    getProductsData (callback) {
       var params = {
         url: 'product/recent',
         sCallback: function (data) {
           callback && callback(data);
         }
       };
       this.request(params);
    }
}

export { Home }