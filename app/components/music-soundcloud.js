import Ember from 'ember';

export default Ember.Component.extend({

  didInsertElement: function() {

    SC.initialize({
      client_id: 'blank'
    });

    SC.stream("/tracks/" + track, function(sound) {
      audio.play();
    });

  }

});
