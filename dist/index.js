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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongodb_connection_1 = require("./db/mongodb-connection");
require('dotenv').config();
const app = (0, express_1.default)();
app.get('/songs', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield mongodb_connection_1.mongoClient.connect();
    const db = mongodb_connection_1.mongoClient.db("iworshipDB");
    const songsCursor = db.collection('songs').find({});
    // console.log('songs cursor:', songs);
    // let songs = [];
    const songs = yield songsCursor.map((doc) => (doc)).toArray();
    console.log('songs', songs);
    res.json({ songs });
}));
app.listen(3030, () => {
    console.log('Server is up and running!');
});
