import './cms-upload.html';
import { Meteor } from 'meteor/meteor'

Template.CMSUpload.created = function() {
  Uploader.init(this);
}

Template.CMSUpload.rendered = function () {
  Uploader.render.call(this);
};

Template.CMSUpload.events({
  'click .start': function (e) {
    Uploader.startUpload.call(Template.instance(), e);
  }
});


Template.CMSUpload.helpers({
  'infoLabel': function() {
    var instance = Template.instance();

    // we may have not yet selected a file
    var info = instance.info.get()
    if (!info) {
      return;
    }

    var progress = instance.globalInfo.get();

    // we display different result when running or not
    return progress.running ?
      info.name + ' - ' + progress.progress + '% - [' + progress.bitrate + ']' :
      info.name + ' - ' + info.size + 'B';
  },
  'progress': function() {
    return Template.instance().globalInfo.get().progress + '%';
  },
  'submitData': function() {
    if (this.formData) {
        this.formData['contentType'] = this.contentType;
    } else {
        this.formData = {contentType: this.contentType};
    }
    return typeof this.formData == 'string' ? this.formData : JSON.stringify(this.formData);
  },
})