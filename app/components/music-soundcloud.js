import ENV from "../config/environment";
import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement: function() {

    SC.initialize({
      client_id: ENV.soundcloudApiKey
    });

    Ember.$('.music-player').on('click', 'div', function() {

      if(Ember.$(this).hasClass('play-icon')) {
        Ember.$('.music-player div').not(Ember.$(this)).removeClass('pause-icon').addClass('play-icon');
        Ember.$(this).removeClass('play-icon').addClass('pause-icon');
        var track = Ember.$(this).data("track");
        SC.stream("/tracks/" + track, function(sound) {
          soundManager.stopAll();
          sound.play();
        })
      } else {
        Ember.$(this).removeClass('pause-icon').addClass('play-icon');
        soundManager.pauseAll();
      }
    })
  }

});
