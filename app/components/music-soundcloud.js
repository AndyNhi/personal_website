import ENV from "../config/environment";
import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement: function() {
    SC.initialize({
      client_id: ENV.soundcloudApiKey
    });

    SC.oEmbed("http://soundcloud.com/andy-clyde-nguyen/sets/the-groove", {color: "black"},  document.getElementById("widget"));
  }
});
