Page({
	data: {
		originalList: [
			'https://wallpapercave.com/wp/wp4241374.jpg',
			'https://wallpapercave.com/wp/wp4241387.png',
			'https://wallpapercave.com/wp/wp4241379.jpg',
			'https://wallpapercave.com/wp/wp4241381.jpg',
			'https://wallpapercave.com/wp/wp4241384.jpg'
		]
	},
	handleChange(value) {
		console.log('change事件触发: ', value);
	},
	hanleTransition(value) {
		console.log('transition事件触发: ', value);
	},
	handleAnimationFinish(value) {
		console.log('animationfinish事件触发: ', value);
	},
});
