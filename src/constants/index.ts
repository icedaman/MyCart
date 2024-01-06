import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { bigShoe1, bigShoe2, bigShoe3, customer1, customer2, Shoe4, Shoe5, Shoe6, Shoe7, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3 } from "../assets/images";
import { shoe1, shoe2,shoe3,shoe4,shoe5,shoe6,shoe7,shoe8, shoe9, shoe10,
    shoe11, shoe12,shoe13,shoe14,shoe15,shoe16,shoe17,shoe18, shoe19, shoe20 } from "../assets/shoes";
import { pants1, pants2, pants3, pants4, pants5, 
    jacket1, jacket2,jacket3,jacket4,jacket5,jacket6,jacket7,jacket8, jacket9, jacket10, jacket11,
    trackSuite1, trackSuite2,trackSuite3,trackSuite4,trackSuite5,trackSuite6,trackSuite7,trackSuite8, trackSuite9, 

} from '../assets/clothes'

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#products", label: "Products" },
    { href: "#contact-us", label: "Contact Us" },
    // { href: "/products", label: "Products" },
];

export const shoes = [
    {
        thumbnail: thumbnailShoe1,
        bigShoe: bigShoe1,
    },
    {
        thumbnail: thumbnailShoe2,
        bigShoe: bigShoe2,
    },
    {
        thumbnail: thumbnailShoe3,
        bigShoe: bigShoe3,
    },
];

export const statistics = [
    { value: '1k+', label: 'Brands' },
    { value: '500+', label: 'Shops' },
    { value: '250k+', label: 'Customers' },
];

export const products = [
    {
        imgURL: Shoe4,
        name: "Nike Air Jordan-01",
        price: "$300.20",
    },
    {
        imgURL: Shoe5,
        name: "Nike Air Jordan-10",
        price: "$210.20",
    },
    {
        imgURL: Shoe6,
        name: "Nike Air Jordan-100",
        price: "$220.20",
    },
    {
        imgURL: Shoe7,
        name: "Nike Air Jordan-001",
        price: "$230.20",
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Free shipping",
        subtext: "Enjoy seamless shopping with our complimentary shipping service."
    },
    {
        imgURL: shieldTick,
        label: "Secure Payment",
        subtext: "Experience worry-free transactions with our secure payment options."
    },
    {
        imgURL: support,
        label: "Love to help you",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Morich Brown',
        rating: 4.5,
        feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    },
    {
        imgURL: customer2,
        customerName: 'Lota Mongeskar',
        rating: 4.5,
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
    }
];


export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "Air Jordan 1", link: "/" },
            { name: "Air Jordan 2", link: "/" },
            { name: "Air Jordan 3", link: "/" },
            { name: "New Balance 1", link: "/" },
            { name: "New Balance 2", link: "/" },
            { name: "New Balance 13", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@shoesinc.com", link: "mailto:customer@shoesinc.com" },
            { name: "+2344862354", link: "tel:+2344862354" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];


export const shoeList = [
    {
        id: 1,
        imgURL: shoe1,
        name: "New Balance 574",
        price: 90,
        category: "shoes",
    },
    {
        id: 2,
        imgURL: shoe2,
        name: "Nike Mid Air Jordan",
        price: 202,
        category: "shoes",
    },
    {
        id: 3,
        imgURL: shoe3,
        name: "New Balance 555",
        price: 150,
        category: "shoes",
    },
    {
        id: 4,
        imgURL: shoe4,
        name: "Adidas Blue x",
        price: 264,
        category: "shoes",
    },
    {
        id: 5,
        imgURL: shoe5,
        name: "Nike Air Jordan 05",
        price: 205,
        category: "shoes",
    },
    {
        id: 6,
        imgURL: shoe6,
        name: "Nike Air Jordan 02",
        price: 75,
        category: "shoes",
    },
    {
        id: 7,
        imgURL: shoe7,
        name: "All Stars Converse",
        price: 147,
        category: "shoes",
    },
    {
        id: 8,
        imgURL: shoe8,
        name: "New Balance 07",
        price: 128,
        category: "shoes",
    },
    {
        id: 9,
        imgURL: shoe9,
        name: "Solomon 1",
        price: 137,
        category: "shoes",
    },
    {
        id: 10,
        imgURL: shoe10,
        name: "New Balance 234",
        price: 208,
        category: "shoes",
    },
    {
        id: 11,
        imgURL: shoe11,
        name: "New Balance 111",
        price: 101,
        category: "shoes",
    },
    {
        id: 12,
        imgURL: shoe12,
        name: "New Balance 222",
        price: 122,
        category: "shoes",
    },
    {
        id: 13,
        imgURL: shoe13,
        name: "New Balance 777",
        price: 203,
        category: "shoes",
    },
    {
        id: 14,
        imgURL: shoe14,
        name: "Nike Air Max 14",
        price: 30,
        category: "shoes",
    },
    {
        id: 15,
        imgURL: shoe15,
        name: "Nike Air Max 15",
        price: 195,
        category: "shoes",
    },
    {
        id: 16,
        imgURL: shoe16,
        name: "Nike Air Jordan 16",
        price: 126,
        category: "shoes",
    },
    {
        id: 17,
        imgURL: shoe17,
        name: "Solomon 3",
        price: 217,
        category: "shoes",
    },
    {
        id: 18,
        imgURL: shoe18,
        name: "Nike Air Max 8",
        price: 49,
        category: "shoes",
    },
    {
        id: 19,
        imgURL: shoe19,
        name: "Nike Air Jordan 9",
        price: 337,
        category: "shoes",
    },
    {
        id: 20,
        imgURL: shoe20,
        name: "New Balance 990",
        price: 228,
        category: "shoes",
    },
]

export const jacketList = [
    {
        id: 1,
        imgURL: jacket1,
        name: "Reebook 01",
        price: 50,
        category: "jackets",
    },
    {
        id: 2,
        imgURL: jacket2,
        name: "Reebook 02",
        price: 44,
        category: "jackets",
    },
    {
        id: 3,
        imgURL: jacket3,
        name: "Adidas 01",
        price: 70,
        category: "jackets",
    },
    {
        id: 4,
        imgURL: jacket4,
        name: "New Balance 02",
        price: 84,
        category: "jackets",
    },
    {
        id: 5,
        imgURL: jacket5,
        name: "New Balance 03",
        price: 95,
        category: "jackets",
    },
    {
        id: 6,
        imgURL: jacket6,
        name: "Camo 01",
        price: 106,
        category: "jackets",
    },
    {
        id: 7,
        imgURL: jacket7,
        name: "Duaton 02",
        price: 200,
        category: "jackets",
    },
    {
        id: 8,
        imgURL: jacket8,
        name: "Sengo 01",
        price: 21,
        category: "jackets",
    },
    {
        id: 9,
        imgURL: jacket9,
        name: "Sengo 03",
        price: 149,
        category: "jackets",
    },
    {
        id: 10,
        imgURL: jacket10,
        name: "Hard Wear 01",
        price: 34,
        category: "jackets",
    },
    {
        id: 11,
        imgURL: jacket11,
        name: "Ucon 01",
        price: 58,
        category: "jackets",
    },
]

export const trackSuiteList = [
    {
        id: 1,
        imgURL: trackSuite1,
        name: "Nike 01",
        price: 145,
        category: "trackSuites",
    },
    {
        id: 2,
        imgURL: trackSuite2,
        name: "Asycs 01",
        price: 220,
        category: "trackSuites",
    },
    {
        id: 3,
        imgURL: trackSuite3,
        name: "Air Jordan 01",
        price: 188,
        category: "trackSuites",
    },
    {
        id: 4,
        imgURL: trackSuite4,
        name: "Adidas 01",
        price: 177,
        category: "trackSuites",
    },
    {
        id: 5,
        imgURL: trackSuite5,
        name: "Asycs 05",
        price: 35,
        category: "trackSuites",
    },
    {
        id: 6,
        imgURL: trackSuite6,
        name: "Trapstar 06",
        price: 41,
        category: "trackSuites",
    },
    {
        id: 7,
        imgURL: trackSuite7,
        name: "Reebook 07",
        price: 70,
        category: "trackSuites",
    },
    {
        id: 8,
        imgURL: trackSuite8,
        name: "Asycs 08",
        price: 173,
        category: "trackSuites",
    },
    {
        id: 9,
        imgURL: trackSuite9,
        name: "Trapstar 09",
        price: 53,
        category: "trackSuites",
    },
]

export const pantsList = [
    {
        id: 1,
        imgURL: pants1,
        name: "New Balance 01",
        price: 10,
        category: "pants",
    },
    {
        id: 2,
        imgURL: pants2,
        name: "Asycs 01",
        price: 20,
        category: "pants",
    },
    {
        id: 3,
        imgURL: pants3,
        name: "Asycs 02",
        price: 30,
        category: "pants",
    },
    {
        id: 4,
        imgURL: pants4,
        name: "Lizzy 01",
        price: 40,
        category: "pants",
    },
    {
        id: 5,
        imgURL: pants5,
        name: "Nike 05",
        price: 50,
        category: "pants",
    },
]
