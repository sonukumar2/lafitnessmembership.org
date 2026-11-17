// Single source of truth for site-wide settings and the headline numbers.
// LA Fitness publishes no national rate card, so prices are reported ranges.
// When a figure changes, update it here.

export const site = {
  name: 'LA Fitness Membership Guide',
  shortName: 'LAF Membership Guide',
  domain: 'lafitnessmembership.org',
  url: 'https://lafitnessmembership.org',
  email: 'contact@lafitnessmembership.org',
  updated: 'November 2026',
  updatedISO: '2026-11-17',
  official: 'https://www.lafitness.com/',
};

// Launch switch. Guide pages are not written yet; when they are, add them to
// pages.ts without `legal: true` and set this to true.
export const publishGuides = false;

export const facts = {
  // Monthly dues, reported ranges.
  low: 29.99,
  high: 49.99,
  singleLow: 34.99,
  singleHigh: 39.99,
  multiLow: 39.99,
  multiHigh: 49.99,
  initiationLow: 0,
  initiationHigh: 99,
  annualLow: 49,
  annualHigh: 59,
  clubs: '624',
  states: 25,
  statsAsOf: 'March 2026',
};

export const money = (n: number) =>
  '$' + (Number.isInteger(n) ? n.toLocaleString('en-US') : n.toFixed(2));

export const year = (monthly: number, annual = 0, initiation = 0) =>
  Math.round((monthly * 12 + annual + initiation) * 100) / 100;

export const legalNav = [
  { label: 'About Us', href: '/about-us/' },
  { label: 'Contact Us', href: '/contact-us/' },
  { label: 'Privacy Policy', href: '/privacy-policy/' },
  { label: 'Terms & Conditions', href: '/terms-and-conditions/' },
  { label: 'Disclaimer', href: '/disclaimer/' },
];

type NavItem = { label: string; href?: string; children?: { label: string; href: string }[] };
export const mainNav: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Membership Cost', href: '/#membership-cost' },
  { label: 'Plans', href: '/#plans' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'About Us', href: '/about-us/' },
  { label: 'Contact Us', href: '/contact-us/' },
];
export const guideNav: { label: string; href: string }[] = [];
