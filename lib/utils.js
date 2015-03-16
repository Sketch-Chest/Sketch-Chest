AlertView = function() {
  var alert = COSAlertWindow.new();
  alert.addTextLabelWithValue("Plugin name");
  alert.addTextFieldWithValue('');
  alert.addButtonWithTitle('OK');
  alert.addButtonWithTitle('Cancel');
};

AlertView.prototype = {
  delegate: function(){
    return this.alert;
  },
  show: function(callback) {
    var res = this.alert.runModal();
    callback(res, this.alert);
  }
}
