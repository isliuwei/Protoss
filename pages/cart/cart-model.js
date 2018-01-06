import { Base } from '../../utils/base.js';

class Cart extends Base {
    constructor () {
        super();
        this._storageKeyName = 'cart';
    }

    /*
    * 获取购物车
    * param
    * flag - {bool} 是否过滤掉不下单的商品
    */
    getCartDataFromLocal () {
        var res = wx.getStorageSync(this._storageKeyName);
        if (!res) {
            res = [];
        }
        return res;
    }

    /*
    * 加入到购物车
    * 如果之前没有样的商品，则直接添加一条新的记录， 数量为 counts
    * 如果有，则只将相应数量 + counts
    * @params:
    * item - {obj} 商品对象,
    * counts - {int} 商品数目,
    * */
    add (item, counts) {
        var cartData = this.getCartDataFromLocal();
        var isHasInfo = this._isHasThatOne(item.id, cartData);
        // 新商品
        if (!isHasInfo()) {
            item.counts = counts;
            item.selectStatus = true;  //默认在购物车中为选中状态
            cartData.push(item);
        } else {
            // 已有商品
            cartData[isHasInfo.index].counts += counts;
        }
        this.SetStorageSync(this._storageKeyName, cartData);  //更新本地缓存
        return cartData;
    }

    /*购物车中是否已经存在该商品*/
    _isHasThatOne (id, arr) {
        //
        var item,
            result = { index: -1 };
        for (let i = 0; i < arr.length; i++) {
            item = arr[i];
            if (item.id === id) {
                result = {
                    index: i,
                    data: item
                };
                break;
            }
        }
        return result;
    }
}













export { Cart }