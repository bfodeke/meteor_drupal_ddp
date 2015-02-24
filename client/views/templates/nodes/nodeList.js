Template.nodeList.helpers({
  nodes: function() {
    return drupalDdpNodes.find({},{sort: {"content.created": -1}});
  }
});