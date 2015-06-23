import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return this.store.createRecord('friend');
  },
  activate: function(){
  },
  deactivate: function(){
    var model = this.modelFor('friends/new');
    if (model.get('isNew')){
      model.destroyRecord();
    }
  },
  actions: {
    save: function(){
      return true;
    },
    cancel: function(){
      return true;
    }
  }
});