import { site, publishGuides } from './site';

export interface Page {
  slug: string;
  nav: string; // short label for cards
  category: string;
  title: string; // <title>
  h1: string;
  description: string;
  intro: string;
  keyFacts?: [string, string][];
  sections: { h2: string; id: string; html: string }[];
  faqs?: { q: string; a: string }[];
  legal?: boolean;
}

const official = `<a href="${site.official}" rel="nofollow noopener">lafitness.com</a>`;

export const pages: Page[] = [
  {
    slug: 'about-us',
    nav: 'About Us',
    category: 'Site',
    legal: true,
    title: `About ${site.name}`,
    h1: 'About This Site',
    description: `${site.domain} is an independent guide to LA Fitness membership prices, fees and policies. It is not affiliated with LA Fitness.`,
    intro: `${site.domain} is an independent guide that explains LA Fitness membership prices, fees and rules in plain English.`,
    sections: [
      {
        h2: 'What we do',
        id: 'what',
        html: `<p>LA Fitness does not publish one national price list. Monthly dues, initiation fees and annual fees depend on the club and the offer on the day you join. We combine what LA Fitness publishes with prices reported by members and price trackers, and explain the rules people ask about most: cost, fees, guests, freezing and cancelling.</p>`,
      },
      {
        h2: 'Not affiliated with LA Fitness',
        id: 'independent',
        html: `<p>This site is not owned by, endorsed by or connected to Fitness International, LLC, LA Fitness, Club Studio or any of their brands. We cannot access member accounts, sell memberships, process cancellations or issue refunds. For anything involving your own account, contact your home club or use ${official}.</p>`,
      },
      {
        h2: 'How we check information',
        id: 'method',
        html: `<p>Policy details come from LA Fitness's own website and public regulatory records. Prices are reported ranges, because LA Fitness quotes prices club by club; we say so on every page rather than present one number as official. Pages show the month they were last reviewed.</p>
<p>If you spot something out of date, please <a href="/contact-us/">tell us</a>.</p>`,
      },
      {
        h2: 'How the site is funded',
        id: 'funding',
        html: `<p>The site may display advertising. Advertisers do not influence what we write.</p>`,
      },
    ],
  },
  {
    slug: 'contact-us',
    nav: 'Contact Us',
    category: 'Site',
    legal: true,
    title: `Contact ${site.name}`,
    h1: 'Contact Us',
    description: `Contact the editors of ${site.domain}. For membership, billing or cancellation help, contact LA Fitness directly.`,
    intro: 'Questions or corrections about this website are welcome.',
    sections: [
      {
        h2: 'Email the editors',
        id: 'email',
        html: `<p>Write to <a href="mailto:${site.email}">${site.email}</a> about corrections, feedback or advertising on this site. We read every message.</p>`,
      },
      {
        h2: 'Need help with your membership?',
        id: 'membership',
        html: `<p class="note warn">We are not LA Fitness and cannot see or change your account. Please do not send us member numbers, payment details or cancellation requests.</p>
<p>For billing, cancellations, freezes or plan changes, contact your home club or use ${official}. ${publishGuides ? '' : ''}</p>`,
      },
    ],
  },
  {
    slug: 'privacy-policy',
    nav: 'Privacy Policy',
    category: 'Site',
    legal: true,
    title: `Privacy Policy | ${site.name}`,
    h1: 'Privacy Policy',
    description: `How ${site.domain} handles visitor information, cookies and advertising.`,
    intro: `This policy explains what information ${site.domain} collects when you visit and how it is used. Last updated ${site.updated}.`,
    sections: [
      {
        h2: 'Information we collect',
        id: 'collect',
        html: `<p>We do not ask you to create an account and we do not collect membership or payment information. Like most websites, our hosting and analytics providers automatically record standard log data such as IP address, browser type, pages viewed and referring page. If you email us, we receive your email address and whatever you include in the message.</p>`,
      },
      {
        h2: 'Cookies and advertising',
        id: 'cookies',
        html: `<p>This site may use cookies for analytics and to show advertising. Third-party vendors, including Google, use cookies to serve ads based on your prior visits to this and other websites. Google's use of advertising cookies enables it and its partners to serve ads based on your browsing. You can opt out of personalised advertising in <a href="https://adssettings.google.com/" rel="nofollow noopener">Google Ads Settings</a> or at <a href="https://www.aboutads.info/choices/" rel="nofollow noopener">aboutads.info</a>, and you can block cookies in your browser settings.</p>`,
      },
      {
        h2: 'How information is used',
        id: 'use',
        html: `<p>Log and analytics data is used to keep the site running, understand which pages are useful and prevent abuse. Emails are used only to reply to you. We do not sell personal information.</p>`,
      },
      {
        h2: 'External links',
        id: 'links',
        html: `<p>We link to other websites, including the official LA Fitness site. We are not responsible for their content or privacy practices.</p>`,
      },
      {
        h2: 'Your choices and rights',
        id: 'rights',
        html: `<p>Depending on where you live, you may have rights to access, correct or delete personal data and to object to certain processing. To make a request, email <a href="mailto:${site.email}">${site.email}</a>. This site is not directed at children under 13.</p>`,
      },
      {
        h2: 'Changes',
        id: 'changes',
        html: `<p>We may update this policy. The date at the top shows the latest revision.</p>`,
      },
    ],
  },
  {
    slug: 'terms-and-conditions',
    nav: 'Terms & Conditions',
    category: 'Site',
    legal: true,
    title: `Terms & Conditions | ${site.name}`,
    h1: 'Terms & Conditions',
    description: `Terms of use for ${site.domain}, an independent information site about LA Fitness memberships.`,
    intro: `By using ${site.domain} you agree to these terms. Last updated ${site.updated}.`,
    sections: [
      {
        h2: 'Independent information only',
        id: 'info',
        html: `<p>This website provides general information about LA Fitness memberships. It is not affiliated with Fitness International, LLC (LA Fitness), and nothing here is an offer, a contract or official company policy. Your membership is governed solely by the membership agreement you sign.</p>`,
      },
      {
        h2: 'Accuracy',
        id: 'accuracy',
        html: `<p>We work to keep information current, but prices, fees and policies vary by club, plan and state and change without notice. Prices on this site are reported ranges, not quotes. Content is provided "as is" without warranties of any kind. Verify details with your club or on ${official} before making a financial decision.</p>`,
      },
      {
        h2: 'Not professional advice',
        id: 'advice',
        html: `<p>Nothing on this site is legal, financial, medical or fitness advice. Consult a qualified professional before starting an exercise programme.</p>`,
      },
      {
        h2: 'Trademarks',
        id: 'trademarks',
        html: `<p>LA Fitness®, Club Studio® and related names are trademarks of their respective owners. They are used on this site only to identify the services being described.</p>`,
      },
      {
        h2: 'Limitation of liability',
        id: 'liability',
        html: `<p>To the extent permitted by law, ${site.domain} and its operators are not liable for any loss arising from use of, or reliance on, this website.</p>`,
      },
      {
        h2: 'Use of content',
        id: 'content',
        html: `<p>Text and design on this site are protected by copyright. You may link to and quote brief excerpts with attribution. Republishing whole pages requires permission.</p>`,
      },
      {
        h2: 'Contact',
        id: 'contact',
        html: `<p>Questions about these terms can be sent to <a href="mailto:${site.email}">${site.email}</a>.</p>`,
      },
    ],
  },
  {
    slug: 'disclaimer',
    nav: 'Disclaimer',
    category: 'Site',
    legal: true,
    title: `Disclaimer | ${site.name}`,
    h1: 'Disclaimer',
    description: `${site.domain} is an independent information site and is not affiliated with LA Fitness. Read the full disclaimer.`,
    intro: `${site.domain} is an independent website. It is not affiliated with, endorsed by or operated by Fitness International, LLC (LA Fitness). Last updated ${site.updated}.`,
    sections: [
      {
        h2: 'No affiliation',
        id: 'affiliation',
        html: `<p>This site is not the official LA Fitness website. We do not sell memberships, take payments, access member accounts, or process cancellations, freezes, transfers or refunds. For any of those, use ${official} or contact your home club.</p>`,
      },
      {
        h2: 'Prices are estimates and differ by club',
        id: 'accuracy',
        html: `<p>LA Fitness does not publish one national price list. The prices on this site are ranges reported by members and price trackers, and policies are summarised from publicly available information. Dues, initiation fees, annual fees and terms differ between clubs, plans and states, and can change at any time. We make no guarantee that any figure on this site is current, complete or applicable to you. Always confirm with your club before you join, pay or cancel.</p>`,
      },
      {
        h2: 'Not professional advice',
        id: 'advice',
        html: `<p>Nothing on this site is financial, legal, medical or fitness advice. Your membership is governed by the agreement you sign. Speak to a doctor before beginning a new exercise programme.</p>`,
      },
      {
        h2: 'Trademarks',
        id: 'trademarks',
        html: `<p>LA Fitness®, Club Studio® and Esporta Fitness® are trademarks of their respective owners. They appear on this site only to identify the company and services being discussed. No logos or official imagery are used.</p>`,
      },
      {
        h2: 'Advertising and external links',
        id: 'ads',
        html: `<p>This site may display third-party advertising and links to other websites. We do not control and are not responsible for the content, offers or practices of advertisers or linked sites.</p>`,
      },
      {
        h2: 'Liability',
        id: 'liability',
        html: `<p>Use of this site is at your own risk. To the extent permitted by law, we accept no liability for loss or damage arising from reliance on its content.</p>
<p>Found an error? Email <a href="mailto:${site.email}">${site.email}</a>.</p>`,
      },
    ],
  },
];

export const published = pages.filter((p) => p.legal || publishGuides);
export const guides = published.filter((p) => !p.legal);
