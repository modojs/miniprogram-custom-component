Component({
  properties: {
    prop: {
      type: String,
      value: 'some test ts'
    },
  },
  lifetimes: {
    attached() {
      let that = this;
      wx.getSystemInfo({
        success(res: any) {
          // eslint-disable-next-line no-console
          console.log(res);
          that.showSomeThing('js');
        }
      })
    }
  },
  methods: {
    showSomeThing(title: string) {
      console.log('you dont know', title);
    }
  }
});
