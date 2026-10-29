export interface ServiceOffering {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  description: string;
  features: string[];
  image: string;
  imageAlt: string;
}

export const VERIFIED_SERVICES: ServiceOffering[] = [
  {
    id: 'wedding-photography',
    title: 'Wedding Photography',
    subtitle: 'Ceremonial Storytelling & Sacred Rituals',
    tagline: 'Documenting the soul of your vows with cinematic gravitas and unscripted intimacy.',
    description:
      'From the morning preparations to the solemn moments of the pheras and joyous vidaai, our wedding coverage honours the grandeur, devotion, and tender family bonds of your celebration with quiet, unobtrusive artistic vision.',
    features: [
      'Comprehensive multi-ceremony coverage (Mandap, Vows, Reception)',
      'Dual perspective: grand architectural rituals & quiet emotional glances',
      'Artistic color grading honoring natural skin tones & ceremonial silks',
      'High-resolution archival photography delivered with editorial care',
    ],
    image: '/images/smileart/hero_wedding_marigold.jpg',
    imageAlt: 'Smile Art Photography wedding couple beneath marigold garlands',
  },
  {
    id: 'pre-wedding-cinematics',
    title: 'Pre-Wedding Photography',
    subtitle: 'Romantic Escapes & Natural Landscapes',
    tagline: 'Unscripted, relaxed romantic portraits captured across golden hours and natural horizons.',
    description:
      'A dedicated session crafted around your dynamic as a couple. Whether situated amidst tranquil countryside hilltops, historical stone corridors, or sunset meadows, we capture the effortless chemistry that makes your journey unique.',
    features: [
      'Scenic destination & open-air countryside locations',
      'Thoughtful creative styling and natural lighting direction',
      'Candid storytelling that allows your authentic personalities to lead',
      'Editorial signature edits ideal for invitations and heirloom keepsakes',
    ],
    image: '/images/smileart/prewedding_sunset_hilltop.jpg',
    imageAlt: 'Pre-wedding couple enjoying a hilltop sunset picnic',
  },
  {
    id: 'bridal-couple-portraits',
    title: 'Bridal & Couple Portraits',
    subtitle: 'Fine Art & High-Fashion Editorial',
    tagline: 'Timeless heirloom portraits celebrating heritage, royal silhouettes, and radiant poise.',
    description:
      'Dedicated solo bridal studies and royal couple compositions that treat your wedding attire, jewelry, and expression as works of fine art. Meticulously sculpted with directional light, dramatic shadows, and timeless elegance.',
    features: [
      'Focused bridal styling & intricate jewelry detail framing',
      'Dramatic chiaroscuro studio lighting & evocative shadow play',
      'Preservation of genuine facial expressions and authentic beauty',
      'Signature editorial styling inspired by contemporary fine-art monographs',
    ],
    image: '/images/smileart/bridal_editorial_veil.jpg',
    imageAlt: 'Editorial bridal portrait of Bride Komal beneath crimson veil',
  },
  {
    id: 'celebrations-haldi-mehendi',
    title: 'Celebrations & Haldi',
    subtitle: 'Vibrant Rituals, Color & Pure Joy',
    tagline: 'Preserving the laughter, yellow hues, and lively spirit of your pre-wedding festivities.',
    description:
      'Haldi, Mehendi, and Sangeet celebrations pulse with kinetic energy, heartfelt laughter, and generational joy. We dive right into the celebration to capture every burst of marigold petals, splash of turmeric, and dance circle.',
    features: [
      'High-speed candid capture of uninhibited family moments',
      'Lush outdoor daylight composition capturing authentic saturation',
      'Focus on floral adornments, mehendi detail, and traditional jewelry',
      'Energetic, joy-filled visual narrative of your closest circle',
    ],
    image: '/images/smileart/haldi_sunshine_gaytri.jpg',
    imageAlt: 'Haldi celebration portrait of bride in yellow lehenga',
  },
  {
    id: 'cinematic-wedding-films',
    title: 'Cinematic Wedding Films',
    subtitle: 'Motion Storytelling & Highlight Reels',
    tagline: 'Motion pictures scored with emotion, dialogue, and cinematic rhythm.',
    description:
      'Under Harshal Mahajan’s creative direction as filmmaker and editor, we weave the music, vows, laughter, and ambient sounds of your day into a cinematic highlight reel that lets you relive every heartbeat for decades to come.',
    features: [
      'Cinema-grade prime lens cinematography & stabilized camera movement',
      'Authentic audio capture of vows, laughter, and family blessings',
      'Carefully graded color palettes tailored to your wedding aesthetic',
      'Short cinematic teaser and feature-length motion celebration film',
    ],
    image: '/images/smileart/wedding_together_embrace.jpg',
    imageAlt: 'Cinematic wedding night embrace',
  },
  {
    id: 'creative-invitation-design',
    title: 'Bespoke Invitation Art & Graphics',
    subtitle: 'Stationery, Digital Invites & Brand Identity',
    tagline: 'Custom invitation artwork and digital design rooted in cultural tradition and modern typography.',
    description:
      'As a multi-disciplinary creative studio, Smile Art Photography also designs bespoke digital and printed wedding invitation cards, social announcement graphics, and personalized stationery tailored to cultural traditions.',
    features: [
      'Custom bilingual typography (Marathi, Hindi, English)',
      'Harmonious integration of your engagement or pre-wedding portraits',
      'Digital video invites, WhatsApp save-the-dates, and print-ready files',
      'Cohesive visual themes matching your wedding decor & palette',
    ],
    image: '/images/smileart/wedding_invitation_design.jpg',
    imageAlt: 'Smile Art Photography custom wedding invitation card design',
  },
];

