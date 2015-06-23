import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['show'],
  possibleStates: ['borrowed', 'returned'],
  contentDidChange: Ember.observer('model.[]', function() {
  }),
  stateDidChange: Ember.observer('model.@each.state', function() {
  })
});
