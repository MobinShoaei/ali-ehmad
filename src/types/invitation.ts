export interface GalleryItem {
  id: number;
  url: string;
  caption?: string;
  alt: string;
}

export interface InvitationConfig {
  babyName: string;
  heroTitle: string;
  heroSubtitle: string;
  heroHintText: string;
  countdownTitle: string;
  countdownFinishedMessage: string;
  countdownTargetDate: string; // ISO date format e.g. "2026-10-15T18:00:00"
  persianDate: string;
  gregorianDate: string;
  eventTime: string;
  receptionText: string;
  venueName: string;
  addressTitle: string;
  addressSubTitle: string;
  address: string;
  googleMapsUrl: string;
  baladUrl: string;
  neshanUrl: string;
  closingMessage: string;
  closingSubtext: string;
  heroImage: string;
  galleryImages: GalleryItem[];
}
