import { MongoClient, Sort, Document, ObjectId } from "mongodb";

export type Comment = {
  email: string;
  name: string;
  text: string;
  eventId: string;
  _id: ObjectId;
};

export async function connectDatabase() {
  const client = await MongoClient.connect(
    `mongodb+srv://${process.env.REACT_APP_MONGODB_USERNAME}:${process.env.REACT_APP_MONGODB_PASSWORD}@cluster0.fqbfh.mongodb.net/${process.env.REACT_APP_MONGODB_DBNAME}?retryWrites=true&w=majority`
  );
  return client;
}

export async function insertDocument(
  client: MongoClient,
  collection: string,
  document: Document
) {
  const db = client.db();

  const result = await db.collection(collection).insertOne(document);

  return result;
}

export async function getAllDocuments(
  client: MongoClient,
  collection: string,
  sort: Sort
) {
  const db = client.db();

  const documents = await db.collection(collection).find().sort(sort).toArray();

  return documents;
}
