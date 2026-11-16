/**
 * Site-wide facts and links. Everything here was carried over from the
 * previous bietsimkin.com so nothing the client relies on is lost.
 */

export const site = {
  name: "Biet Simkin",
  brand: "Guided by Biet",
  url: "https://www.bietsimkin.com",
  description:
    "Biet Simkin is a spiritual teacher, best-selling author and artist, called the “David Bowie of Meditation.” Breathwork, meditation, The Source and private work.",
  email: "biet.name@gmail.com",
  instagram: {
    house: { handle: "@houseofbiet", url: "https://www.instagram.com/houseofbiet/" },
    guided: { handle: "@guidedbybiet", url: "https://www.instagram.com/guidedbybiet/" },
  },
  kajabi: {
    /** The existing “Join my newsletter” form. Subscribers keep landing in the same list. */
    newsletterFormId: "2148833253",
    host: "https://guided-by-biet.mykajabi.com",
    membershipCheckout: "https://guided-by-biet.mykajabi.com/offers/HUsjKYuw/checkout",
    membershipOffer: "https://guided-by-biet.mykajabi.com/offers/HUsjKYuw",
    sourceSignup: "https://guided-by-biet.mykajabi.com/offers/PYUPhmVr/checkout",
    innerCirclePlan: "https://guided-by-biet.mykajabi.com/offers/2i4NckAF",
    innerCircleFull: "https://guided-by-biet.mykajabi.com/offers/vntDCANf",
  },
} as const;

export type NavItem = { href: string; label: string; note?: string };

/** Shown in the header bar on wide screens. */
export const primaryNav: NavItem[] = [
  { href: "/about", label: "About" },
  { href: "/work-with-biet", label: "Work with Biet" },
  { href: "/the-source", label: "The Source" },
  { href: "/membership", label: "Membership" },
  { href: "/press", label: "Press" },
];

/** The full index, shown in the menu and the footer. */
export const fullNav: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About", note: "Her story, in her words and others’" },
  { href: "/work-with-biet", label: "Work with Biet", note: "Private teaching, hospitality, experiences" },
  { href: "/the-source", label: "The Source", note: "The weekly circle" },
  { href: "/membership", label: "Membership", note: "The daily practice, $111 a month" },
  { href: "/speaking", label: "Speaking", note: "Talks and public meditations" },
  { href: "/press", label: "Press", note: "Vogue, Forbes, ELLE, TIME" },
  { href: "/music", label: "Meditation & music", note: "The album and free meditations" },
  { href: "/shop", label: "Shop", note: "The book and the breathwork deck" },
  { href: "/events", label: "Events" },
  { href: "/courses", label: "Courses" },
  { href: "/newsletter", label: "Newsletter" },
];

export type Voice = { name: string; role?: string; quote: string };

/** Testimonials from the About page. */
export const voices: Voice[] = [
  {
    name: "Sophia Bush",
    role: "Actress, activist",
    quote:
      "Biet’s view on life is so thought-provoking. Her work as a Spiritual Teacher is vibrant and real, you leave working with her floating.",
  },
  {
    name: "Marianne Williamson",
    role: "New York Times bestselling author",
    quote:
      "Biet Simkin combines a fabulously modern sensibility with an illumined understanding of eternal wisdom. I hope many will both sit and walk with her. She is shining a very bright light on who we are and where we might go.",
  },
  {
    name: "Stacy London",
    role: "Editor, activist, stylist, and former co-host of What Not to Wear",
    quote:
      "What I love about Biet is that she fuses 30+ years of study of ancient spiritual wisdom with a youthful, easy to get rock and roll voice of a modern leader. Reading Biet’s work and working with her has been one of the most transformational experiences for me. She is the David Bowie of spiritual teachers.",
  },
  {
    name: "Sophie Chiche",
    role: "Founder of Shape House",
    quote:
      "Not all time is created equal. Certainly the experience I had working with Biet changed my life. I will never be the same.",
  },
  {
    name: "Miki Agrawal",
    role: "Co-founder of THINX, TUSHY, Wild, and author of Do Cool Shit and Disrupt-Her",
    quote:
      "Biet is as unique as they come. She is equal parts an unorthodox spiritual teacher, a rebellious meditator and a stand-up comic all in one adorable, eccentric, lovely package. Don’t Just Sit There will get you excited to go beyond where you think you can go. I’m buying many copies and slingin’ them to all of my friends.",
  },
  {
    name: "Benmont Tench",
    role: "Founding member, Tom Petty and The Heartbreakers",
    quote:
      "A meditation guide and spiritual teacher of great warmth, wit, and perception. Biet Simkin goes deep; each session with her leaves the inner & outer worlds in ever greater harmony. A blessing in my life.",
  },
  {
    name: "Radha Agrawal",
    role: "Founder of Daybreaker and co-founder of Thinx",
    quote:
      "Biet Simkin’s book Don’t Just Sit There is a necessary rally cry for modern meditators and shares principles that will not only help your mindfulness practice but will up-level your life in extraordinary ways. Her rebellious approach to mindfulness is a breath of fresh air and finally unlocks the true benefits of meditation. A must read.",
  },
  {
    name: "Leslye Headland",
    role: "Writer and director, Bachelorette, Sleeping with Other People",
    quote:
      "Working with Biet not only improved and enriched my spiritual life, she guided me out of a prison I had spent years creating for myself. Without her I wouldn’t be the artist I was always meant to be.",
  },
  {
    name: "Guru Jagat",
    quote:
      "Biet is a deep spiritual practitioner on a rock n’ roll quest for consciousness. Her life and work is a real time example of how to integrate all the parts of yourself into the unique essence of true beingness.",
  },
  {
    name: "Light Watkins",
    role: "Founder of The Shine Movement",
    quote:
      "There are your spirited meditation teachers, and then there’s Biet, the rare master—with beauty, charisma, and grace to boot. Part Shaman, part artist, Biet is truly her own brand of guru. A Biet experience is never just about meditation, or fluff. It’s about helping each practitioner connect to their most authentic Self and leave feeling inspired by life.",
  },
  {
    name: "Ruby Warrington",
    role: "Founder of The Numinous",
    quote:
      "Biet Simkin is a true artist, bringing a layer of mesmeric beauty to her chosen medium—meditation. If we all know by now that meditation is essential for our mental, emotional, and spiritual health, then Biet reminds us that it is also our pathway to the sublime ecstasy of being human in an increasingly techno centric world. She also happens to be a master story-teller, and the insight that comes from having lived a richly textured life is evident in all she does.",
  },
  {
    name: "Shaman Durek",
    quote:
      "Biet is a force of nature, a divine vocal artist and spirit guide who touches into the deep wounds of humanity to call out the light to expand beyond the limitations of fear. Helping people witness and see themselves within each other and humanity as a whole.",
  },
  {
    name: "Elena Brower",
    role: "Author, Art of Attention and Practice You",
    quote:
      "Intelligent, brazen, brave and present, Biet is a source and a force in the world of meditation. I’m proud to walk with her as her colleague and friend.",
  },
  {
    name: "Paul Sado",
    role: "Writer and director, The Cobbler, Talent for Trouble",
    quote:
      "Biet is an essential source of guidance and support for me. Without her wit, perspective, and searching heart I don’t know where I’d be. And I don’t wanna know.",
  },
];

/** The short testimonials used on The Source and the membership pages. */
export const shortVoices: Record<string, Voice> = {
  williamson: {
    name: "Marianne Williamson",
    role: "Spiritual teacher, presidential candidate",
    quote: "Biet has a fabulously modern sensibility and an illumined understanding of eternal wisdom.",
  },
  bush: {
    name: "Sophia Bush",
    role: "Actress, activist",
    quote: "Biet’s work as a spiritual teacher is vibrant and real. You leave working with her floating.",
  },
  brand: {
    name: "Russell Brand",
    role: "Actor, comedian, spiritual guide",
    quote:
      "Biet is a strong and enchanting teacher. The only other methods I know to attain the states she induces through her work are illegal. She is a wonder.",
  },
  hemingway: {
    name: "Mariel Hemingway",
    role: "Actress, author, mental health advocate",
    quote: "Biet is the real deal spiritual teacher. Her work cracks you open and changes something important forever.",
  },
  middleton: {
    name: "Briana Middleton",
    role: "Actress, singer",
    quote:
      "Biet is my person. I think when you know you just know. She takes me by the hand and pulls me out of my bullshit and brings me into enlightenment. Every single time! She has that gift.",
  },
  chamberlin: {
    name: "Whitney Kent Chamberlin",
    role: "Cultural engineer",
    quote:
      "After 27 years of meditation, Biet was able to take this old dog and make him feel like he was discovering meditation for the first time.",
  },
  agrawal: {
    name: "Miki Agrawal",
    role: "Founder, THINX and TUSHY",
    quote:
      "Biet Simkin is a dream spiritual teacher. She helped me play a spiritual game that has brought me to a new joy state in my life. She is worth it.",
  },
  bond: {
    name: "Ebenezer Bond",
    role: "Founder, Studio Listo",
    quote: "Biet’s guidance has profoundly impacted my spirituality and my relationships.",
  },
  twena: {
    name: "Satya Twena",
    role: "Fashion designer, hat magi",
    quote: "Working with Biet is like working with a magical key that opens up portals!",
  },
  martin: {
    name: "Shantell Martin",
    role: "Artist, philosopher",
    quote:
      "As an artist, I gravitate towards Biet’s work as a spiritual teacher, because her work is like art in a lot of ways. She is a master at her craft.",
  },
  stewart: {
    name: "John Clarence Stewart",
    role: "Actor",
    quote: "Working with Biet changes the way you see the world. She is a magician.",
  },
  clarke: {
    name: "Tina Marie Clarke",
    role: "Artist, author, model",
    quote:
      "The relaxation kicks in the moment Biet starts to speak. You fall into a trance of exploring the deeper sides that we often run from!",
  },
};

export type PressItem = { outlet: string; title: string; url: string };

export const press: PressItem[] = [
  {
    outlet: "Forbes",
    title: "How Losing Her Family And Battling Drug Addiction Led To Triumph For This Meditation Guru",
    url: "https://www.forbes.com/sites/bogardandhoffman/2017/06/07/how-losing-her-family-and-battling-drug-addiction-led-to-triumph-for-this-meditation-guru/#b298bd4106ad",
  },
  {
    outlet: "ELLE",
    title: "Why I Finally Decided to Break Up With Wine",
    url: "https://www.elle.com/beauty/health-fitness/a12119562/goodby-to-all-that-quitting-drinking-october-2017/",
  },
  {
    outlet: "Harper’s Bazaar",
    title: "Going Places With TUMI",
    url: "https://shop.harpersbazaar.com/the-edit/going-places-with-tumi.html",
  },
  {
    outlet: "TIME",
    title: "‘Mindful Drinking’ Is the Latest Health Craze. Here’s What It Is.",
    url: "http://time.com/5064543/mindful-drinking-dry-january/",
  },
  {
    outlet: "The Times",
    title: "How to Network Like a Billionaire",
    url: "https://www.thetimes.co.uk/magazine/style/how-to-network-like-a-billionaire-tsp0ghx00",
  },
  {
    outlet: "Observer",
    title: "Inside New York’s ‘Sexiest’ Meditation Class",
    url: "https://observer.com/2015/06/inside-new-yorks-sexiest-meditation-class/",
  },
  {
    outlet: "DuJour",
    title: "Love Talk With Biet Simkin",
    url: "http://dujour.com/lifestyle/biet-simkin-meditation-teacher/",
  },
  {
    outlet: "Surface",
    title: "Surface x Leica Photo Studio at Summit L.A. 2017",
    url: "https://www.surfacemag.com/articles/surface-leica-photo-studio-summit-series/",
  },
  {
    outlet: "Sakara Life",
    title: "Biet Simkin: Meditation Guru, Spiritual Teacher, Artist",
    url: "https://www.sakara.com/blogs/mag/biet-simkin-meditation-guru",
  },
  {
    outlet: "MoMA",
    title: "Biet Simkin at MoMA",
    url: "https://sandysoohoostudio.pixieset.com/bietatthemoma/",
  },
  {
    outlet: "Urban Outfitters",
    title: "Without Walls: Biet Simkin",
    url: "https://blog.urbanoutfitters.com/blog/without_wall_biet_simkin",
  },
  {
    outlet: "Travel + Leisure",
    title: "The Newest Travel Trend Involves Cryotherapy and IV Infusions",
    url: "https://www.travelandleisure.com/hotels-resorts/wellness-trend-hotel-experience",
  },
  {
    outlet: "Lula",
    title: "Higher Ground: Lula Feature",
    url: "http://f.cl.ly/items/1z0w2Y2d2S0t2R3z1M2v/lula-biet.pdf",
  },
  {
    outlet: "Stone Fox Bride",
    title: "Fox of The Week: Biet Simkin",
    url: "https://stonefoxbride.com/blogs/fox-of-the-week/84009283-biet-simkin",
  },
  {
    outlet: "StyleLikeU",
    title: "Hitting Rock Bottom Then Hitting Upon Her Highest Self",
    url: "https://stylelikeu.com/the-whats-underneath-project-2/biet-simkin/",
  },
  {
    outlet: "Page Six",
    title: "“Spiritual teacher prefers reaching nirvana with shopping and sex”",
    url: "https://pagesix.com/2019/07/29/spiritual-teacher-prefers-reaching-nirvana-with-shopping-and-sex/",
  },
  {
    outlet: "Inc.",
    title: "These 5 Books Will Help Put You in an Innovative Mindset",
    url: "https://www.inc.com/cathy-huyghe/these-5-books-will-help-put-you-in-an-innovative-mindset.html",
  },
  {
    outlet: "Refinery29",
    title: "Biet Simkin Wants To Help You Find Your Bliss",
    url: "https://www.refinery29.com/en-us/biet-simkin-meditation-book",
  },
  {
    outlet: "Glamour",
    title: "“I find that doing deep breathing and breath retention really helps me fall asleep.”",
    url: "https://www.glamour.com/story/how-to-fall-asleep-faster-according-to-powerful-women",
  },
  {
    outlet: "Uproxx",
    title: "Hollywood’s Favorite Meditation Guru, Biet Simkin, Explains Why You Need to Slow Down and Breathe",
    url: "https://uproxx.com/life/biet-simkin-meditate-interview/",
  },
];

/** Names set as a masthead on the home page. */
export const featuredIn = ["Vogue", "Forbes", "ELLE", "TIME", "Harper’s Bazaar", "The Times", "Glamour", "Travel + Leisure"];
