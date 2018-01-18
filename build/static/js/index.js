'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// 点赞功能父类
var praiseButton = function () {
	function praiseButton(num) {
		_classCallCheck(this, praiseButton);

		this.num = num;
	}

	_createClass(praiseButton, [{
		key: 'clickAdd',
		value: function clickAdd() {
			var num = parseInt(this.num) + 1;
			return num;
		}
	}]);

	return praiseButton;
}();
// 大拇指点赞子类


var Trumb = function (_praiseButton) {
	_inherits(Trumb, _praiseButton);

	function Trumb(num) {
		_classCallCheck(this, Trumb);

		return _possibleConstructorReturn(this, (Trumb.__proto__ || Object.getPrototypeOf(Trumb)).call(this, num));
	}

	return Trumb;
}(praiseButton);
// 挂载jquery组件


jQuery.extend({
	laud: function laud(num) {
		var click = new Trumb(num);
		var clicklaud = click.clickAdd();
		return clicklaud;
	}
});

// 点赞调用事件
function laud(d) {
	var num = $(d).find("p").html();
	var bignum = 10;
	var clicklaud = $.laud(num);
	if (clicklaud) {
		if (clicklaud > bignum) {
			clicklaud = 0;
			$('.bg_brown').removeClass('bg_hui');
		}
		if (clicklaud >= bignum) {
			$('.bg_brown').addClass('bg_hui');
		}
		$(d).find("em").remove();
		$(d).find("p").html(clicklaud);
		$(d).append("<em>+1</em>");
	}
}