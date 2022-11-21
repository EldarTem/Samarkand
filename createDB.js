var MongoClient = require('mongodb').MongoClient
var data = require("./data.js").data


const uri = "mongodb://localhost:27017/"
const client = new MongoClient(uri)
async function run() {
try {
await client.connect();
var database = client.db("Samarkand");
database.dropDatabase()
database = client.db("Samarkandr");
const cats = database.collection("Samarkand");
const result = await cats.insertOne({name:"Самарканд"});
console.log(`${result} documents were inserted`);
} finally {
await client.close();
}
}
run()