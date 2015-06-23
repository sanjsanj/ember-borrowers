import FriendBaseController from './base';

export default FriendBaseController.extend({
  actions: {
    cancel: function(){
      this.transitionToRoute('friends.index');
      return false;
    }
  }
});
