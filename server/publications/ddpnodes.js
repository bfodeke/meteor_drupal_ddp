Meteor.publish('ddpnodes', function() {
  return drupalDdpNodes.find({}, {fields: {
    'content.title': true,
    'content.nid': true,
  }});
});


