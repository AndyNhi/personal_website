import ENV from "../config/environment";
import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement: function() {

    SC.initialize({
      client_id: ENV.soundcloudApiKey
    });

    $('.music-player').on('click', 'div', function () {
      $(this).removeClass('play-icon').addClass('pause-icon');
      $('.music-player div').not($(this)).removeClass('pause-icon').addClass('play-icon');
      var track = $(this).data("track")
      SC.stream("/tracks/" + track, function(sound) {
        soundManager.stopAll();
        sound.play();
      });
    })

    $('.music-player').on('click', '.pause-icon', function () {
      $(this).removeClass('pause-icon').addClass('play-icon');
      var track = $(this).data('track');
      console.log(track);
      SC.stream("/tracks/" + track, function(sound) {
        sound.pause();
      });
    })

  }

});
