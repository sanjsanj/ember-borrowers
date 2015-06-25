import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from '../../helpers/start-app';

var application;

module('Acceptance | friends/new', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('visiting /friends/new', function(assert) {
  visit('/friends/new');

  andThen(function() {
    assert.equal(currentPath(), 'friends.new');
  });
});

// test('creating a new friend', function(assert){
//   visit('/');
//   // console.log('------------');
//   // console.log(currentRouteName());
//   click('a[href="/friends/new"]');
//   // click('a[class="new-friend-link"]');
//   // click('New Friend');
//   // console.log($('html'));
//   // console.log(application.html());
//
//   andThen(function(){
//     assert.equal(currentPath(), 'friends.new');
//   });
//   fillIn('input[placeholder="First Name"]', 'Johnny');
//   fillIn('input[placeholder="Last Name"]', 'Cash');
//   fillIn('input[placeholder="email"]', 'j@cash.com');
//   fillIn('input[placeholder="twitter"]', 'jcash');
//   click('input[value="Save"]');
//
//   andThen(function(){
//     assert.equal(
//       currentRouteName(),
//       'friends.show.index',
//       'Redirects to friends.show after create'
//     );
//   });
// });

test('clicking save without filling fields', function(assert){
  // expect(2);

  visit('/friends/new');
  click('input[value="Save"]');

  andThen(function(){
    assert.equal(
      currentRouteName(),
      'friends.new',
      'Stays on new page'
    );
    assert.equal(
      find("h2:contains(You have to fill in all the fields)").length,
      1,
      "displays error message"
    );
  });
});
