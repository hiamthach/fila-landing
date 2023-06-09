const generateLoremIpsum = (paragraphs: number) => {
  const loremIpsum =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

  let result = '';
  for (let i = 0; i < paragraphs; i++) {
    result += loremIpsum + '\n\n';
  }

  return result.trim();
};

const generateImgPicsum = (width: number, height: number) => {
  return `https://picsum.photos/${width}/${height}`;
};

export default {
  generateLoremIpsum,
  generateImgPicsum,
};
