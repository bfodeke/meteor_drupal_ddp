Template.nodeTeaser.helpers({
	// console.log(this);
	thumb: function(){
		console.log(this);
		if ($.type(this.content.field_image) === 'object') {
			return 'http://drupalddp.dev/sites/default/files/' + this.content.field_image.und[0].filename;
		}else{
			return false;
		}
	},
	// thumb : 'http://drupalddp.dev/sites/default/files/' + this.data.content.field_image.und[0].filename
	// }
});

Template.nodeTeaser.rendered = function(){
	// this.data.thumb = 'http://drupalddp.dev/sites/default/files/' + this.data.content.field_image.und[0].filename;
	// console.log(this.data.content.field_image.und[0].filename);
	// console.log($.type(this.data.content.field_image));
	console.log(this);
};