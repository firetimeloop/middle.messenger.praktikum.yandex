import validateField from './validateField';

type FormDataEntryValue = string | File;

const submitForm = (evt: Event) => {
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
  const result: Record<string, FormDataEntryValue> = {};

  // eslint-disable-next-line no-restricted-syntax
  for (const [key, value] of formData.entries()) {
    result[key] = value;
  }

  // eslint-disable-next-line no-console
  console.log(result);
};

export default submitForm;
