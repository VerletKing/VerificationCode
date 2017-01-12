/**
 * Created by Try on 2017/1/12.
 */
var verufyCode = {
    /**
     * 获取图片的节点
     */
    data : {
        imgElement : ''
    },
    /**
     * 切换验证码
     */
    changeImg : function () {
        verufyCode.data.imgElement.src = "/authImage?date=" + new Date();
    },
    /**
     * 初始化
     */
    init : {
        /**
         * 初始化数据
         */
        initData : function () {
            verufyCode.data.imgElement = document.getElementById("verufyCodeImg");
        },
        /**
         * 初始化事件
         */
        initEven : function () {
            verufyCode.data.imgElement.onclick = function () {
                verufyCode.changeImg();
                console.info(1)
            }
        }
    }
}

window.onload = function () {
    verufyCode.init.initData();
    verufyCode.init.initEven();
}
