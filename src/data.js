import vacation1 from './images/vacation-1.jpg';
import vacation2 from './images/vacation-2.jpg';
import vacation3 from './images/vacation-3.jpg';
import vacation4 from './images/vacation-4.jpg';
import vacation5 from './images/vacation-5.jpg';
import vacation6 from './images/vacation-6.jpg';

export const pageLinks = [
  { id: 1, href: '#home', text: 'home' },
  { id: 2, href: '#about', text: 'about' },
  { id: 3, href: '#services', text: 'services' },
  { id: 4, href: '#tours', text: 'tours' },
];

export const socialLinks = [
  { id: 1, href: 'https://www.twitter.com', icon: 'fab fa-facebook' },
  { id: 2, href: 'https://www.twitter.com', icon: 'fab fa-twitter' },
  { id: 3, href: 'https://www.twitter.com', icon: 'fab fa-squarespace' },
];

export const services = [
  {
    id: 1,
    icon: 'fas fa-wallet fa-fw',
    title: 'Beaches',
    text: 'Relax on a beautiful beach and listen to the waves splash the shore',
  },
  {
    id: 2,
    icon: 'fas fa-tree fa-fw',
    title: 'Wonderful Food',
    text: 'Experience all the great and wonderful I had on ea tour',
  },
  {
    id: 3,
    icon: 'fas fa-socks fa-fw',
    title: 'amazing comfort',
    text: 'Relax and enjoy while being stress free',
  },
];

export const tours = [
  {
    id: 1,
    image: vacation1,
    date: 'august 26th, 1999',
    title: 'Ghana',
    info: `Ghana, officially the Republic of Ghana, is a country in West Africa. It abuts the Gulf of Guinea and the Atlantic Ocean to the south, sharing borders with Ivory Coast in the west, Burkina Faso in the north, and Togo in the east.`,
    location: 'Ghana',
    duration: 6,
    cost: 2100,
  },
  {
    id: 2,
    image: vacation2,
    date: 'october 1th, 2020',
    title: 'Niagara Falls',
    info: ` Niagara Falls is a city on the Niagara River, in New York State. It’s known for the vast Niagara Falls, which straddle the Canadian border. In Niagara Falls State Park, the Observation Tower, at Prospect Point, juts out over Niagara Gorge for a view of all 3 waterfalls.`,
    location: 'Niagara Falls',
    duration: 7,
    cost: 500,
  },
  {
    id: 3,
    image: vacation3,
    date: 'september 15th, 2020',
    title: 'Jamaica',
    info: ` Jamaica, a Caribbean island nation, has a lush topography of mountains, rainforests and reef-lined beaches. Many of its all-inclusive resorts are clustered in Montego Bay, with its British-colonial architecture, and Negril, known for its diving and snorkeling sites. `,
    location: 'Jamaica',
    duration: 8,
    cost: 5000,
  },
  {
    id: 4,
    image: vacation4,
    date: 'december 5th, 2019',
    title: 'Bahamas',
    info: ` The Bahamas, officially the Commonwealth of The Bahamas, is an island country within the Lucayan Archipelago of the West Indies in the North Atlantic. It takes up 97% of the Lucayan Archipelago's land area and is home to 88% of the archipelago's population. `,
    location: 'Bahamas',
    duration: 20,
    cost: 3300,
  },
  {
    id: 5,
    image: vacation5,
    date: 'december 5th, 2019',
    title: 'Times Square',
    info: `Times Square is a major commercial intersection, tourist destination, entertainment hub, and neighborhood in Midtown Manhattan, New York City, United States. `,
    location: 'Times Square',
    duration: 20,
    cost: 3300,
  },
  {
    id: 6,
    image: vacation6,
    date: 'december 5th, 2019',
    title: 'Japan',
    info: ` Japan is an island country in East Asia. It is situated in the northwest Pacific Ocean and is bordered on the west by the Sea of Japan, extending from the Sea of Okhotsk in the north toward the East China Sea, Philippine Sea, and Taiwan in the south.`,
    location: 'Japan',
    duration: 20,
    cost: 3300,
  },
];
