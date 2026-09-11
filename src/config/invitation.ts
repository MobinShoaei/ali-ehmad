import { getAssetUrl } from '../utils/assets';
import type { InvitationConfig } from '../types/invitation';

export const invitationConfig: InvitationConfig = {
  babyName: "علی احماد",
  heroTitle: "به نام خدای علی",
  heroSubtitle: " علی احماد عزیزمان🩵",
  heroHintText: "برای دیدن عکس، صفحه را لمس و پاک کنید",

  countdownTitle: "لحظه‌شماری برای دیدن روی ماه شما",
  countdownFinishedMessage: "جشن آغاز شده است! منتظر دیدارتان هستیم ✨",
  countdownTargetDate: "2026-09-17T19:00:00", // تاریخ قابل تنظیم برای countdown (مثلاً ۱۵ اکتبر ۲۰۲۶ ساعت ۱۸:۰۰)

  persianDate: "پنج‌شنبه ۲۶ شهریور ۱۴۰۵",
  gregorianDate: "۱۵ اکتبر ۲۰۲۶",
  eventTime: "از ساعت ۱۹:۰۰ الی ۲۲:۰۰",
  receptionText: "به صرف شام و شیرینی",

  venueName: "همدان، میدان قائم، بلوار کولاب، باغ تالار علوم‌پزشکی",
  addressTitle: "منتظر دیدار شما هستیم",
  addressSubTitle: "نشانی ",
  address: "همدان، میدان قائم،بلوار کولاب، باغ تالار علوم‌پزشکی",

  googleMapsUrl: "https://www.google.com/maps/place/The+Garden+Restaurant+Medical+University/@34.7877921,48.4756584,17z/data=!4m6!3m5!1s0x3ff1eb5627071fa3:0x4241d1baa0097b77!8m2!3d34.7877921!4d48.4785944!16s%2Fg%2F12m9mj0py?entry=ttu&g_ep=EgoyMDI2MDkwNi4wIKXMDSoASAFQAw%3D%3D",
  baladUrl: "https://balad.ir/p/46obA6juqtIaeV",
  neshanUrl: "https://nshn.ir/cc_bsI_dY5D7IW",

  closingMessage: "در صورت عدم افتخار میزبانی، لطفا اطلاع دهید.",
  closingSubtext: "با تشکر فراوان",

  heroImage: getAssetUrl("/images/main.jpg"),

  galleryImages: [
    {
      id: 1,
      url: getAssetUrl("/images/2.jpg"),
      alt: "عکس نوزاد علی احماد 1",
      caption: "روی ماه فرشته کوچولو"
    },
    {
      id: 2,
      url: getAssetUrl("/images/1.jpg"),
      alt: "عکس نوزاد علی احماد 2",
      caption: "لبخند شیرین"
    },
    {
      id: 3,
      url: getAssetUrl("/images/3.jpg"),
      alt: "عکس نوزاد علی احماد 3",
      caption: "خواب ناز"
    },

  ]
};
