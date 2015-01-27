import ENV from "../config/environment";
import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement: function() {

    SC.initialize({
      client_id: ENV.soundcloudApiKey
    });

    $('.music-player').on('click', 'div', function() {

      if($(this).hasClass('play-icon')) {
        $('.music-player div').not($(this)).removeClass('pause-icon').addClass('play-icon');
        $(this).removeClass('play-icon').addClass('pause-icon');
        var track = $(this).data("track");
        SC.stream("/tracks/" + track, function(sound) {
          soundManager.stopAll();
          sound.play();
        })
      } else {
        $(this).removeClass('pause-icon').addClass('play-icon');
        soundManager.pauseAll();
      }
    })
  }

});
