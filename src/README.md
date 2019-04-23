# Swiper
## Usage
##### [page/component].json
```
    {
      "usingComponents": {
        "modo-swiper": "path/mode/swiper/index"
      }
    }
```
## Properties
| Name | Type | Default | Description |
| :-----------: | :-----------: | :-----------: | :----------- |
| height | String | 100vw | 高度 |
| original-list | Array | [] | 轮播图原图列表, 用于点击查看原图 |
| preview-list | Array | [] | 轮播图缩略图列表, 不传则默认original-list |
| indicator-type | String | dot | 可选值: **pagination** **dot**  |
| indicator-position | String | center | 可选值: **left** **center** **right**  |
| errImage-replace | String | '' | 图片加载出错时替换的图片路径, 支持临时路径或http路径 |
| image-mode | String | scaleToFill | 可选值: 参照官方image组件的mode属性  |
| image-handle-format | String | {w: null, h: null, q: 75} | 七牛图片处理格式  |
| autoplay | Boolean | true | 是否自动切换 |
| circular | Boolean | true | 是否采用衔接滑动 |
| easing-function | String | linear | 	指定 swiper 切换缓动动画类型 |
## Events
| Name | Description | Return |
| :-----------: | :----------- | :-----------: |
| bind:change | current 改变时会触发 change 事件 | { detail } |
| bind:transition | swiper-item 的位置发生改变时会触发 transition 事件 | { detail } |
| bind:animationfinish | 动画结束时会触发 animationfinish 事件 | { detail } |
