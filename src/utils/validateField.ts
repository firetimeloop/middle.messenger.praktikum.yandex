type EventWithTarget = Event & { target: HTMLInputElement }

const validateField = (event: EventWithTarget | HTMLInputElement) => {
  const element = (event instanceof HTMLInputElement) ? event : event.target;
  const regexStr = element.getAttribute('data-regex') || '';
  const regex = new RegExp(regexStr, 'g');
  const errorElement = (
    element.parentElement?.parentElement?.querySelector('.field-error') as HTMLElement
  );

  if (!errorElement) {
    return true;
  }

  if (!regex.test(element.value)) {
    errorElement.style.display = 'inline';

    return false;
  }

  errorElement.style.display = 'none';

  return true;
};

export default validateField;
