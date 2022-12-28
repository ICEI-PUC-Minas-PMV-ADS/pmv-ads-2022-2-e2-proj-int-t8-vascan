$(':input').on("focus", function() {
    this.dataset.placeholder = this.placeholder;
    thisplaceholder = '';
} ).on('blur', function() {
    this.placeholder = this.dataset.placeholder;
} )