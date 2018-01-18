import {$.laud()} from '../project/static/js/index';
describe("测试项目代码", function () {
	it("函数的点赞功能测试", function () {
		expect($.laud(1)).toBe(2);
	});
});  