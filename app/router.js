import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});


Router.map(function() {
  this.route('home');
  this.route('music');
  this.route('covix');
  this.route('resume');
});



export default Router;
