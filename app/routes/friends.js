import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    save: function(){
      return true;
    },
    cancel: function(){
      return true;
    },
    delete: function(friend){
      var _this = this;
      friend.destroyRecord().then(function(){
        _this.transitionTo('friends.index');
      });
    }
  }
});
