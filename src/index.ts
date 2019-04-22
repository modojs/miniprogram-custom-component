Component({
  properties: {
    value: {
      type: Boolean,
      value: false
    },
    showText: {
      type: Boolean,
      value: true
    }
  },
  lifetimes: {
  },
  methods: {
    handleToggle() {
      this.setData({
        value: !this.data.value
      });
    }
  }
});
