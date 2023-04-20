
import { MongoClient, ServerApiVersion } from 'mongodb';

require('dotenv').config();

const uri = process.env.MONGO_DB_CONNECTION_STRING;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
export const mongoClient = new MongoClient(uri, {
   serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
   }
});

export async function connectMongo() {
   try {
      // Connect the client to the server	(optional starting in v4.7)
      await mongoClient.connect();
      // Send a ping to confirm a successful connection
      await mongoClient.db("admin").command({ ping: 1 });
      console.log("Pinged your deployment. You successfully connected to MongoDB!");
      return mongoClient;
   } finally {
      // Ensures that the client will close when you finish/error
      await mongoClient.close();
   }
}


