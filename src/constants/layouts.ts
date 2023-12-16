import { ListIconSocial, ListSiteBar } from '@/models/header'

import icFBHeader from '../assets/icons/header/ic_fb.svg'
import icInsHeader from '../assets/icons/header/ic_ins.svg'
import icLinkedinHeader from '../assets/icons/header/in_linkedin.svg'

import icFBFooter from '../assets/icons/footer/ic_fb.svg'
import icInsFooter from '../assets/icons/footer/ic_ins.svg'
import icLinkedinFooter from '../assets/icons/footer/ic_linkedin.svg'

export const listSiteBar: ListSiteBar[] = [
  { id: 'home', content: 'Home', url: '/' },
  { id: 'blog', content: 'Blog', url: '/blogs' },
  { id: 'contact', content: 'Contact', url: '/contact' },
]

export const listSocial: ListIconSocial[] = [
  {
    id: 'fb',
    icon: 'icFB',
    src: icFBHeader,
    alt: 'fb-icon',
    url: 'https://fb.com/minhhiep.pro99',
  },
  {
    id: 'ins',
    icon: 'icIns',
    src: icInsHeader,
    alt: 'instagram-icon',
    url: 'https://instagram.com/vion.ng99',
  },
  {
    id: 'linkedin',
    icon: 'icLinkedIn',
    src: icLinkedinHeader,
    alt: 'linkedin-icon',
    url: 'https://linkedin.com/in/vionnguyen',
  },
]

export const listSocialFooter: ListIconSocial[] = [
  {
    id: 'fb',
    icon: 'icFB',
    src: icFBFooter,
    alt: 'fb-icon',
    url: 'https://fb.com/minhhiep.pro99',
  },
  {
    id: 'ins',
    icon: 'icIns',
    src: icInsFooter,
    alt: 'instagram-icon',
    url: 'https://instagram.com/vion.ng99',
  },
  {
    id: 'linkedin',
    icon: 'icLinkedIn',
    src: icLinkedinFooter,
    alt: 'linkedin-icon',
    url: 'https://linkedin.com/in/vionnguyen',
  },
]
