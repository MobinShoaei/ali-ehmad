# کارت دعوت دیجیتال تولد نوزاد — علی احمد 🎈👶

کارت دعوت دیجیتال تک‌صفحه‌ای (Single Page Application) برای جشن تولد نوزاد («علی احمد») پیاده‌سازی شده با **React**، **TypeScript**، **Vite**، **Tailwind CSS** و **Framer Motion**.

---

## 🌟 ویژگی‌های اصلی

1. **طراحی Mobile-First و کاملاً واکنش‌گرا (Responsive):**
   - اولویت اصلی نمایش روی انواع گوشی‌های موبایل (آیفون و اندروید)، تبلت و دسکتاپ.
   - پشتیبانی از Safe Area Insets آیفون (حاشیه ناچ و نوار پایین).
   - جلوگیری کامل از Horizontal Overflow.

2. **Hero و قاب عکس تعاملی (Photo Reveal):**
   - افکت جذاب پاک کردن گرد و غبار/بخار روی عکس نوزاد با Drag روی موبایل (Touch) و Mouse رو دسکتاپ.
   - استفاده از Canvas compositing (`destination-out`) و Pointer Events.
   - تشخیص پاک‌سازی تا ۶۵٪ و حذف خودکار باقی‌مانده همراه با انیمیشن Sparkle/Confetti.
   - دکمه پوشاندن مجدد تصویر جهت مشاهده دوباره.

3. **شمارش معکوس زنده (Countdown Timer):**
   - روز، ساعت، دقیقه و ثانیه به همراه تبدیل اعداد به ارقام فارسی.
   - نمایش پیام «جشن شروع شده است» در صورت صفر شدن تایمر.
   - تاریخ هدف قابل تنظیم در فایل پیکربندی.

4. **جزئیات مراسم (Event Details):**
   - نمایش تاریخ شمسی، تاریخ میلادی، ساعت و نوع پذیرایی («به صرف شام»).
   - آیکون‌های شیک Lucide در کارت‌های Glassmorphic.

5. **گالری تصاویر (Baby Photo Slider):**
   - اسلایدر با قابلیت Touch Swipe روی موبایل و Drag روی دسکتاپ.
   - دکمه‌های قبلی/بعدی، شاخص‌های صفحه‌بندی (Pagination Dots) و مدال لایت‌باکس بزرگ‌نمایی تصویر.

6. **مسیریابی هوشمند (Navigation):**
   - دکمه‌های مستقیم مسیریابی با **Google Maps**، **Waze** و **نشان (Neshan)**.
   - خواندن URLها از فایل کانفیگ.

7. **پیام پایانی و پخش موزیک ملایم:**
   - متن پایانی شیک با فضای خالی مناسب.
   - دکمه شناور پخش/قطع موسیقی لالایی ملایم (ساخته شده با Web Audio API بدون نیاز به فایل صوتی خارجی).

---

## 🛠 نحوه تغییر مشخصات مراسم و تصاویر (فایل پیکربندی)

تمام مشخصات قابلی تغییر در فایل زیر قرار دارند:
📌 [`src/config/invitation.ts`](file:///Users/mobinshoaei/Documents/ali-ehmad/src/config/invitation.ts)

```typescript
export const invitationConfig: InvitationConfig = {
  babyName: "علی احمد",
  heroTitle: "به نام خدا",
  heroSubtitle: "به جشن تولد علی احمد دعوتید",
  heroHintText: "برای دیدن عکس، صفحه را لمس و پاک کنید",
  
  countdownTitle: "لحظه‌شماری برای دیدن روی ماه شما",
  countdownFinishedMessage: "جشن آغاز شده است! منتظر دیدارتان هستیم ✨",
  countdownTargetDate: "2026-10-15T18:00:00", // تاریخ هدف برای تایمر (ISO String)
  
  persianDate: "پنج‌شنبه ۲۴ مهر ۱۴۰۵",
  gregorianDate: "۱۵ اکتبر ۲۰۲۶",
  eventTime: "از ساعت ۱۸:۰۰ الی ۲۲:۰۰",
  receptionText: "به صرف شام و پذیرایی",
  
  venueName: "تالار تشریفات همایونی",
  addressTitle: "منتظر دیدار شما هستیم",
  addressSubTitle: "نشانی مراسم",
  address: "تهران، خیابان فرشته، تالار تشریفات همایونی، سالن زمرد",
  
  googleMapsUrl: "https://maps.google.com/?q=Tehran",
  wazeUrl: "https://waze.com/ul?ll=35.6892,51.3890&navigate=yes",
  neshanUrl: "https://neshan.org/maps",
  
  closingMessage: "اگر افتخار میزبانی حضرتعالی را نداشتیم لطفاً اطلاع دهید",
  closingSubtext: "با تشکر فراوان",
  
  heroImage: "/images/hero.jpg",
  galleryImages: [ ... ]
};
```

### 🖼 جایگزینی تصاویر واقعی:
1. فایل عکس اصلی نوزاد را در پوشه `public/images/hero.jpg` جایگزین کنید.
2. تصاویر گالری را در پوشه `public/images/` کپی کرده و آدرس آن‌ها را در لیست `galleryImages` در `src/config/invitation.ts` قرار دهید.

---

## 🚀 راه اندازی و اجرا

### ۱. نصب پیش‌نیازها
```bash
npm install
```

### ۲. اجرای پروژه در محیط توسعه (Local Dev Server)
```bash
npm run dev
```

### ۳. ساخت نسخه Production
```bash
npm run build
```

---

## 🌐 راهنمای Deploy روی Vercel / Netlify

### دپلو روی Vercel:
1. مخزن GitHub خود را ایجاد کنید و کد را Push نمایید.
2. وارد پنل Vercel شده و `Add New Project` را انتخاب کنید.
3. مخزن `ali-ehmad` را انتخاب کنید.
4. تنظیمات ساخت خودکار شناسایی می‌شود (`Build Command: npm run build`, `Output Directory: dist`).
5. روی **Deploy** کلیک کنید.

### دپلو روی Netlify:
1. وارد Netlify شوید و گزینه **Import from Git** را انتخاب کنید.
2. مخزن پروژه را متصل کرده و `Publish directory` را روی `dist` تنظیم کنید.
