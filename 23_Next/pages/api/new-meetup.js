import { MongoClient } from 'mongodb';

// /api/new-meetup

async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const data = req.body;

      const client = await MongoClient.connect('mongodb+srv://honza:8FLv2ItL6TQGi481@cluster0.iewhe.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');

      console.log('awaited client');

      const db = client.db();

      const meetupsCollection = db.collection('meetups');

      const result = await meetupsCollection.insertOne(data);

      console.log(result);

      client.close();

      res.status(201).json({ message: 'Meetup inserted!' });
    } catch(e) {
      console.log(e);
    }
  }
};

export default handler;