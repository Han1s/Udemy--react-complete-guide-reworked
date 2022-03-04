import React, { Fragment } from 'react';
import MeetupList from '../components/meetups/MeetupList';
import Head from 'next/head';
import { MongoClient } from 'mongodb';

const HomePage = (props) => {
  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
        <meta
          name="description" 
          content="Browse a huge list of highly active React meetups!" />
      </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  );
};

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;
//   // fetch data from an API
//   // runs on the server, not on the client
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS
//     }
//   }
// }

export async function getStaticProps() {
  // The code written here will be server side, it will never executed on the client side.
  const client = await MongoClient.connect('mongodb+srv://honza:8FLv2ItL6TQGi481@cluster0.iewhe.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');

  console.log('awaited client');

  const db = client.db();

  const meetupsCollection = db.collection('meetups');

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map(meetup => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString()
      }))
    },
    // incremental static generation
    revalidate: 10
  };
};

export default HomePage;