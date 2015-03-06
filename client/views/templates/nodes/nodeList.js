Template.nodeList.helpers({
  nodes: function() {
    return drupalDdpNodes.find({},{sort: {"content.created": -1}});
  }
});

Template.nodeList.rendered = function(){  
  this.$('.list-of-nodes').get(0)._uihooks = {
    insertElement: function(node, next){
      $(node).addClass('animated slideInDown');
      $(node).insertBefore(next);

      Meteor.setTimeout(function() {
        $(node).removeClass('animated slideInDown');
      },500);
    },

    moveElement: function(node){
      $(node).addClass('animating');

      Meteor.setTimeout(function() {
        $(node).removeClass('animating');
      },500);
    },

    removeElement: function(node){
      $(node).addClass('animated slideOutUp');

      Meteor.setTimeout(function() {
        $(node).remove();
      }, 700);
    }

    //TODO: use velocityjs for animation
  };
}