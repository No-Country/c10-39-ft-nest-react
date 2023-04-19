export const validationInputs: (word: string, wLength: number) => boolean = (word, wLength) => {
  const wordWithoutSpaces = word.replace(/\s+/g, '');
  return wordWithoutSpaces.length > wLength;
};
