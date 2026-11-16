/**
 * Every photograph on the site. Files live in /public/media and are web-sized
 * copies of the originals kept in /asset-library (not deployed).
 * `focus` is where the face or subject sits, so crops never cut her off.
 */
type PhotoMeta = { src: string; width: number; height: number; alt: string; focus: string };

const p = (file: string, width: number, height: number, alt: string, focus = "50% 50%"): PhotoMeta => ({
  src: `/media/${file}`,
  width,
  height,
  alt,
  focus,
});

export const photos = {
  monstera: p("portrait-monstera-hat.jpg", 3200, 2133, "Biet Simkin in a wide-brimmed hat and white robe, holding a monstera leaf, one hand in a mudra", "70% 34%"),
  bwLace: p("portrait-bw-lace.jpg", 1885, 2400, "Black-and-white portrait of Biet Simkin in a white lace top", "50% 24%"),
  eyesClosed: p("portrait-eyes-closed.jpg", 1080, 1080, "Biet Simkin with eyes closed and a hand on her heart", "50% 22%"),
  military: p("portrait-military-jacket.jpg", 996, 1328, "Biet Simkin laughing in a navy military-style jacket", "60% 16%"),
  profile: p("portrait-profile-monstera.jpg", 477, 716, "Biet Simkin in profile behind monstera leaves", "50% 30%"),
  redBackdrop: p("portrait-red-backdrop.jpg", 1000, 1334, "Biet Simkin in a wide-brimmed hat and leather jacket against a red backdrop", "50% 30%"),
  airPlant: p("portrait-air-plant.jpg", 1074, 716, "Biet Simkin holding an air plant, hands raised", "58% 30%"),
  armchair: p("life-armchair.jpg", 2600, 1733, "Biet Simkin seated in an armchair with a hand on her heart, candles behind her", "34% 30%"),
  armsOpen: p("life-arms-open.jpg", 2600, 1733, "Biet Simkin outdoors with her arms open wide, hills behind her", "56% 40%"),
  desertDusk: p("life-desert-dusk.jpg", 2560, 1440, "Biet Simkin crouching on a boulder beside a desert road at dusk", "52% 48%"),
  leatherSofa: p("life-leather-sofa.jpg", 682, 1024, "Biet Simkin seated cross-legged on a leather sofa among plants", "55% 22%"),
  yogaMat: p("life-yoga-mat.jpg", 2600, 1733, "Biet Simkin kneeling on a mat on a wooden deck, hills behind her", "60% 40%"),
  knitSweater: p("life-knit-sweater.jpg", 768, 1024, "Biet Simkin leaning against a concrete wall in a knit sweater", "62% 26%"),
  marbleWall: p("life-marble-wall.jpg", 1733, 2600, "Biet Simkin seated on a bench against a marble wall", "50% 62%"),
  floorPlants: p("life-floor-plants.jpg", 2600, 1845, "Biet Simkin seated on a white studio floor among potted plants", "55% 30%"),
  cube: p("life-cube.jpg", 3200, 2133, "Biet Simkin seated on a cube in a cream studio, wearing a hat", "50% 45%"),
  silverDress: p("life-silver-dress.jpg", 500, 749, "Biet Simkin in an embellished dress, hair in motion", "50% 28%"),
  flowers: p("life-flowers-bw.jpg", 497, 612, "Black-and-white photograph, a face hidden behind dried flowers", "50% 50%"),
  sunset: p("life-sunset-silhouette.webp", 1280, 720, "Silhouette with arms open at sunset over water", "55% 45%"),
  moma: p("event-moma.jpg", 1994, 1308, "A Guided by Biet session filling the atrium at MoMA", "50% 60%"),
  onStage: p("event-on-stage.jpg", 2048, 2012, "Biet Simkin on stage mid-gesture in a hat and leather jacket", "62% 42%"),
  planetarium: p("event-planetarium.jpg", 720, 1080, "Biet Simkin leading an audience under a planetarium dome", "60% 62%"),
  audience: p("event-audience.jpg", 1994, 1330, "A seated audience at one of Biet Simkin’s talks", "50% 55%"),
  armsRaised: p("event-arms-raised.jpg", 2048, 1152, "Biet Simkin on stage, the audience with their arms raised", "32% 50%"),
  whiteDress: p("event-white-dress.jpg", 2374, 1582, "Biet Simkin on an outdoor stage in a white dress, facing a crowd under string lights", "48% 55%"),
  tent: p("event-tent.jpg", 890, 1464, "A large crowd under a tent with their arms raised", "50% 62%"),
  album: p("album-cover.jpg", 1400, 1400, "Cover of Biet’s album", "50% 40%"),
  deck: p("deck-cover.jpg", 1098, 1500, "Breathwork: Guided by Biet, 30 breathing practices to enhance your everyday wellbeing"),
  book: p("book-cover.webp", 1400, 1120, "Don’t Just Sit There! by Biet Simkin, book cover"),
  kidsBumblebee: p("kids-bumblebee.jpg", 500, 500, "Illustration of a bumblebee"),
  kidsUnicorn: p("kids-unicorn.jpg", 500, 500, "Illustration of a unicorn"),
  kidsEyeGazing: p("kids-eye-gazing.jpg", 500, 500, "Illustration of two children facing each other"),
} as const;

export type PhotoName = keyof typeof photos;

/** Logo files in /public/media/logos, black on transparent. `h` is a visual-weight height in rem. */
export const logos: Record<string, { src: string; width: number; height: number; h: number }> = {
  Forbes: { src: "forbes", width: 362, height: 98, h: 1.75 },
  ELLE: { src: "elle", width: 494, height: 199, h: 1.9 },
  "Harper’s Bazaar": { src: "harpers-bazaar", width: 900, height: 220, h: 1.9 },
  TIME: { src: "time", width: 900, height: 275, h: 1.75 },
  "The Times": { src: "the-times", width: 300, height: 35, h: 1.05 },
  Observer: { src: "observer", width: 356, height: 50, h: 1.05 },
  DuJour: { src: "dujour", width: 568, height: 171, h: 2.2 },
  Surface: { src: "surface", width: 400, height: 59, h: 1.05 },
  "Sakara Life": { src: "sakara", width: 900, height: 117, h: 0.95 },
  MoMA: { src: "moma", width: 900, height: 227, h: 1.6 },
  "Urban Outfitters": { src: "urban-outfitters", width: 386, height: 166, h: 2.5 },
  "Travel + Leisure": { src: "travel-leisure", width: 478, height: 104, h: 1.5 },
  Lula: { src: "lula", width: 259, height: 104, h: 2 },
  "Stone Fox Bride": { src: "stone-fox-bride", width: 487, height: 107, h: 1.9 },
  StyleLikeU: { src: "stylelikeu", width: 271, height: 142, h: 2.9 },
  "Page Six": { src: "page-six", width: 459, height: 323, h: 3.4 },
  "Inc.": { src: "inc", width: 265, height: 92, h: 1.75 },
  Refinery29: { src: "refinery29", width: 632, height: 124, h: 1.5 },
  Glamour: { src: "glamour", width: 561, height: 96, h: 1.3 },
  Uproxx: { src: "uproxx", width: 500, height: 101, h: 1.35 },
  "The Tonight Show": { src: "tonight-show", width: 422, height: 419, h: 5 },
  "1 Hotels": { src: "1-hotels", width: 646, height: 1139, h: 4.6 },
  "Soho House": { src: "soho-house", width: 227, height: 141, h: 3.6 },
  "The William Vale": { src: "the-william-vale", width: 255, height: 85, h: 2.6 },
  SoulCycle: { src: "soulcycle", width: 888, height: 129, h: 1.15 },
  lululemon: { src: "lululemon", width: 900, height: 175, h: 1.7 },
  sweetgreen: { src: "sweetgreen", width: 900, height: 134, h: 1.3 },
};
