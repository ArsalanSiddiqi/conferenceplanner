/**
 * Chair model events
 */

'use strict';

import {EventEmitter} from 'events';
import Chair from './chair.model';
var ChairEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
ChairEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Chair.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    ChairEvents.emit(event + ':' + doc._id, doc);
    ChairEvents.emit(event, doc);
  }
}

export default ChairEvents;
