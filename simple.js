var low     = require('lowdb');
var fs      = require('lowdb/adapters/FileSync');
var adapter = new fs('db.json');
var db      = low(adapter);

// init the data store
// ---------------------------
// Set some defaults
db.defaults({ posts: []}).write();
 
// Add a post

/*db.get('posts')
.push({ id: 2, title: 'great', published: true})
.write()
db.get('posts')
.push({ id: 3, title: 'new own', published: false})
.write()
db.get('posts')
.push({ id: 4, title: 'random', published: false})
.write()
*/
// to read our data back we do: console.log(db.get('posts').value());
 

// use .value() instead of .write() if you are only reading
/*console.log(db.get('posts')
.find({id: 2})
.value())
*/

// count posts
// ----------------------------





// find all posts ids
// ----------------------------
// YOUR CODE

// all matches of published false
// ----------------------------
console.log(db.get('posts')
  .find({ published: false })
  .value())

// find post with published false
// ----------------------------
// YOUR CODE
