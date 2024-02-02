
import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();
const connectionString = process.env.ATLAS_URI||'';
console.log(connectionString);
const client = new MongoClient(connectionString);

let conn;
try {
    conn = await MongoClient.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("Connected to MongoDB");
} catch (e) {
    console.error("MongoDB Connection Error:", e);
}

let db;
if (conn) {
    db = conn.db('sample_training');
} else {
    console.error("MongoDB Connection not established");
}

export default db;