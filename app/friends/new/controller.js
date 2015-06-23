import FriendBaseController from '../base-controller';

export default FriendBaseController.extend({
  actions: {
    cancel: function(){
      this.transitionToRoute('friends.index');
      return false;
    }
  }
});
