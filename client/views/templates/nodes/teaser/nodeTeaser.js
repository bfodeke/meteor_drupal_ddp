Template.nodeTeaser.helpers({
	thumb: function(){
		if ($.type(this.content.field_image) === 'object') {
			return 'http://drupalddp.dev/sites/default/files/' + this.content.field_image.und[0].filename;
		}else{
			return false;
		}
	},
});

Template.nodeTeaser.events({
	'click .edit-node': function(event){
		nid = this.content.nid;
		node = $("#node-"+nid);
		title = node.find('.node-title strong');

		console.log(this);
		console.log(node);
		title.attr('contenteditable','true').focus();

		node.find('.edit-node').addClass('disabled');
		node.find('.save-node').removeClass('hide');
		// Meteor.call('updateNodeInDrupal', this);
	},
	'click .save-node': function(event){
		nid = this.content.nid;
		node = $("#node-"+nid);
		title = node.find('.node-title strong');

		console.log(this);		
		console.log(node);

		title.attr('contenteditable','false');

		// Saving title text
		this.content.title = title.text();

		node.find('.edit-node').removeClass('disabled');
		node.find('.save-node').addClass('hide');
		
		Meteor.call('updateNodeInDrupal', this);
	}
});

Template.nodeTeaser.rendered = function(){
  // this.$('.nodeTeaser').toggleClick(function(){
  //   $(this).velocity('transition.cardFlipX');
  // }, function(){
  //   $(this).velocity('reverse');
  // });
};