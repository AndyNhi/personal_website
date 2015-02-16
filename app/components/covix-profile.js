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

    Ember.$('[data-profile="modal-hanzo"]').on('click', function(event) {
      event.preventDefault();
      Ember.$('#modal-hanzo').addClass('md-show');
    });

    Ember.$('#modal-hanzo').on('click', function() {
      Ember.$(this).removeClass('md-show');
    });

    Ember.$('[data-profile="modal-tom"]').on('click', function(event) {
      event.preventDefault();
      Ember.$('#modal-tom').addClass('md-show');
    });

    Ember.$('#modal-tom').on('click', function() {
      Ember.$(this).removeClass('md-show');
    });

    Ember.$('[data-profile="modal-ben"]').on('click', function(event) {
      event.preventDefault();
      Ember.$('#modal-ben').addClass('md-show');
    });

    Ember.$('#modal-ben').on('click', function() {
      Ember.$(this).removeClass('md-show');
    });

    Ember.$('[data-profile="modal-boogie"]').on('click', function(event) {
      event.preventDefault();
      Ember.$('#modal-boogie').addClass('md-show');
    });

    Ember.$('#modal-boogie').on('click', function() {
      Ember.$(this).removeClass('md-show');
    });





  }
});
