Component({
  properties: {
    isOpen: {
      type: Boolean,
      value: false
    },
  },
  lifetimes: {
    attached() {
      let that = this;
      wx.getSystemInfo({
        success(res) {
          // eslint-disable-next-line no-console
          console.log(res);
          that.showSomeThing('asdasd');
        }
      })
    }
  },
  methods: {
    showSomeThing(title) {
      console.log('you dont know', title);
    },
    handleToggle() {
      this.isOpen = !this.Open;
    }
  }
});
