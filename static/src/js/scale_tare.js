odoo.define('ons_scale_tare.scale_tare', function(require) {
'use strict';

var Widget = require('web.Widget');
var screens = require('point_of_sale.screens');

var TareButton = Widget.extend({
  template: 'TareButton',
  init: function(parent, options) {
    this._super(parent, options);
    this.parent = parent;
  },
  start: function() {
    var self = this;
    this.$().click(function() {
      self.parent.set_tare_weight(self.parent.real_weight);
    });
  },
});

screens.ScaleScreenWidget.include({
  init: function(parent, options) {
    this.tare_weight = 0;
    this._super(parent, options);
  },
  show: function() {
    this._super();
    var tare_button = new TareButton(this);
    tare_button.insertAfter(this.$('.weight'));
  },
  set_weight: function(weight) {
    this.real_weight = weight;
    return this._super(weight - this.tare_weight);
  },
  set_tare_weight: function(weight) {
    this.tare_weight = weight;
    this.set_weight(this.real_weight);
  },
});

});
