import React from 'react';
import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: "A first meetup",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
    address: "Some address 5, 12345 Some City",
    description: "This is a first meetup!"
  },
  {
    id: 'm2',
    title: "A second meetup",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
    address: "Some address 4, 12345 Some City",
    description: "This is a second meetup!"
  }
];

const HomePage = (props) => {
  return (
    <MeetupList meetups={props.meetups} />
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
  // fetch data from an API or something
  // always need to return object here
  return {
    props: {
      meetups: DUMMY_MEETUPS
    },
    // incremental static generation
    revalidate: 10
  };
};

export default HomePage;