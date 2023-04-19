export interface inputData {
  value: string;
  validation: boolean;
}

export type objectProp = Record<string, inputData>;

type validationType = (inputs: objectProp, wLength: number) => objectProp;

export const validationInputs: validationType = (inputs, wLength) => {
  const data = Object.entries(inputs);
  const validate = data.map((e) => {
    const inputName: string = e[0];
    const inputInfo: inputData = e[1];
    const wordWithoutSpaces = inputInfo.value.replace(/\s+/g, '');
    inputInfo.validation = wordWithoutSpaces.length > wLength;

    return {
      [inputName]: inputInfo,
    };
  });
  const newState = validate.reduce((acc, cur) => {
    return { ...acc, ...cur };
  }, {});
  const pass = data.every((e) => e[1].validation);
  return { newState, pass };
};
