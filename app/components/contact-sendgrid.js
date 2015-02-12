// import ENV from "../config/environment";
import Ember from 'ember';

export default Ember.Component.extend({

  // didInsertElement: function() {
  //   console.log("START");
  //
  //   var sendgrid_username   = ENV.sendgridUser;
  //   var sendgrid_password   = ENV.sendgridPw;
  //   var to                  = ENV.sendgridEmail;
  //
  //   console.log("USER " + sendgrid_username);
  //   console.log("PW " + sendgrid_password);
  //   console.log("TOEMAIL " + to);
  //
  //   var sendgrid   = require('sendgrid')(sendgrid_username, sendgrid_password);
  //   var email      = new sendgrid.Email();
  //
  //
  //   email.addTo(to);
  //   email.setFrom(to);
  //   email.setSubject('[sendgrid-php-example] Owl');
  //   email.setText('Owl are you doing?');
  //   email.setHtml('<strong>%how% are you doing?</strong>');
  //   email.addSubstitution("%how%", "Owl");
  //   email.addHeader('X-Sent-Using', 'SendGrid-API');
  //   email.addHeader('X-Transport', 'web');
  //
  //   sendgrid.send(email, function(err, json) {
  //     if (err) { return console.error(err); }
  //     console.log(json);
  //   });
  // }
});
