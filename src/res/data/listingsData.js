import apartment1 from '../img/apartment_1.jpg'
import apartment2 from '../img/apartment_2.jpg'
import ranch from '../img/ranch.jpg'
import villa from '../img/villa.jpg'
import villa2 from '../img/villa_2.jpg'
import villa3 from '../img/villa_3.jpg'
import villa4 from '../img/villa_4.jpg'
import villa5 from '../img/villa_5.jpg'
import villa6 from '../img/villa_6.jpg'
import villa7 from '../img/villa_7.jpg'
import villa8 from '../img/villa_8.jpg'
import villa9 from '../img/villa_9.jpg'
import villa10 from '../img/villa_10.jpg'
import villa11 from '../img/villa_11.jpg'
import condominium from '../img/condominium.jpg'
import jeny from '../img/jeny.jpg'
import michael from '../img/michael.jpg'
import harvey from '../img/harvey.jpg'
import jerry from '../img/jerry.jpg'
import isabelle from '../img/isabelle.jpg'
import jessica from '../img/jessica.jpg'
import joe from '../img/joe.jpg'
import josh from '../img/josh.jpg'
import tyler from '../img/tyler.jpg'
import pamela from '../img/pamela.jpg'
import saun from '../img/saun.jpg'
import nick from '../img/nick.jpg'
import james from '../img/james.jpg'
import gina from '../img/gina.jpg'
import bryan from '../img/bryan.jpg'

var listingsData = [
    {
        id: 1,
        address: '24 Spring Street',
        city: 'Ridgewood',
        state: 'NY',
        rooms: '3',
        bathRooms: '1',
        price: 230000,
        floorSpace: 2000,
        userImage: jeny,
        userName: 'Jeny Taft',
        postDate: '05/03/2019',
        yearBuilt: 2014,
        heating: 'other',
        cooling: 'central',
        parking: 'outside',
        overview: 'Spectacular two-story home with 3 bedrooms and 2.5 bathrooms in the heart of Fort Worth! Your family will love this stylish home graced with extensive plank floors, decorative lighting, and a cozy fireplace. Cooking is a breeze in the pristine kitchen showcasing a breakfast bar, stainless steel appliances, and gorgeous countertops. Retreat to the primary suite at the end of the day that is graced with a garden tub, frameless shower, and a walk-in closet. Spend summer evenings on the covered patio or in the massive backyard',
        extras: [
            'elevator',
            'gym'
        ],
        homeType: 'Apartment',
        image: apartment1
    },
    {
        id:2,
        address: '22 Warren Street',
        city: 'New Jersey',
        state: 'NY',
        rooms: '4',
        bathRooms: '2',
        price: 355000,
        floorSpace: 3000,
        userImage: jerry,
        userName: 'Jerry Richer',
        postDate: '11/07/2019',
        yearBuilt: 2016,
        heating: 'other',
        cooling: 'central',
        parking: 'underground',
        overview: '',
        extras: [
            'elevator'
        ],
        homeType: 'Apartment',
        image: apartment2
    },
    {
        id:3,
        address: '9 Douglas Street',
        city: 'Richmond',
        state: 'CT',
        rooms: '5',
        bathRooms: '2',
        price: 150000,
        floorSpace: 4350,
        userImage: michael,
        userName: 'Michael Green',
        postDate: '24/04/2020',
        yearBuilt: 2012,
        heating: 'other',
        cooling: 'central',
        parking: '2 places',
        overview: '',
        extras: [],
        homeType: 'Ranch',
        image: ranch
    },
    {
        id:4,
        address: '82 Carlton Street',
        city: 'Brookline',
        state: 'MA',
        rooms: '7',
        bathRooms: '3',
        price: 600000,
        floorSpace: 4550,
        userImage: isabelle,
        userName: 'Isabelle Taylor',
        postDate: '23/08/2020',
        yearBuilt: 2015,
        heating: 'other',
        cooling: 'central',
        parking: '4 spaces',
        overview: '',
        extras: [
            'pool',
            'gym'
        ],
        homeType: 'Villa',
        image: villa
    },
    {
        id:5,
        address: '55 Market Avenue',
        city: 'Charlestown',
        state: 'MA',
        rooms: '2',
        bathRooms: '1',
        price: 110000,
        floorSpace: 1400,
        userImage: harvey,
        userName: 'Harvey Ross',
        postDate: '18/02/2020',
        yearBuilt: 2010,
        heating: 'other',
        cooling: 'central',
        parking: 'outside',
        overview: '',
        extras: [
            'elevator'
        ],
        homeType: 'Condominium',
        image: condominium
    },
    {
        id:6,
        address: '48th Malcolm Street',
        city: 'Baltimore',
        state: 'MD',
        rooms: '5',
        bathRooms: '2',
        price: 280000,
        floorSpace: 3240,
        userImage: jessica,
        userName: 'Jessica Goodings',
        postDate: '13/08/2021',
        yearBuilt: 2017,
        heating: 'other',
        cooling: 'central',
        parking: '2 spaces',
        overview: '',
        extras: [
            'gym'
        ],
        homeType: 'Villa',
        image: villa2
    },
    {
        id:7,
        address: '29th Spring Street',
        city: 'Washington',
        state: 'DC',
        rooms: '8',
        bathRooms: '4',
        price: 550000,
        floorSpace: 5215,
        userImage: joe,
        userName: 'Joe Vargas',
        postDate: '10/03/2021',
        yearBuilt: 2018,
        heating: 'other',
        cooling: 'central',
        parking: '4 spaces',
        overview: '',
        extras: [
            'gym',
            'pool'
        ],
        homeType: 'Villa',
        image: villa3
    },
    {
        id:8,
        address: '29th Southampton Street',
        city: 'Washington',
        state: 'DC',
        rooms: '7',
        bathRooms: '4',
        price: 450000,
        floorSpace: 3412,
        userImage: josh,
        userName: 'Josh Wozniak',
        postDate: '14/06/2021',
        yearBuilt: 2018,
        heating: 'other',
        cooling: 'central',
        parking: '4 spaces',
        overview: '',
        extras: [
            'pool'
        ],
        homeType: 'Villa',
        image: villa4
    },
    {
        id:9,
        address: '5th Washington Street',
        city: 'Boston',
        state: 'MA',
        rooms: '5',
        bathRooms: '4',
        price: 430000,
        floorSpace: 3760,
        userImage: tyler,
        userName: 'Tyler Banks',
        postDate: '10/03/2021',
        yearBuilt: 2014,
        heating: 'other',
        cooling: 'central',
        parking: '4 spaces',
        overview: '',
        extras: [
            'gym',
            'pool',
            'finished basement'
        ],
        homeType: 'Villa',
        image: villa5
    },
    {
        id:10,
        address: '105th Park Street',
        city: 'New Yourk',
        state: 'NY',
        rooms: '6',
        bathRooms: '3',
        price: 580000,
        floorSpace: 600000,
        userImage: pamela,
        userName: 'Pamela Sanders',
        postDate: '04/10/2020',
        yearBuilt: 2019,
        heating: 'other',
        cooling: 'central',
        parking: '4 spaces',
        overview: '',
        extras: [
            'pool'
        ],
        homeType: 'Villa',
        image: villa6
    },
    {
        id:11,
        address: '19th Newton Street',
        city: 'Las Vegas',
        state: 'NEV',
        rooms: '6',
        bathRooms: '4',
        price: 830040,
        floorSpace: 4745,
        userImage: saun,
        userName: 'Saun Carter',
        postDate: '12/04/2019',
        yearBuilt: 2018,
        heating: 'other',
        cooling: 'central',
        parking: '4 spaces',
        overview: '',
        extras: [
            'gym',
            'pool',
            'finished basement'
        ],
        homeType: 'Villa',
        image: villa7
    },
    {
        id:12,
        address: '14th Matthew Street',
        city: 'Boston',
        state: 'MA',
        rooms: '4',
        bathRooms: '2',
        price: 170050,
        floorSpace: 2500,
        userImage: nick,
        userName: 'Nick Abrikas',
        postDate: '12/11/2017',
        yearBuilt: 2015,
        heating: 'other',
        cooling: 'central',
        parking: '2 spaces',
        overview: '',
        extras: [],
        homeType: 'Villa',
        image: villa8
    },
    {
        id:13,
        address: '74th Lincoln Street',
        city: 'Philadelphia',
        state: 'PA',
        rooms: '5',
        bathRooms: '3',
        price: 430000,
        floorSpace: 3615,
        userImage: james,
        userName: 'James Norman',
        postDate: '08/09/2021',
        yearBuilt: 2018,
        heating: 'other',
        cooling: 'central',
        parking: '2 spaces',
        overview: '',
        extras: [
            'pool'
        ],
        homeType: 'Villa',
        image: villa9
    },
    {
        id:14,
        address: '43th Harvard Street',
        city: 'Boston',
        state: 'MA',
        rooms: '4',
        bathRooms: '4',
        price: 470100,
        floorSpace: 3100,
        userImage: gina,
        userName: 'Gina Jones',
        postDate: '24/03/2019',
        yearBuilt: 2018,
        heating: 'other',
        cooling: 'central',
        parking: '3 spaces',
        overview: '',
        extras: [
            'gym'
        ],
        homeType: 'Villa',
        image: villa10
    },
    {
        id:15,
        address: '29th Eliot Street',
        city: 'Baltimore',
        state: 'MD',
        rooms: '6',
        bathRooms: '3',
        price: 330000,
        floorSpace: 2515,
        userImage: bryan,
        userName: 'Bryan Cranston',
        postDate: '23/06/2020',
        yearBuilt: 2015,
        heating: 'other',
        cooling: 'central',
        parking: '2 spaces',
        overview: '',
        extras: [],
        homeType: 'Villa',
        image: villa11
    }
]

export default listingsData;