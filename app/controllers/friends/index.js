import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['sortBy', 'sortAscending'],
  sortAscending: true,
  sortBy: 'firstName',
  actions: {
    setSortBy: function(fieldName){
      this.set('sortBy', fieldName);
      return false;
    }
  }
});
