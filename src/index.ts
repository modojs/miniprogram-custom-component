Component({
  properties: {
    isOpen: {
      type: Boolean,
      value: false
    },
  },
  lifetimes: {
  },
  methods: {
    handleToggle() {
      this.setData({
        isOpen: !this.data.isOpen
      });
    }
  }
});
