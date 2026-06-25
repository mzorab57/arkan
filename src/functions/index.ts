import { lenis } from '@/lib/lenis';
import router from '@/router';

const textSplitterIntoChar = (
  text: string,
  isFancyFont: boolean = false,
  isNewLine: boolean = false,
): string => {
  const words = text.split(' ');
  const char = words.map((word) => word.split(''));

  let result = '';
  char.forEach((word) => {
    result += '<span class="text-nowrap!  overflow-clip ';
    if (isNewLine) {
      result += ' leading-none block  ';
    } else {
      result += ' inline-block ';
    }
    result += '">';

    word.forEach((char) => {
      let classes =
        'letters translate-y-[120%] inline-block will-change-auto will-change-transform ';
      if (isFancyFont) {
        classes += ' font-fancy ';
      }

      result += `<span class="${classes}">${char}</span>`;
    });

    result += '</span> ';
  });

  return result;
};

const getAvailableForWorkDate = () => {
  const date = new Date();

  const year = date.getFullYear().toString().slice(-2);
  const monthNames = [
    'JAN',
    'FEB',
    'MAR',
    'APR',
    'MAY',
    'JUN',
    'JUL',
    'AUG',
    'SEP',
    'OCT',
    'NOV',
    'DEC',
  ];
  let index = date.getMonth();

  // Uncomment this if you want to include the next month
  // if (date.getMonth() < 12) {
  //   index += 1;
  // }
  const month = monthNames[index];

  return `${month} '${year}`;
};

const scrollToSection = (url: string) => {
  lenis.start();
  if (url === '#testimonials-section') {
    lenis.scrollTo('#slider', { duration: 3 });
    return;
  }
  lenis.scrollTo(url, { duration: 3 });
};

const navigateTo = async (url: string) => {
  const isExternalLink =
    url.startsWith('http://') ||
    url.startsWith('https://') ||
    url.startsWith('mailto:') ||
    url.startsWith('tel:');

  if (isExternalLink) {
    window.open(url, '_blank', 'noopener,noreferrer');
    return;
  }

  if (url.startsWith('/')) {
    const [path, hash] = url.split('#');
    await router.push(hash ? `${path}#${hash}` : path);
    if (hash && router.currentRoute.value.path === '/') {
      requestAnimationFrame(() => {
        scrollToSection(`#${hash}`);
      });
    }
    return;
  }

  if (url.startsWith('#') && router.currentRoute.value.path !== '/') {
    await router.push(`/${url}`);
    requestAnimationFrame(() => {
      scrollToSection(url);
    });
    return;
  }

  scrollToSection(url);
};

const gotoSection = (url: string) => {
  void navigateTo(url);
};

export { textSplitterIntoChar, getAvailableForWorkDate, gotoSection, navigateTo };
