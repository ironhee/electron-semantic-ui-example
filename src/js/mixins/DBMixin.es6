import underscoreDB from 'underscore-db';
import low from 'lowdb';
import _ from 'underscore';


let db = low('db.json');
db._.mixin(underscoreDB);


setInterval(() => {
  db.save();
}, 5000);


export default function DBMixin(type) {
  return _.extend({}, db(type));
}
