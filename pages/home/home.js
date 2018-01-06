// pages/home/home.js

import { Home } from 'home-model.js';

var home = new Home();

Page({

    /**
     * 页面的初始数据
     */
    data: {
        
    },

    onLoad: function () {
        this._loadData();
    },

    _loadData: function () {
        
        home.getBannerData((data) => {
            this.setData({
                'bannerArr': data
            });            
        });

        home.getThemeData((data) => {
            this.setData({
                'themeArr': data
            });
        });

        home.getProductsData((data) => {
          this.setData({
            'productsArr': data
          });
        });

        
    },

    onProductsItemTap: function (event) {
        var id = home.getDataSet(event, 'id');
        wx.navigateTo({
            url: '../product/product?id=' + id
        });
    },

    onThemesItemTap: function (event) {
        var id = home.getDataSet(event, 'id');
        var name = home.getDataSet(event, 'name');
        wx.navigateTo({
            url: '../theme/theme?id=' + id + '&name=' + name
        })
    }
})