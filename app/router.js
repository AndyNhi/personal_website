import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('home');
  this.resource('home', { path: '/' });
  this.route('music');
  this.route('covix');
  this.route('resume');
  this.route('contact');
  this.route('code');
  this.route('nest');
  this.route("portfolio");
});

export default Router;
