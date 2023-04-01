import validateField from './validateField';

const submitForm = <T extends Record<string, any>>(evt: Event, callback?: (data: T) => void) => {
  evt.preventDefault();

  const elements = Array.from(
    document.querySelectorAll('[data-regex]:not([data-regex=""])'),
  ) as HTMLInputElement[];

  elements.forEach((element) => validateField()(element));

  const isValidForm = elements.map((element) => {
    const { isValid } = validateField()(element);
    return isValid;
  }).every((isValid) => isValid);

  if (!isValidForm) {
    return;
  }

  const formData = new FormData(evt.target as HTMLFormElement);
  const result: T = {} as T;

  // eslint-disable-next-line no-restricted-syntax
  for (const [key, value] of (formData.entries())) {
    result[key as keyof T] = (value as any);
  }

  // eslint-disable-next-line no-console
  if (callback) {
    callback(result);
    return;
  }

  console.log(result);
};

export default submitForm;
