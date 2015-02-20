Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  waitOn: function(){ return Meteor.subscribe('ddpnodes'); }
});


Router.map(function() {
  this.route('nodeList', {
    path: '/',
    // data: function() { 
    //   return {
    //     nodes: ddpnodes.find()
    //   }
    // }
  });
});
