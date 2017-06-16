import './services-cms-edit-button.html'
import { Session } from 'meteor/session';

Template.CMSServicesEditButton.onRendered(() => {

})

Template.CMSServicesEditButton.events({

  'click .cms-service-edit': (event, template) => {
    Session.set('serviceAction', 'edit');
    var id = template.data.id;

    FlowRouter.go('/admin/services/'+id);
  }
});

Template.CMSServicesEditButton.helpers({
  edit: () => {
    // console.log('Clicked edit button')
    // console.log(template.data.id)
  }

});