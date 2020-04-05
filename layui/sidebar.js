function openSidebar() {

    layui.use('layer', function () {
        var layer = layui.layer;

        layer.open({
            icon: 5,
            area: ['300px', '600px'],
            type: 1,
            title: '',
            offset: 'rt',
            closeBtn: 0,
            shade: 0.5,
            shadeClose: 1,
            anim: 0,
            isOutAnim: true,
            resize: false,
            content: $('#sidebar'), //这里content是一个普通的String
            success: function (layero, index) {
                console.log(layero, index);
                console.log("帅");
            },
            yes: function (index, layero) {
                //do something
                layer.close(index); //如果设定了yes回调，需进行手工关闭
            }
        })
    });

}

layui.use('element', function(){
    var element = layui.element;

    $('#sidebar_tab').on('click', function (title) {
        var url = window.location.href;
        var index = url.lastIndexOf('/');
        var base = '';
        if ( index > 0 ){
            base = url.substring(0, index);
        }

        switch (title.toElement.textContent) {

            case "首页":
                $(location).attr('href', base + '/index.html');
                break;
            case "我的相册":
                $(location).attr('href', base + '/workSpace.html');
                break;
            case "社区动态":
                $(location).attr('href', base + '/share.html');
                break;
            case "个人信息":
                $(location).attr('href', base + '/userInfo.html');
                break;

        }

    });

    //…
});
