import chinaFlag from '@/assets/images/flag/china.webp';
import card1Image from '@/assets/images/flag/card1.webp';
import card6Image from '@/assets/images/flag/card6.webp';
import card7Image from '@/assets/images/flag/card7.webp';
import dubaiFlag from '@/assets/images/flag/dubai.webp';
import gashty15Shaw from '@/assets/images/flag/gashty-15-shaw.webp';
import medinaFlag from '@/assets/images/flag/medina.webp';

export type PackageItem = {
  sectionId: string;
  order: string;
  category: string;
  name: string;
  summary: string;
  description: string[];
  tags: string[];
  note?: string;
  featured?: boolean;
  image?: string;
  background: string;
  href: string;
  hasDetailPage: boolean;
};

export const packagesData: PackageItem[] = [
  {
    sectionId: 'welcome-section',
    order: '01',
    category: 'دەستپێک',
    name: 'بەخێربێن بۆ بونیادنانی سەرکردەکانی سبەینێ',
    summary: 'ئێمە یارمەتیت دەدەین سنوورەکانت بشکێنیت.',
    description: [
      'هەنگاو بنێ و ئامانجەکەت دیاری بکەیت، ئامادەکاری بۆ بکەیت و لە هەوڵدان نەوەستیت تا دەگیتە ئامانجەکەت.',
      'ڕاهێنانی کارگێڕی و پشتیوانی لە گەیشتن بە ئامانجەکانت لەگەڵ دیدگایەک کە دین و دونیا پێکەوە دەبینێت.',
      'لەسەر فەرمایشتی پێغەمبەری خودا و کلامی اللە، ئامانجمان ئەوەیە لە دونیادا ببیتە سەرکردە و لە قیامەتیش لە سەرکەوتووان بیت.',
    ],
    tags: ['سەرکردایەتی', 'ئامانج', 'پشتیوانی'],
    note:
      'بە چوار گەشتی ناوازە و دوو پاکێجی خوولی بزنس، هەموو ژیانت بگۆڕە لە ڕووی دین و دونیاکەتەوە.',
    featured: true,
    image: card1Image,
    background: '',
    href: '/#welcome-section',
    hasDetailPage: false,
  },
  {
    sectionId: 'china-trip-section',
    order: '02',
    category: 'گەشتی بازرگانی',
    name: 'گەشتی چین بۆ بازرگانی',
    summary: 'نوقمبوونێکی تەواو بازرگانی بۆ خستنەبازاڕی براندەکەت.',
    description: [
      'بەشداری بکە لە مانەوەیەکی تایبەت لەگەڵ ئێمە وەک تیمی قیام گروپ بۆ مانەوە لە شوێنێکی 5 ئەستێرە لە نزیک گەڕەکی موسڵمانان.',
      'شوێنی ستراتیژی بازرگانی و کارگەکان بەیەکەوە دەبینین و یارمەتیت دەدەین براندی دڵخوازت بخەیتە بازاڕەوە.',
      'سوودمەند ببە لە ڕاهێنانی گشتگیر لە بواری مارکێتینگ و سۆشیال میدیا و وەرگرتنی پاکێجی بزنس سەلام و ڕاهێنانی کارگێڕی بزنس بە خۆڕایی.',
    ],
    tags: ['چین', '5 ئەستێرە', 'مارکێتینگ'],
    image: chinaFlag,
    background: '',
    href: '/gashti-chin',
    hasDetailPage: true,
  },
  {
    sectionId: 'dubai-trip-section',
    order: '03',
    category: 'گەشتی بازرگانی',
    name: 'گەشتی دوبەی بۆ بازرگانی',
    summary:
      'نوقمبوونێکی تەواو بازرگانی بۆ وەرگرتنی ئەزمونی ئەقارات و بازرگانی جوملە.',
    description: [
      'بەشداری بکە لە مانەوەیەکی تایبەت لەگەڵ تیمی قیام گروپ بۆ مانەوە لە شوێنێکی 5 ئەستێرە و ناسینی شوێنی ستراتیژی بازرگانی.',
      'سەردانی کۆگاکانی جوملە بکە لەگەڵماندا و فێربە چۆنیەتی هێنانەوەی هەموو جۆرە کاڵایەک و خستنەبازاڕی براندەکەت.',
      'سوودمەند ببە لە ڕاهێنانی گشتگیر لە مارکێتینگ و سۆشیال میدیا و پاکێجی بزنس سەلام و ڕاهێنانی کارگێڕی بزنس بە خۆڕایی دوای گەشتەکە.',
    ],
    tags: ['دوبەی', 'ئەقارات', 'جوملە'],
    image: dubaiFlag,
    background: '',
    href: '/gashti-dubai',
    hasDetailPage: true,
  },
  {
    sectionId: 'medina-trip-section',
    order: '04',
    category: 'گەشتی روحی',
    name: 'گەشتی 3 مانگی لە مەدینە',
    summary: 'لە شوێنێکی ئیلهام‌بەخشدا بژی و مانایەکی نوێ بە ژیانت ببەخشە.',
    description: [
      'دەرفەتێکی نوێ بۆ فێربوون و گۆڕانکاری و بەرەو ئامانجەکانی ژیانت هەنگاو نان.',
      'پاکێجێکی ناوازەیە بۆ پێشکەوتن لە دینەکەتدا و خۆئامادەکردن بۆ گەیشتن بە ئامانجەکەت.',
      'لە فەزڵی خوداوە، ئێمە تاکە کەسین کە پاکێجێکی تەواو لەم شێوەیە پێشکەش دەکەین و ڕوح و فێربوون پێکەوە دەهێنین.',
    ],
    tags: ['مەدینە', '3 مانگ', 'فێربوون'],
    image: medinaFlag,
    background: '',
    href: '/gashti-medina',
    hasDetailPage: true,
  },
  {
    sectionId: 'brothers-trip-section',
    order: '05',
    category: 'گەشتی تایبەت',
    name: 'گەشتی 15 شەوی برایان',
    summary: 'ئەزموونی عومرەیەکی تایبەت بکە لە مەدینە و مەککە.',
    description: [
      '8 شەو لە ڤێلایەکی تایبەت لە مەدینەی پیرۆز و 7 شەو لە ڤێلایەکی تایبەت لە مەککە.',
      'لەو 15 ڕۆژەدا تەواوی سیرەی پێغەمبەری خودا، بابەتی فیقیه، بیروباوەڕی دروست و تەجوید فێر دەبن.',
    ],
    tags: ['عومرە', 'مەککە', 'مەدینە'],
    image: gashty15Shaw,
    background: '',
    href: '/gashti-15-shaw',
    hasDetailPage: true,
  },
  {
    sectionId: 'business-islam-package-section',
    order: '06',
    category: 'پاکێجی بزنس',
    name: 'پاکێجی بزنس و ئیسلام',
    summary: 'ڕاهێنانی کارگێڕی بۆ بەدەستهێنانی سەرمایەی خۆت لە 0 دۆلارەوە.',
    description: [
      'بەرنامەیەکی ڕاهێنانی ناوازە بۆ فێربوونی چۆنیەتی بەدەستهێنانی سەرمایەی خۆت و دەستپێکردنی بازرگانی بە بنەمای ڕوون.',
      'بونیادنانی گەنجی موسڵمان بۆ زیاتر هاندانیان تا بتوانن سەرمایەی خۆیان هەبێت و دەست بکەن بە بازرگانییەکی سەرکەوتوو.',
    ],
    tags: ['0 دۆلار', 'سەرمایە', 'کارگێڕی'],
    image: card6Image,
    background: '',
    href: '/package-business-islam',
    hasDetailPage: true,
  },
  {
    sectionId: 'business-salam-package-section',
    order: '07',
    category: 'پاکێجی بزنس',
    name: 'پاکێجی بزنس سەلام',
    summary: 'حەرەم 100% حەڵاڵ و شێوازی فرۆشتنی ئۆنلاین بەبێ ستۆک.',
    description: [
      'بزنس سەلام ڕێگەت پێدەدات لە 100$ ـەوە دەست پێ بکەیت و بە شێوەی ئۆنلاین بفرۆشیت، بەبێ ستۆک و بە ڕێزگرتن لە بنەما ئیسلامییەکان.',
      'تەنانەت لە سفریشەوە دەتوانیت دەست بە کارەکەت بکەیت و تووشی حەرام نەبیت.',
    ],
    tags: ['100% حەڵاڵ', 'ئۆنلاین', '100$'],
    note:
      'بە یارمەتی خودا پاشان ئێمە هاوکارت دەبین تا هەم لە دونیا سەرکەوتوو بیت هەم لە قیامەت، و ئەو سەرمایەی دەستت دەکەوێت بە تەواوی حەڵاڵ و بەرەکەتدار بێت.',
    image: card7Image,
    background: '',
    href: '/package-business-salam',
    hasDetailPage: true,
  },
];

export const routePackages = packagesData.filter((item) => item.hasDetailPage);

export const findPackageByHref = (href: string) =>
  packagesData.find((item) => item.href === href);
