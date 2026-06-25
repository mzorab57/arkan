import { packagesData } from '@/data/packages';

// Nav type
export type navLinkType = {
  label: string;
  url?: string;
};

// Nav
const navLinks = [
  {
    label: 'Services',
    url: '#services',
  },
  {
    label: 'Projects',
    url: '#works',
  },
  {
    label: 'About',
    url: '#about-me-section',
  },
  {
    label: 'Testimonials',
    url: '#testimonials-section',
  },
  {
    label: 'Contact',
    url: '#contact-section',
  },
];
const navbarLinks: navLinkType[] = [
  ...packagesData.map((item) => ({
    label: item.name.includes('بەخێربێن') ? 'بەخێر بێن' : item.name,
    url: item.href,
  })),
  {
    label: 'پەیوەندی',
    url: '/#contact-section',
  },
];

const socialLinks = [
  {
    label: 'Instagram',
    url: 'https://www.instagram.com/arkan_quraan?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
  },
  {
    label: 'Facebook',
    url: 'https://www.facebook.com/barzakh.kompany',
  },
  {
    label: 'WhatsApp',
    url: 'https://wa.me/966567302842',
  },
];

const resourceLinks: navLinkType[] = [];

const heroText =
  'A freelance full-stack developer, making good shit since 2023, hiding bad shit since 2023.';

const locationPlace = `15°22'22.0"N 44°10'39.5"E`;
const locationCountry = 'Yemen, Sanaa';

// cal.com
const dataCalNamespace = '30min';
const dataCalLink = 'brhoom/30min';
const dataCalConfig =
  '{"layout":"month_view", "theme": "dark", "brand": "#8C8C73"}';

export {
  socialLinks,
  resourceLinks,
  heroText,
  locationPlace,
  locationCountry,
  navLinks,
  navbarLinks,
  dataCalNamespace,
  dataCalLink,
  dataCalConfig,
};
