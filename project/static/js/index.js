// 点赞功能父类
class praiseButton {
	constructor(num) {
		this.num = num;
	}

	clickAdd() {
		let num = parseInt(this.num) + 1;
		return num;
	}
}
// 大拇指点赞子类
class Trumb extends praiseButton {
	constructor(num) {
		super(num);
	}
}
// 挂载jquery组件
jQuery.extend({
	laud: function(num) {
		let click = new Trumb(num);
		let clicklaud = click.clickAdd();
		return clicklaud;
	}
});

// 点赞调用事件
function laud(d) {
	let num = $(d).find("p").html();
	let bignum =10;
	var clicklaud = $.laud(num);
	if (clicklaud) {
		if(clicklaud > bignum){
			clicklaud = 0;
			$('.bg_brown').removeClass('bg_hui');
		}
		if(clicklaud >= bignum){
			$('.bg_brown').addClass('bg_hui');
		}
		$(d).find("em").remove();
		$(d).find("p").html(clicklaud);
		$(d).append("<em>+1</em>");
	}
}