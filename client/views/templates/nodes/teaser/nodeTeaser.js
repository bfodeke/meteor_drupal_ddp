Template.nodeTeaser.helpers({
	// console.log(this);
	thumb: function(){
		if ($.type(this.content.field_image) === 'object') {
			return 'http://drupalddp.dev/sites/default/files/' + this.content.field_image.und[0].filename;
		}else{
			return false;
		}
	},
	// thumb : 'http://drupalddp.dev/sites/default/files/' + this.data.content.field_image.und[0].filename
	// }
});