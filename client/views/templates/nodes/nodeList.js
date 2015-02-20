Template.nodeList.helpers({
  name: 'foo',
  nodes: function() {
    return drupalDdpNodes.find({});
  }
});