import london from './images/london-building.jpg'
import londonStore from './images/london-store.jpg'

import lasvegas from './images/las-vegas-building.jpg'
import lasvegasStore from './images/las-vegas-store.jpg'

import berlin from './images/berlin-building.jpg'
import berlinStore from './images/berlin-store.jpg'

import madrid from './images/madrid-building.jpg'
import madridStore from './images/madrid-store.jpg'

const boutiquesData = [
    {
        street: '125 New Bond Street',
        city: 'London',
        country: 'United Kingdom',
        description: 'Located in the heart of Mayfair on New Bond Street, our boutique offers an exquisite collection of timepieces crafted with precision and elegance. Step into a world of sophistication and indulge in the finest selection of luxury watches that embody timeless style and exceptional craftsmanship.',
        imageUrl: london,
        hoveredImageUrl: londonStore,
        link: 'https://www.google.com/maps/place/125+Bond+St,+London,+UK/@51.5125776,-0.1473126,17z/data=!3m1!4b1!4m5!3m4!1s0x4876052b062b8fdb:0x931a83c8a2947061!8m2!3d51.5125776!4d-0.1447377?entry=ttu'
    },

    {
        street: '771 Main Street',
        city: 'Las Vegas',
        country: 'United States',
        description: 'Located in the heart of Mayfair on New Bond Street, our boutique offers an exquisite collection of timepieces crafted with precision and elegance. Step into a world of sophistication and indulge in the finest selection of luxury watches that embody timeless style and exceptional craftsmanship.',
        imageUrl: lasvegas,
        hoveredImageUrl: lasvegasStore,
        link: 'https://www.google.com/maps/place/123+N+Main+St,+Las+Vegas,+NV+89101,+USA/@36.1724264,-115.1485963,17z/data=!3m1!4b1!4m6!3m5!1s0x80c8c3a10aaa588d:0x3ee8ac4fd5f145fa!8m2!3d36.1724264!4d-115.1460214!16s%2Fg%2F11rsg4y76d?entry=ttu'
    },

    {
        street: 'Schlossstraße 5, 10178',
        city: 'Berlin',
        country: 'Germany',
        description: 'Located in the heart of Mayfair on New Bond Street, our boutique offers an exquisite collection of timepieces crafted with precision and elegance. Step into a world of sophistication and indulge in the finest selection of luxury watches that embody timeless style and exceptional craftsmanship.',
        imageUrl: berlin,
        hoveredImageUrl: berlinStore,
        link: 'https://www.google.com/maps/place/Schlo%C3%9Fstra%C3%9Fe+5,+13507+Berlin,+Germany/@52.591326,13.2816088,17z/data=!3m1!4b1!4m6!3m5!1s0x47a8545d13c9e027:0xb6d51d1c4d3aec1e!8m2!3d52.591326!4d13.2841837!16s%2Fg%2F11t0pd1r5f?entry=ttu'
    },
    {
        street: 'Calle Mayor 10, 28013',
        city: ' Madrid',
        country: 'Spain',
        description: 'Located in the heart of Mayfair on New Bond Street, our boutique offers an exquisite collection of timepieces crafted with precision and elegance. Step into a world of sophistication and indulge in the finest selection of luxury watches that embody timeless style and exceptional craftsmanship.',
        imageUrl: madrid,
        hoveredImageUrl: madridStore,
        link: 'https://www.google.com/maps/place/C%2F+Gran+V%C3%ADa,+123,+28013+Madrid,+Spain/@40.4231534,-3.7134068,17z/data=!3m1!4b1!4m5!3m4!1s0xd42286529e7c913:0x589c161ad3057f68!8m2!3d40.4231534!4d-3.7108319?entry=ttu'
    },


]

export default boutiquesData