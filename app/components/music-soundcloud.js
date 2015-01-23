import Ember from 'ember';

export default Ember.Component.extend({

  didInsertElement: function() {

    SC.initialize({
      client_id: '7afa97e60028006f28267f7f6def99ff'
    });

    SC.stream("/tracks/" + track, function(sound) {
      audio.play();
    });

  }

});
