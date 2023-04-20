"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectMongo = exports.mongoClient = void 0;
const mongodb_1 = require("mongodb");
require('dotenv').config();
const uri = process.env.MONGO_DB_CONNECTION_STRING;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
exports.mongoClient = new mongodb_1.MongoClient(uri, {
    serverApi: {
        version: mongodb_1.ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});
function connectMongo() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Connect the client to the server	(optional starting in v4.7)
            yield exports.mongoClient.connect();
            // Send a ping to confirm a successful connection
            yield exports.mongoClient.db("admin").command({ ping: 1 });
            console.log("Pinged your deployment. You successfully connected to MongoDB!");
            return exports.mongoClient;
        }
        finally {
            // Ensures that the client will close when you finish/error
            yield exports.mongoClient.close();
        }
    });
}
exports.connectMongo = connectMongo;
