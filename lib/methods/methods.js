Meteor.methods({
  // Accept node inserts and updates from Drupal.
  listUsers: function () {
    currentUsers = Meteor.users({});
    return currentUsers;
  }
});
