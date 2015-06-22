import DS from 'ember-data';
import Ember from 'ember';
import changeGate from 'ember-computed-change-gate/change-gate';

export default DS.Model.extend({
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  email: DS.attr('string'),
  twitter: DS.attr('string'),
  articles: DS.hasMany('articles', {async: true}),
  totalArticles: DS.attr('number'),
  fullName: Ember.computed('firstName', 'lastName', function(){
    return this.get('firstName') + ' ' + this.get('lastName');
  }),
  capitalizedFirstName: changeGate('firstName', function(firstName) {
    return Ember.String.capitalize(firstName);
  })
});
