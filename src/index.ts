Component({
  properties: {
    value: {
      type: Boolean,
      value: false
    },
    showText: {
      type: Boolean,
      value: true
    },
    activeColor: {
      type: String,
      value: '#656CE8'
    },
    closeColor: {
      type: String,
      value: '#CDD4FF'
    },
    buttonColor: {
      type: String,
      value: '#FFFFFF'
    }
  },
  lifetimes: {
  },
  methods: {
    handleToggle() {
      this.setData({
        value: !this.data.value
      });
      this.triggerEvent('change', { value: this.data.value });
    }
  }
});
