Page({
	data: {

	},
	handleChange({detail: {value}}) {
		wx.showToast({
			title: `当前值: ${value ? '开' : '关'}`,
			icon: 'none'
		});
		console.log('change事件触发: ', value);
	}
});
