Template.nodeList.helpers({
  nodes: function() {
    return drupalDdpNodes.find({},{sort: {"content.created": -1}});
  },
});

Template.nodeList.rendered = function(){
  teaserWrapper = this.$('#teaserWrapper');
  nodes = teaserWrapper.find('.nodeTeaser');

  width = $('.container').width();
  teaserWrapper.css({ 'width': width});

  // imagesLoaded(nodes, function(){
  //   $container = teaserWrapper.isotope({
  //     // options...
  //     itemSelector: '.nodeTeaser',
  //     masonry: {
  //       columnWidth: 380
  //     }
  //   });
  // });

  


  // nodes.velocity("transition.animateOnLoad",
  //   {
  //     stagger: 250,
  //     duration:5500,
  //     drag: true
  //   } );
  
  teaserWrapper.get(0)._uihooks = {
    insertElement: function(node, next){
      // $(node).velocity("transition.animateIn");
      $(node).insertBefore($(next));
      // imagesLoaded($(node), function(){
      //   $container.prepend($(node)).isotope( 'prepended', $(node) );
      // });
      
      
    },

    removeElement: function(node){
      $(node).velocity( "transition.animateOut", function(){
        $(node).remove();
      });

    }

    //TODO: use velocityjs for animation
  };
}