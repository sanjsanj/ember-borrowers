import dateHelpers from '../../../utils/date-helpers';
import { module, test } from 'qunit';
import Ember from 'ember';

module('Unit | Utility | date helpers');

// test('it works', function(assert) {
//   var result = dateHelpers();
//   assert.ok(result);
// });

test('formats a date object', function(assert){
  var date = new Date("11-3-2015");
  var result = dateHelpers.formatDate(date, 'ddd MMM DD YYYY');
  assert.equal(result, 'Tue Nov 03 2015', 'returns a readable string');
});
