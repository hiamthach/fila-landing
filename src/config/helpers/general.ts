const generateLoremIpsum = (paragraphs: number) => {
  const loremIpsum =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

  let result = '';
  for (let i = 0; i < paragraphs; i++) {
    result += loremIpsum + '\n\n';
  }

  return result.trim();
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const scrollToSection = (event: any) => {
  event.preventDefault();

  const targetElementId = (event.target as HTMLAnchorElement).getAttribute(
    'href'
  );
  const offset = 100;

  if (targetElementId) {
    const targetElement = document.querySelector<HTMLElement>(targetElementId);
    if (targetElement) {
      const targetPosition = targetElement.offsetTop - offset;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });
    }
  }
};

const generateImgPicsum = (width: number, height: number) => {
  return `https://picsum.photos/${width}/${height}`;
};

export default {
  generateLoremIpsum,
  scrollToSection,
  generateImgPicsum,
};
