var MongoClient = require('mongodb').MongoClient

const uri = "mongodb://127.0.0.1:27017/"
const client = new MongoClient(uri)
async function run() {
try {
await client.connect();
var database = client.db("city");
database.dropDatabase()
database = client.db("city");
const sam = database.collection("sam");
const result = await sam.insertOne({name:"Самарканд"});
console.log(`${result} documents were inserted`);
} finally {
await client.close();
}
}
run()
