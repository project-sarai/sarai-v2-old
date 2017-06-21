// Methods related to projects

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Projects } from './projects.js';

Meteor.methods({
  'projects.insert': (title, description, body) => {
    check(title, String);
    check(description, String);
    check(body, String);

    return Projects.insert({
      title,
      description,
      body,
      createdAt: new Date(),
    });
  },
});
