const express = require('express')

const { MongoClient, ServerApiVersion } = require('mongodb');
const cors = require('cors')
require('dotenv').config()

const app = express()
const port =process.env.PORT || 3000

app.use (cors())
app.use(express.json())




const uri = "mongodb+srv://doctors_admin:Tch2hZziDCHZmT8@cluster0.jrhw6sp.mongodb.net/?retryWrites=true&w=majority";

/* const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});*/

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})