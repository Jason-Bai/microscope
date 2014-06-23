Template.postPage.helpers({
    currentPost: function () {
        return Posts.findOne({_id: Session.get('currentPostId')});
    }
});
