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

  googleMapsUrl: "https://maps.app.goo.gl/bxQxzpgMp65khz1A8",
  baladUrl: "https://balad.ir/p/46obA6juqtIaeV",
  neshanUrl: "https://nshn.ir/cc_bsI_dY5D7IW",

  closingMessage: "در صورت عدم افتخار میزبانی، لطفا اطلاع دهید.",
  closingSubtext: "با تشکر فراوان",

  heroImage: getAssetUrl("/images/hero.jpg"),

  galleryImages: [
    {
      id: 1,
      url: getAssetUrl("/images/hero.jpg"),
      alt: "عکس نوزاد علی احماد 1",
      caption: "روی ماه فرشته کوچولو"
    },
    {
      id: 2,
      url: getAssetUrl("/images/gallery-1.jpg"),
      alt: "عکس نوزاد علی احماد 2",
      caption: "لبخند شیرین"
    },
    {
      id: 3,
      url: getAssetUrl("/images/gallery-2.jpg"),
      alt: "عکس نوزاد علی احماد 3",
      caption: "خواب ناز"
    },
    {
      id: 4,
      url: getAssetUrl("/images/gallery-3.jpg"),
      alt: "عکس نوزاد علی احماد 4",
      caption: "شادی و بازی"
    },
    {
      id: 5,
      url: getAssetUrl("/images/gallery-4.jpg"),
      alt: "عکس نوزاد علی احماد 5",
      caption: "قدم‌های کوچک"
    },
    {
      id: 6,
      url: getAssetUrl("/images/gallery-5.jpg"),
      alt: "عکس نوزاد علی احماد 6",
      caption: "ستاره کوچک خانه"
    }
  ]
};
