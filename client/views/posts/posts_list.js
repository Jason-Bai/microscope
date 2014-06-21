var postsData = [
    {
        title : 'Introducing Telescope',
        author : 'Sacha Greif',
        url: 'http://sachagreif.com/introducing-telescope'
    },
    {
        title : 'Meteor',
        author : 'Tom Coleman',
        url : 'http://meteor.com'
    },
    {
        title : 'The Meteor Book',
        author : 'Tom Coleman',
        url : 'http://themeteorbook.com'
    }
];
Template.postsList.helpers({
    posts: function () {
        return Posts.find();
    }
});
Template.postItem.helpers({
    domain: function () {
        var a = document.createElement('a');
        a.href = this.url;
        return a.hostname;
    }
});
