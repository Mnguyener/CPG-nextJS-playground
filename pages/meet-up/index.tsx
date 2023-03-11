// our-domain.com/home-page-of-meet-up
import MeetupList from "components/meetups/MeetupList";

const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'A First Meetup',
        image: 'https://en.wikipedia.org/wiki/Brandenburg_Gate#/media/File:Brandenburger_Tor_abends.jpg',
        address: 'Some Address 4, 23531 A City',
        description: 'First meetup!'
    },
    {
        id: 'm2',
        title: 'A Second Meetup',
        image: 'https://en.wikipedia.org/wiki/Berlin_Victory_Column#/media/File:Aussicht_von_der_Siegessaeule.jpg',
        address: 'Some Address 79, 21231 Another City',
        description: 'Second meetup!'
    }
];
function HomePage() {
    return <MeetupList meetups={DUMMY_MEETUPS}/>  
}
  
  
  export default HomePage;