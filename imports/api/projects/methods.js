// Methods related to projects

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Projects } from './projects.js';

Meteor.methods({
  'projects.insert'(title, description, subDescription) {
    check(title, String);
    check(description, String);

    return Projects.insert({
      title,
      description,
      subDescription,
      createdAt: new Date(),
    });
  },
});
