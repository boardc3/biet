import fs from "node:fs";
import path from "node:path";

/**
 * Photography is optional by design. Drop a file with one of these names
 * into /public/media and the matching slot on the site fills itself in at
 * the next deploy. See /public/media/README.md for what each slot is.
 */
export const mediaSlots = {
  "home-portrait": "Portrait for the home page, set inside the light aperture. Tall crop.",
  "about-portrait": "Main portrait on About. Tall crop.",
  "about-second": "Second image on About, beside the story. Any crop.",
  "work-portrait": "Image on Work with Biet. Tall crop.",
  "speaking-stage": "Biet on stage or leading a room. Wide crop.",
  "source-portrait": "Portrait on The Source. Tall crop.",
  "source-circle": "The circle or a gathering, on The Source. Wide crop.",
  "membership-body": "Membership, The Body chamber. Tall crop.",
  "membership-state": "Membership, The State chamber. Tall crop.",
  "membership-observer": "Membership, The Observer chamber. Tall crop.",
  "membership-installation": "Membership, The Installation chamber. Tall crop.",
  "library-portrait": "Portrait on the Breathwork Library page. Tall crop.",
  "book-cover": "Cover of Don’t Just Sit There!",
  "deck-cover": "Box of the Breathwork: Guided by Biet card deck.",
  "album-cover": "Cover of the new album. Square.",
  "lunar-cover": "Image for The Lunar. Tall or square.",
  "newsletter-portrait": "Image beside the newsletter invitation. Tall crop.",
} as const;

export type MediaSlot = keyof typeof mediaSlots;

const exts = ["avif", "webp", "jpg", "jpeg", "png"];
const dir = path.join(process.cwd(), "public", "media");

/** Returns the public path for a slot if a file has been supplied, otherwise null. */
export function media(slot: MediaSlot): string | null {
  for (const ext of exts) {
    if (fs.existsSync(path.join(dir, `${slot}.${ext}`))) return `/media/${slot}.${ext}`;
  }
  return null;
}
