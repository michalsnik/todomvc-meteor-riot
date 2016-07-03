import { Meteor } from 'meteor/meteor';
import riot from 'riot';

import './routes.js';

import '../../ui/app.js';

Meteor.startup(() => {
  riot.mount('app');
});
