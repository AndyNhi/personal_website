import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement: function() {
    
    $('[data-profile="modal-wynn"]').on('click', function(event) {
      event.preventDefault();
      $('#modal-wynn').addClass('md-show');
    });

    $('#modal-wynn').on('click', function() {
      $(this).removeClass('md-show');
    });

    $('[data-profile="modal-billy"]').on('click', function(event) {
      event.preventDefault();
      $('#modal-billy').addClass('md-show');
    });

    $('#modal-billy').on('click', function() {
      $(this).removeClass('md-show');
    });


    $('[data-profile="modal-andy"]').on('click', function(event) {
      event.preventDefault();
      $('#modal-andy').addClass('md-show');
    });

    $('#modal-andy').on('click', function() {
      $(this).removeClass('md-show');
    });
  }
});
