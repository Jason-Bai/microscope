Session.setDefault('pageTitle', 'A different title');
Template.layout.helpers({
    pageTitle: function () { return Session.get('pageTitle'); }
});
