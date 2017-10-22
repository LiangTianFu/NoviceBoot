/*访问网页，判断是否有cookie
1.有cookie则读取
2.没有cookie则写入（要执行的引导页面）*/

$(function(){
		//读取cookie
	//substring() 方法用于提取字符串中介于两个指定下标之间的字符。
	//substring(5) 从第五个开始取值  www.open.com.cn
	var res = document.cookie.substring(5);

	// 如果没有cookie，执行以下动作
	if (res != "www.open.com.cn") {
		alert(res);
		$('#mask,#searchTip,#searchTip div:eq(0)').show();
		$('#searchTip div a').click(function(){
			var current=$(this).parent();//父块
			current.hide();//隐藏
			current.next().show();//下一个  显示
		})

		$('#searchTip div span,#searchTip div a:last').click(function(){
			$('#mask,#searchTip').hide();
		})


		//添加cookie
		var oDate = new Date();
		oDate.setDate(oDate.getDate() + 30); //保存30天

		document.cookie = "name=www.open.com.cn;expires=" + oDate;

	}
})