# Switch
## Usage
##### [page/component].json
```
    {
      "usingComponents": {
        "modo-switch": "path/mode/switch/index"
      }
    }
```
## Properties
| Name | Type | Default | Description |
| :-----------: | :-----------: | :-----------: | :-----------: |
| value | Boolean | false | 当前开关是否选中 |
| showText | Boolean | true | 是否显示当前开关文字 |
| activeColor | String | #656CE8 | 开启时的背景色 |
| closeColor | String | #CDD4FF | 关闭时的背景色 |
| buttonColor | String | #FFFFFF | 开关控件按钮的颜色 |
## Events
| Name | Description | Return |
| :-----------: | :-----------: | :-----------: |
| bind:change | 开关变化时触发， 返回当前值 | { value }
