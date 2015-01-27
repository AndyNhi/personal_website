import Ember from 'ember';

export default Ember.Component.extend({

  classNames: [ 'profile' ],

  didInsertElement: function() {

    Ember.$('[data-profile="modal-wynn"]').on('click', function(event) {
      event.preventDefault();
      Ember.$('#modal-wynn').addClass('md-show');
    });

    Ember.$('#modal-wynn').on('click', function() {
      Ember.$(this).removeClass('md-show');
    });

    Ember.$('[data-profile="modal-billy"]').on('click', function(event) {
      event.preventDefault();
      Ember.$('#modal-billy').addClass('md-show');
    });

    Ember.$('#modal-billy').on('click', function() {
      Ember.$(this).removeClass('md-show');
    });

    Ember.$('[data-profile="modal-andy"]').on('click', function(event) {
      event.preventDefault();
      Ember.$('#modal-andy').addClass('md-show');
    });

    Ember.$('#modal-andy').on('click', function() {
      Ember.$(this).removeClass('md-show');
    });

    Ember.$('[data-profile="modal-ellis"]').on('click', function(event) {
      event.preventDefault();
      Ember.$('#modal-ellis').addClass('md-show');
    });

    Ember.$('#modal-ellis').on('click', function() {
      Ember.$(this).removeClass('md-show');
    });
  }
});
