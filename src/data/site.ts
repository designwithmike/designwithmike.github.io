/*
 * ALL THE WORDS ON THE SITE LIVE IN THIS FILE.
 * The lorem ipsum is placeholder copy waiting for the real thing.
 * Each project has a `hue` (0-360) that tints its placeholder image blocks
 * until real images are dropped in.
 */

/* Icon names for callouts: cart, links, duplicate, fold, target, hover,
   grid, filter, megaphone, framework, progressive, search, user, store,
   tap, scan, specs, cards, compare, swipe, gallery, question, sticky, name,
   pick, picture, gaming, audio, design, shared (set up in Icon.astro) */
type IconName =
  | 'cart'
  | 'links'
  | 'duplicate'
  | 'fold'
  | 'target'
  | 'hover'
  | 'grid'
  | 'filter'
  | 'megaphone'
  | 'framework'
  | 'progressive'
  | 'search'
  | 'user'
  | 'store'
  | 'tap'
  | 'scan'
  | 'specs'
  | 'cards'
  | 'compare'
  | 'swipe'
  | 'gallery'
  | 'question'
  | 'sticky'
  | 'name'
  | 'pick'
  | 'picture'
  | 'gaming'
  | 'audio'
  | 'design'
  | 'shared';

export const site = {
  name: 'Michael Mendez',
  /* The hero wraps on its own, so write it as one sentence or two.
     Around 120–200 characters fills it nicely. */
  hero:
    'I lead product design for LG.com, using data and AI to make it easier for people to find and buy the right product.',
  email: 'design.mikemendez@gmail.com',
  /* Closing line at the end of every case study, followed by the email link */
  caseStudyCta: 'For a walkthrough of the end-to-end process, reach out.',
  workYears: '(20XX–20XX)',
  socials: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/mikemendez11' },
  ],
  /* Big numbers in a strip on the home page, between the intro and the
     project cards */
  impact: {
    heading: 'Product impact',
    items: [
      { value: '+8%', label: 'Overall CVR lift from UX optimization' },
      { value: '+48%', label: 'Site navigation & usability satisfaction' },
      { value: '+62%', label: 'Speed enhancement' },
    ],
  },
};

/* ----- Personal AI builds page (/builds) -----
   Light and fun: a pain point, the fix, and a screenshot for each build.
   To show a screenshot or clip, drop the file in /public/builds and add
   `image` (a picture) or `video` (a muted looping clip) with its path,
   like '/builds/life-board.webp'. Without one, a grey placeholder shows. */
export type Build = {
  name: string;
  problem: string;
  fix: string;
  image?: string;
  video?: string;
  /* describes the screenshot for screen readers */
  alt?: string;
  /* Vertical screenshots floating side by side on a grayscale gradient
     (the home page hero gradient, in gray). Add one entry per screenshot, with the
     file in /public/builds. With `gradient: true` and no shots yet, three
     empty portrait boxes show where they will go. */
  gradient?: boolean;
  shots?: { src: string; alt: string }[];
  /* Short looping video snippets (about 7 seconds each, muted) shown as extra
     portrait slots after the screenshots, in the same gradient panel. Files go
     in /public/builds as .mp4. */
  clips?: { src: string; alt: string }[];
};

export const buildsPage = {
  title: 'Personal AI builds',
  intro: "How I've used AI to solve my own pain points",
  /* the link on the home page and in the footer */
  linkLabel: 'Personal AI builds',
};

export const builds: Build[] = [
  {
    name: 'Family Hub',
    gradient: true,
    shots: [
      { src: '/builds/family-hub-moms-calendar.jpg', alt: "Family Hub home screen with the weather, a daily summary, local events and the shared family calendar" },
    ],
    clips: [
      { src: '/builds/family-hub-clip-u.mp4', alt: 'A child tracing the letter U on the Family Hub alphabet screen' },
      { src: '/builds/family-hub-clip-a.mp4', alt: 'A child tracing the letter A on the Family Hub alphabet screen' },
    ],
    problem: 'Our family info lived in too many places.',
    fix: 'A webOS family hub app for my LG StanbyME. It shows our color-coded family calendar and has letter flash cards with tracing for my kids. I gave Muse, my AI agent, the job of keeping the board updated. I message Muse to make changes, and it summarizes our day and pulls in local events so we can plan our weekends.',
  },
  {
    name: 'Screenshot Renamer',
    video: '/builds/screenshot-renamer.mp4',
    alt: 'A new screenshot of a Knicks cap lands on the desktop as "CleanShot 2026..." and is renamed to "product-photo-knicks-cap"',
    problem: 'Every screenshot saved with a generic name, so finding the right one meant opening every file.',
    fix: 'A small automation on my Mac that uses Claude Haiku to review each new screenshot and rename it, like "product-photo-knicks-cap."',
  },
  {
    name: 'Popstream',
    image: '/builds/popstream-live-tv.jpg',
    alt: 'Popstream Live TV screen with a video preview of the current show in the top left and a channel guide beside it',
    problem: "IPTV players are confusing, and they're not native to webOS.",
    fix: 'A native webOS IPTV player, simplified to feel like cable TV. No third-party devices needed. I integrated Claude Haiku to look at my favorited shows and share recommendations, and I used Jev to verify live channels for picture quality, like HD and 4K, so I know before I tune in.',
  },
];

export type Section =
  | { type: 'titled'; title: string; columns: { heading: string; paragraphs: string[] }[] }
  /* A text chapter. Optional `points` show as a grid of small callouts under
     the paragraphs, each with an icon (names are set up in Icon.astro). */
  | {
      type: 'text';
      heading: string;
      paragraphs: string[];
      points?: { icon: IconName; title: string; text: string }[];
      /* how many callouts sit in a row on desktop (all in one row if left out) */
      pointColumns?: number;
      /* `sub` makes it a step inside the chapter above (smaller heading).
         `stats` puts big numbers right under the paragraph. */
      sub?: boolean;
      stats?: { value: string; label: string }[];
      /* `divider` draws a thin line under the chapter */
      divider?: boolean;
    }
  /* Big numbers in a row, with an optional paragraph underneath */
  | { type: 'stats'; heading: string; items: { value: string; label: string }[]; paragraphs?: string[] }
  /* An image slot. Add `image` (a path inside /public) to show a picture, or
     `video` to play a muted, looping clip, instead of the placeholder box.
     Add `frame` (a background image) to float the picture or clip on that
     background with rounded corners and a shadow, like a window on a desk;
     `mediaRatio` is the clip's own shape, trimmed from the bottom. */
  | {
      type: 'image';
      label: string;
      ratio?: string;
      video?: string;
      image?: string;
      frame?: string;
      mediaRatio?: string;
      /* how wide the picture sits on the frame, 82% if left out */
      mediaWidth?: string;
    }
  /* Before and after stacked on top of each other, with a handle the
     visitor drags left and right to wipe between them. Both images should
     be the same size. */
  | { type: 'compare'; before: string; after: string; labels?: [string, string]; ratio?: string }
  /* Phone screens in a row on a background image. Each phone is its own
     file, so replacing one PNG updates the page. They line up left to right
     in the order listed, and go into a 2 x 2 grid on small screens. */
  /* Add `frame` (the empty phone image) when the files are bare screens or
     screen recordings, and they play inside the phone. An .mp4 plays as a
     muted looping video. */
  | { type: 'phones'; background: string; frame?: string; phones: { src: string; alt: string; label?: string }[] }
  /* Two animated phones labelled Before and After. `before` is one long
     screenshot that scrolls slowly from top to bottom. `after` is two
     screens: the first shows, then the second slides in like a tap.
     `frame` is the empty phone drawn over the screens. */
  | {
      type: 'phone-compare';
      background: string;
      frame: string;
      before: { src: string; alt: string };
      after: [{ src: string; alt: string }, { src: string; alt: string }];
    }
  /* Phones in a row with one before/after slider across all of them. Each
     phone has a `before` and `after` screen (bare screens, no frame). */
  | {
      type: 'phone-slider';
      background: string;
      frame: string;
      /* `afterAnchor: 'bottom'` keeps the bottom of the after screen when it
         is a touch taller than the phone (trims the top instead) */
      phones: { before: string; after: string; alt: string; afterAnchor?: 'bottom' }[];
    }
  /* Two pictures side by side, each floating on its own background (like
     `image` with a `frame`). `mediaRatio` is each picture's own shape. */
  | {
      type: 'framed-pair';
      ratio?: string;
      items: [
        { image: string; frame: string; label: string; mediaRatio: string },
        { image: string; frame: string; label: string; mediaRatio: string },
      ];
    }
  /* Two images side by side. `ratio` defaults to tall 4 / 5. `images` holds
     a path (inside /public) for each side; leave a side empty to keep its
     placeholder box. */
  | {
      type: 'image-pair';
      labels: [string, string];
      ratio?: string;
      images?: [string | undefined, string | undefined];
    };

export type Project = {
  slug: string;
  title: string;
  year: string;
  tags: string[];
  hue: number;
  summary: string;
  details: { label: string; value: string }[];
  /* link to the live design, shown at the bottom of the case study (above
     the closing callout) and opened in a new tab.
     `label` defaults to "See the live design on LG.com". `note` is a short
     aside in parentheses after the link. */
  live?: { href: string; label?: string; note?: string };
  /* the title on the home page tile, which says what the work did.
     Falls back to the title without "LG.com". */
  cardTitle?: string;
  /* how the cover clip is cropped on the home page tile, in % of the
     tile's width: how wide the clip is, and where its top-left corner
     sits. Wider than 100 runs off the edge. Without it the clip is centred. */
  homeCrop?: { width: number; left: number; top: number; nudgeX?: number }; // nudgeX: extra px to the right
  /* scales the centred clip on the home page tile (1.15 = 15% larger) */
  homeZoom?: number;
  /* seconds into the clip (or the middle phone's clip) where the home
     page tile starts playing.
     After it reaches the end it loops from the beginning as usual. */
  homeClipStart?: number;
  sections: Section[];
};

/* The case study page is one template. Every project below gets a page from it.
   This is the default story structure, reused until a project gets its own. */
const defaultSections: Section[] = [
  { type: 'image', label: 'Hero image', ratio: '16 / 9' },
  {
    type: 'titled',
    title: 'Lorem ipsum',
    columns: [
      {
        heading: 'Dolor sit amet',
        paragraphs: [
          'Consectetur adipiscing elit sed do eiusmod.',
          'Tempor incididunt ut labore et dolore magna aliqua.',
          'Ut enim ad minim veniam quis nostrud.',
        ],
      },
      {
        heading: 'Consectetur',
        paragraphs: [
          'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        ],
      },
    ],
  },
  { type: 'image', label: 'Overview image', ratio: '16 / 9' },
  {
    type: 'text',
    heading: 'Adipiscing elit',
    paragraphs: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    ],
  },
  { type: 'image', label: 'Process image', ratio: '16 / 9' },
  {
    type: 'text',
    heading: 'Sed do eiusmod',
    paragraphs: [
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.',
    ],
  },
  { type: 'image-pair', labels: ['Detail image', 'Detail image'] },
  {
    type: 'text',
    heading: 'Tempor incididunt',
    paragraphs: [
      'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
    ],
  },
  { type: 'image', label: 'Closing image', ratio: '16 / 9' },
];

const defaultDetails = (year: string) => [
  { label: 'Year', value: year },
  { label: 'Role', value: 'Lorem ipsum' },
  { label: 'Contribution', value: 'Dolor · Sit · Amet' },
];

const placeholderProject = (n: number, title: string, hue: number, tags: string[]): Project => ({
  slug: `project-${n}`,
  title,
  year: '20XX',
  tags,
  hue,
  summary:
    'Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  details: defaultDetails('20XX'),
  sections: defaultSections,
});

/* LG.com navigation case study. A short teaser of the work, not the full
   breakdown. Copy is drawn from the GNB redesign deck. Image slots are
   still placeholders. */
const lgNavSections: Section[] = [
  {
    type: 'image',
    label: 'New LG.com navigation in use',
    ratio: '27 / 16', // a little shorter than 3 / 2, so less space above and below the clip
    video: '/work/lg-navigation/nav-hover.mp4',
    frame: '/work/lg-navigation/frame-bg.webp',
    mediaRatio: '1736 / 1060', // recording is 1736 x 1080; trims the link preview at the bottom
  },
  {
    type: 'text',
    heading: 'The problem',
    paragraphs: [
      "LG.com's navigation had become the hardest part of the site to scan. Four years of one-off additions from different teams, with nobody governing them, left a wall of links that was overwhelming to use, and people were giving up and switching to search.",
    ],
    /* Stats from the GNB deck (GA4, January 2025 to May 2026) */
    points: [
      {
        icon: 'cart',
        title: 'Key path to purchase',
        text: '45% of appliance purchasers use the navigation',
      },
      {
        icon: 'links',
        title: 'Link overload',
        text: '238 links, up from 80 in 2022, and 74 of them duplicates',
      },
      {
        icon: 'fold',
        title: 'Below the fold',
        text: '46% of Appliances links out of view',
      },
      {
        icon: 'target',
        title: 'Clicks concentrated',
        text: '60% of clicks go to 30 links',
      },
    ],
  },
  /* Drag slider between the old and new menu, right after the problem */
  {
    type: 'compare',
    before: '/work/lg-navigation/before.webp',
    after: '/work/lg-navigation/after.webp',
    ratio: '3 / 2',
  },
  {
    type: 'text',
    heading: 'The new navigation',
    paragraphs: [
      'Using behavioral analytics and FullStory insights, we rethought the hierarchy and cut extra levels and redundant links, so the structure matches how people shop.',
    ],
    points: [
      {
        icon: 'hover',
        title: 'Opens on hover',
        text: 'A simple hover on desktop',
      },
      {
        icon: 'grid',
        title: 'Grouped by type',
        text: 'Subcategories grouped by product, with images',
      },
      {
        icon: 'filter',
        title: 'Data-driven links',
        text: 'Curated links based on filter insights',
      },
      {
        icon: 'megaphone',
        title: 'Strategic initiatives',
        text: 'Marketing gets its own cards, apart from categories',
      },
    ],
  },
  {
    type: 'phones',
    background: '/work/lg-navigation/mobile-bg.webp',
    phones: [
      { src: '/work/lg-navigation/m-1.png', alt: 'Mobile header with the menu closed' },
      { src: '/work/lg-navigation/m-4.png', alt: 'Menu open at the top level' },
      { src: '/work/lg-navigation/m-2.png', alt: 'Appliances categories' },
      { src: '/work/lg-navigation/m-3.png', alt: 'Refrigerator types and shortcuts' },
    ],
  },
  {
    type: 'text',
    heading: 'Bringing it to mobile',
    paragraphs: [
      'On mobile, we kept the same framework as desktop but turned it into a progressive flow that goes one level at a time, rather than every link stacked on one long page.',
    ],
    points: [
      {
        icon: 'progressive',
        title: 'Progressive navigation',
        text: 'Guides users and reduces page length',
      },
      {
        icon: 'search',
        title: 'Exposed search bar',
        text: 'Search entered directly from the navigation',
      },
      {
        icon: 'user',
        title: 'Dedicated utility actions',
        text: 'Sign in / Support',
      },
    ],
  },
  /* Old mobile menu (every link on one long page) next to the new one */
  {
    type: 'phone-compare',
    background: '/work/lg-navigation/frame-bg.webp',
    frame: '/work/lg-navigation/phone-frame.png',
    before: { src: '/work/lg-navigation/m-old-menu.webp', alt: 'Old mobile menu, every appliance link on one long page' },
    after: [
      { src: '/work/lg-navigation/m-new-1.webp', alt: 'New mobile menu, appliance categories on one short list' },
      { src: '/work/lg-navigation/m-new-2.webp', alt: 'New mobile menu, refrigerator types grouped under clear headings' },
    ],
  },
  {
    type: 'stats',
    heading: 'Results',
    items: [
      { value: '10% → 3.4%', label: 'Sessions that searched after using the menu' },
      { value: '42.6% → 47%', label: 'Menu clicks that reach a product page' },
      { value: '+75%', label: 'Navigation interaction on desktop' },
    ],
    /* The numbers are in the row above, so this only adds what they don't say */
    paragraphs: [
      'Fewer people give up on the menu and fall back to search, and more of their clicks land on a product page. Mobile saw a 20% lift in navigation interaction.',
    ],
  },
];

/* LG.com mobile optimization case study. Combines the category page and
   product page work from mike-mendez.com into one short teaser. */
const lgMobileSections: Section[] = [
  /* The finished pages on four phones, left to right in shopping order:
     category filters, compare tray, product gallery, specs */
  {
    type: 'phones',
    background: '/work/lg-mobile/phones-bg.webp',
    frame: '/work/lg-navigation/phone-frame.png',
    phones: [
      { src: '/work/lg-mobile/m-filters.mp4', alt: 'Scrolling the new category page grid and opening the sticky filters' },
      { src: '/work/lg-mobile/m-compare.mp4', alt: 'Adding products to the compare tray while browsing' },
      { src: '/work/lg-mobile/m-gallery.mp4', alt: 'Product page gallery with image thumbnails' },
      { src: '/work/lg-mobile/m-specs.mp4', alt: 'Jumping to specifications from the sticky nav' },
    ],
  },
  {
    type: 'text',
    heading: 'The problem',
    paragraphs: [
      "Over half of LG.com's traffic was mobile, but the category and product pages were built for desktop. Everything shoppers needed to make a decision sat below the fold, and a lot of them didn't make it to the bottom of the page. Our surveys and heat maps showed where the pages were failing, and the engagement data backed it up.",
    ],
    points: [
      { icon: 'fold', title: 'Below the fold', text: 'Oversized spacing pushed key content out of view' },
      { icon: 'tap', title: 'Unclear actions', text: "Users weren't sure what was clickable" },
      { icon: 'scan', title: 'Hard to scan', text: 'No hierarchy, and a lot of content to get through' },
      { icon: 'filter', title: 'Filters out of reach', text: 'Hard to access while browsing products' },
      { icon: 'specs', title: 'Specs buried', text: 'Specifications were hard to find' },
    ],
  },

  /* ----- Category page: slider, overview, then product cards and filters and compare ----- */
  /* One slider across the three category page changes: product cards,
     compare tray, compare page */
  {
    type: 'phone-slider',
    background: '/work/lg-mobile/phones-bg.webp',
    frame: '/work/lg-navigation/phone-frame.png',
    phones: [
      { before: '/work/lg-mobile/cards-before.webp', after: '/work/lg-mobile/cards-after.webp', alt: 'category page product cards' },
      { before: '/work/lg-mobile/tray-before.webp', after: '/work/lg-mobile/tray-after.webp', alt: 'compare tray', afterAnchor: 'bottom' },
      { before: '/work/lg-mobile/compare-before.webp', after: '/work/lg-mobile/compare-after.webp', alt: 'compare page' },
    ],
  },
  {
    type: 'text',
    heading: 'The category page',
    paragraphs: [
      'The category page is where shoppers explore the lineup, but on mobile one product fit on screen at a time, and fewer than a third of shoppers (32%) reached the bottom of the grid.',
    ],
  },
  /* Product cards, before and after (also in the slider above) */
  {
    type: 'phones',
    background: '/work/lg-mobile/phones-bg.webp',
    frame: '/work/lg-navigation/phone-frame.png',
    phones: [
      { label: 'Before', src: '/work/lg-mobile/cards-before.webp', alt: 'Old category page, one large product card on screen' },
      { label: 'After', src: '/work/lg-mobile/cards-after.webp', alt: 'New category page, leaner cards with more on screen' },
    ],
  },
  {
    type: 'text',
    sub: true,
    heading: 'Leaner product cards',
    paragraphs: [
      'I removed extras like member pricing and rebate lines, and reworked the hierarchy so the product name and price stood out. Tightening the layout fit 2.5 product cards on screen, up from one.',
    ],
    stats: [
      { value: '13.5% → 33%', label: 'Product card engagement' },
      { value: '32% → 79%', label: 'Shoppers who reached the bottom of the grid' },
    ],
  },
  /* Sticky filters and the compare tray in use */
  {
    type: 'phones',
    background: '/work/lg-mobile/phones-bg.webp',
    frame: '/work/lg-navigation/phone-frame.png',
    phones: [
      { src: '/work/lg-mobile/m-filters.mp4', alt: 'Opening the sticky filter menu while scrolling the product grid' },
      { src: '/work/lg-mobile/m-compare.mp4', alt: 'Adding products to the compare tray while browsing' },
    ],
  },
  {
    type: 'text',
    sub: true,
    heading: 'Filters and compare',
    paragraphs: [
      'A sticky filter menu lets shoppers refine their search without losing their place. I stripped the compare tray down to the key elements and made it persistent, so it takes up 20% of the screen, down from 50%. On the compare page, side scrolling replaced the carousel, so all four columns are easy to view.',
    ],
    stats: [
      { value: '1.45% → 3%', label: 'Filtering usage' },
      { value: '0.09% → 0.23%', label: 'Compare engagement, on a feature most shoppers skip' },
    ],
  },

  /* ----- Product page: slider (top of page), overview, then services, breadcrumb and sticky nav, gallery and specs ----- */
  /* Before and after for the top of the product page, side by side.
     Additional services has its own before and after further down, next to
     its number. */
  {
    type: 'phones',
    background: '/work/lg-mobile/phones-bg.webp',
    frame: '/work/lg-navigation/phone-frame.png',
    phones: [
      { label: 'Before', src: '/work/lg-mobile/pdp-before.webp', alt: 'Old top of the product page' },
      { label: 'After', src: '/work/lg-mobile/pdp-after.webp', alt: 'New top of the product page, product name and large image up front' },
    ],
  },
  {
    type: 'text',
    heading: 'The product page',
    divider: true,
    paragraphs: [
      'Once shoppers pick a product, they need to confirm it and find the details that help them decide. On mobile, all of that sat below the fold.',
      'I led with the product name rather than the SKU and put a large product image front and center, so shoppers can tell they\'re in the right place.',
    ],
  },
  /* Additional services, before and after */
  {
    type: 'phones',
    background: '/work/lg-mobile/phones-bg.webp',
    frame: '/work/lg-navigation/phone-frame.png',
    phones: [
      { label: 'Before', src: '/work/lg-mobile/services-before.webp', alt: 'Old additional services, long explanations for each option' },
      { label: 'After', src: '/work/lg-mobile/services-after.webp', alt: 'New additional services, short prompts and compact options' },
    ],
  },
  {
    type: 'text',
    sub: true,
    heading: 'Additional services',
    paragraphs: [
      'The additional services section over-explained every option. I cut it back to short prompts like "What\'s included with installation?", a question a lot of shoppers have when weighing extra services.',
    ],
    stats: [{ value: '0.84% → 1.06%', label: 'Additional services engagement, a smaller lift since these are optional' }],
  },
  /* The shortened breadcrumb and the sticky nav, side by side */
  {
    type: 'framed-pair',
    ratio: '1176 / 496',
    items: [
      {
        image: '/work/lg-mobile/breadcrumb.gif',
        frame: '/work/lg-mobile/strip-bg-1.webp',
        label: 'Shortened breadcrumb opening back up to the full path',
        mediaRatio: '774 / 206',
      },
      {
        image: '/work/lg-mobile/sticky-nav.gif',
        frame: '/work/lg-mobile/strip-bg-2.webp',
        label: 'Sticky nav scrolling to more sections with its arrows',
        mediaRatio: '776 / 200',
      },
    ],
  },
  {
    type: 'text',
    sub: true,
    heading: 'Breadcrumb and sticky nav',
    paragraphs: [
      'To save space and keep things clean, I shortened the breadcrumb trail and added a sticky nav, so people can jump between sections and find what they need with less effort.',
    ],
    stats: [
      { value: '~6%', label: 'Of product page sessions engage with the sticky product nav' },
      { value: '~6 in 10', label: 'Sticky nav clicks go to Specs, so shoppers get to product details quicker' },
    ],
  },
  /* Gallery thumbnails and the sticky nav to specs, in use */
  {
    type: 'phones',
    background: '/work/lg-mobile/phones-bg.webp',
    frame: '/work/lg-navigation/phone-frame.png',
    phones: [
      { src: '/work/lg-mobile/m-gallery.mp4', alt: 'Product page gallery with image thumbnails' },
      { src: '/work/lg-mobile/m-specs.mp4', alt: 'Jumping to specifications from the sticky nav' },
    ],
  },
  {
    type: 'text',
    sub: true,
    heading: 'Gallery and specs',
    paragraphs: [
      'Image thumbnails nudge people toward the gallery to explore product features and benefits. Specs carry a lot of weight in the purchase decision, so the sticky nav jumps to them, and a reorganized layout makes them easier to scan without endless scrolling.',
    ],
    stats: [
      { value: '12.97% → 32.97%', label: 'Gallery engagement' },
      { value: '1.54% → 4.97%', label: 'Specifications engagement' },
    ],
  },
];

/* LG.com AI comparison summary case study. Copy is from the AI Comparison
   page on mike-mendez.com. The phone clips are new screen recordings. */
const lgAiSections: Section[] = [
  /* The summary on desktop, floating on the gray background */
  {
    type: 'image',
    label: 'AI Comparison Summary on the LG.com compare page, desktop',
    ratio: '3 / 2',
    image: '/work/lg-ai-compare/desktop.webp',
    frame: '/work/lg-ai-compare/bg.webp',
    mediaRatio: '2738 / 1814',
  },
  {
    type: 'text',
    heading: 'The problem',
    paragraphs: [
      'Comparing products on LG.com was overwhelming. The spec data was a lot to get through, and shoppers had a hard time finding what they needed to make a decision. When we dug into the data, it turned out most shoppers were looking for the same types of information when comparing products.',
    ],
  },
  /* The summary on mobile: scrolling down its rows, then swiping across
     the compared TVs */
  {
    type: 'phones',
    background: '/work/lg-ai-compare/bg.webp',
    frame: '/work/lg-navigation/phone-frame.png',
    phones: [
      { src: '/work/lg-ai-compare/m-summary.mp4', alt: 'Scrolling down the AI comparison summary on mobile' },
      { src: '/work/lg-ai-compare/m-swipe.mp4', alt: 'Swiping across the compared TVs on mobile' },
    ],
  },
  {
    type: 'text',
    heading: 'The solution',
    paragraphs: [
      "We weren't sure this would work, so we A/B tested it before committing, starting with the most compared products as a baseline. Working from the insights team's data, we figured out what should go into the AI-generated summary. AI did the heavy lifting from that point, translating spec-heavy information into clear, consumer-friendly comparisons. After a month of testing, the results were hard to ignore.",
    ],
    stats: [
      { value: '+11.56%', label: 'Add to cart, against the control' },
      { value: '+25.22%', label: 'Conversion, against the control' },
      { value: '+25.48%', label: 'Average order value, against the control' },
    ],
  },
  {
    type: 'text',
    heading: "What's in the summary",
    sub: true,
    paragraphs: [
      'The summary opens with a "Quick Pick", then breaks the comparison down into the categories shoppers look for most in a TV.',
      'Leadership bought in, and the feature is live at scale.',
    ],
    pointColumns: 3,
    points: [
      {
        icon: 'pick',
        title: 'Quick Pick',
        text: 'Finds the TV that matches your watching style, whether gaming, cinematic or high-end design',
      },
      { icon: 'picture', title: 'Picture quality', text: 'Compared side by side' },
      { icon: 'gaming', title: 'Gaming performance', text: 'Compared side by side' },
      { icon: 'audio', title: 'Audio experience', text: 'Compared side by side' },
      { icon: 'design', title: 'Design', text: 'Compared side by side' },
      { icon: 'shared', title: 'Shared features', text: 'What all the compared products have in common' },
    ],
  },
];

export const projects: Project[] = [
  {
    ...placeholderProject(1, 'LG.com Navigation', 232, ['Website', 'Mobile']),
    sections: lgNavSections,
    slug: 'lg-navigation',
    live: { href: 'https://www.lg.com/us/' }, // LG.com home page, where the navigation lives
    year: '2026',
    cardTitle: 'Making the site navigation easier to scan',
    homeClipStart: 1.2, // the Appliances menu is already open
    homeZoom: 1.15,
    summary: 'Redesigning LG.com navigation based on customer behavior data.',
    details: [
      { label: 'Role', value: 'Lead Product Designer' },
      { label: 'Team', value: '3 PMs, Engineering, Data analytics' },
      { label: 'Timeline', value: 'About 6 months' },
    ],
  },
  {
    ...placeholderProject(2, 'LG.com Mobile Optimization', 265, ['Mobile', 'Website']),
    sections: lgMobileSections,
    slug: 'lg-mobile',
    live: { href: 'https://www.lg.com/us/tvs/lg-oled77g6wua-oled-4k-tv' }, // example product page
    year: '2025',
    cardTitle: 'Redesigning category and product pages for mobile',
    homeClipStart: 9.6, // the filter menu is already open
    summary: "Rebuilding LG.com's category and product pages for mobile shoppers.",
    details: [
      { label: 'Role', value: 'Lead Product Designer' },
      { label: 'Team', value: 'PM, Engineering, Stakeholders' },
      { label: 'Timeline', value: 'About 6 months' },
    ],
  },
  {
    ...placeholderProject(3, 'LG.com AI Comparison', 28, ['AI', 'Website']),
    sections: lgAiSections,
    slug: 'lg-ai-compare',
    live: {
      href: 'https://www.lg.com/us/oled-evo-tvs', // example product category page
      note: 'compare a few items to trigger the feature',
    },
    year: '2026',
    cardTitle: 'Using AI to simplify product comparisons',
    homeCrop: { width: 150, left: 8, top: -22 }, // zoomed in on the AI summary and Quick Pick
    summary: 'Using AI to turn spec-heavy product comparisons on LG.com into clear, consumer-friendly summaries.',
    details: [
      { label: 'Role', value: 'Lead Product Designer' },
      { label: 'Team', value: 'PM, Engineering, Stakeholders' },
      { label: 'Timeline', value: 'About 3 months' },
    ],
  },
  placeholderProject(4, 'Adipiscing Elit', 150, ['Website']),
  placeholderProject(5, 'Sed Do Eiusmod', 0, ['Website']),
  placeholderProject(6, 'Tempor Incididunt', 330, ['Mobile', 'Email']),
];
