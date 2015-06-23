import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    sortBy: {
      refreshModel: true
    },
    sortDescending: {
      refreshModel: true
    }
  },
  model: function(params) {
    return this.store.findQuery('friend', params);
  }
});
