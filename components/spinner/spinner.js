Component({
  options: {
    multipleSlots: true
  },
  properties: {
    size: {
      type: String,
      value: ''
    }
  },
  data: {},
  methods: {
    clickSpinner: function() {
      console.log(111)
      this.triggerEvent('clickSpinner')
    }
  }
})