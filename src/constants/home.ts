import {
  ListImageSection4,
  ListItemSection5,
  ListLogoSection7,
  ListItemRightSection8,
  ListItemLeftSection8,
} from '@/models/home'

import img1Section4 from '../assets/img/home/section4/model1_section4.png'
import img2Section4 from '../assets/img/home/section4/model2_section4.png'
import img3Section4 from '../assets/img/home/section4/model3_section4.png'
import img4Section4 from '../assets/img/home/section4/model4_section4.png'

import img1Section5 from '../assets/img/home/section5/figure1_section5.png'
import img2Section5 from '../assets/img/home/section5/figure2_section5.png'
import img3Section5 from '../assets/img/home/section5/figure3_section5.png'

import logo1Section7 from '../assets/img/home/section7/logo1.png'
import logo2Section7 from '../assets/img/home/section7/logo2.png'
import logo3Section7 from '../assets/img/home/section7/logo3.png'
import logo4Section7 from '../assets/img/home/section7/logo4.png'
import logo5Section7 from '../assets/img/home/section7/logo5.png'
import logo6Section7 from '../assets/img/home/section7/logo6.png'

import img1Section8 from '../assets/img/home/section8/img1.png'
import img2Section8 from '../assets/img/home/section8/img2.png'

export const listImageSection4: ListImageSection4[] = [
  {
    id: 'img1',
    src: img1Section4,
    alt: 'an image',
  },
  {
    id: 'img2',
    src: img2Section4,
    alt: 'an image',
  },
  {
    id: 'img3',
    src: img3Section4,
    alt: 'an image',
  },
  {
    id: 'img4',
    src: img4Section4,
    alt: 'an image',
  },
]

export const listItemSection5: ListItemSection5[] = [
  {
    id: 'item1',
    img: {
      id: 'img1',
      src: img1Section5,
      alt: 'image number 1',
    },
    title: 'Wardrobe Styling',
    content:
      'Sem curae incidunt in. Illum, culpa debitis omnis convallis fugiat temporibus',
  },
  {
    id: 'item2',
    img: {
      id: 'img2',
      src: img2Section5,
      alt: 'image number 2',
    },
    title: 'Closet Cleanse',
    content:
      'Sem curae incidunt in. Illum, culpa debitis omnis convallis fugiat temporibus',
  },
  {
    id: 'item3',
    img: {
      id: 'img3',
      src: img3Section5,
      alt: 'image number 3',
    },
    title: 'Shopping Tour',
    content:
      'Sem curae incidunt in. Illum, culpa debitis omnis convallis fugiat temporibus',
  },
]

export const listLogoSection7: ListLogoSection7[] = [
  {
    id: 'logo1',
    img: logo1Section7,
    alt: 'an image logo',
  },
  {
    id: 'logo2',
    img: logo2Section7,
    alt: 'an image logo',
  },
  {
    id: 'logo3',
    img: logo3Section7,
    alt: 'an image logo',
  },
  {
    id: 'logo4',
    img: logo4Section7,
    alt: 'an image logo',
  },
  {
    id: 'logo5',
    img: logo5Section7,
    alt: 'an image logo',
  },
  {
    id: 'logo6',
    img: logo6Section7,
    alt: 'an image logo',
  },
]

export const listItemRightSection8: ListItemRightSection8[] = [
  {
    id: 'el1',
    img: {
      id: 'img1',
      alt: 'an image',
      src: img1Section8,
    },
    title: `I've Worked with from Big Agencies to New Bloggers.`,
    content: `Molestiae purus facilisi nonummy soluta nisi odit, ac taciti voluptatibus, eveniet veritatis cubilia magna. Imperdiet.`,
    linkURL: {
      text: 'Read More',
      url: '/',
    },
  },
  {
    id: 'el2',
    img: {
      id: 'img1',
      alt: 'an image',
      src: img2Section8,
    },
    title: `I Can Help You Take Your next Step Regardless of Size.`,
    content: `Molestiae purus facilisi nonummy soluta nisi odit, ac taciti voluptatibus, eveniet veritatis cubilia magna. Imperdiet.`,
    linkURL: {
      text: 'Read More',
      url: '/',
    },
  },
]

export const listItemLeftSection8: ListItemLeftSection8[] = [
  {
    id: 'menu1',
    title: 'Style',
    content:
      'Vitae molestie metus elementum ornare mauris. Occaecat, atque veniam dictum excepteur.',
  },
  {
    id: 'menu2',
    title: 'Trending Fashion',
    content:
      'Vitae molestie metus elementum ornare mauris. Occaecat, atque veniam dictum excepteur.',
  },
  {
    id: 'menu3',
    title: 'People & Places',
    content:
      'Vitae molestie metus elementum ornare mauris. Occaecat, atque veniam dictum excepteur.',
  },
  {
    id: 'menu4',
    title: 'Before-After',
    content:
      'Vitae molestie metus elementum ornare mauris. Occaecat, atque veniam dictum excepteur.',
  },
]
