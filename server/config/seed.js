/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import Thing from '../api/thing/thing.model';
import User from '../api/user/user.model';
import Paper from '../api/paper/paper.model';

Paper.find({}).remove()
  .then(() => {
    Paper.create({
        name: 'Default paper',
        Descr: 'this is default value filled in seed.js',
        year: 2016
      },
      {
          name: 'Default paper2',
          Descr: 'this is default value filled in seed.js',
          year: 2016
        },
        {
            name: 'Default paper3',
            Descr: 'this is default value filled in seed.js',
            year: 2016
          },
          {
              name: 'Default paper4',
              Descr: 'this is default value filled in seed.js',
              year: 2016
            });
  });


User.find({}).remove()
  .then(() => {
    User.create({
      provider: 'local',
      name: 'Test User',
      email: 'test@example.com',
      password: 'test'
    }, {
      provider: 'local',
      role: 'admin',
      name: 'Admin',
      email: 'admin@example.com',
      password: 'admin'
    })
    .then(() => {
      console.log('finished populating users');
    });
  });
