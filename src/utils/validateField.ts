type EventWithTarget = Event & { target: HTMLInputElement };

// eslint-disable-next-line max-len
const validateField = (message: string = 'Поле не валидно') => (event: EventWithTarget | HTMLInputElement) => {
  const element = (event instanceof HTMLInputElement) ? event : event.target;
  const regexStr = element.getAttribute('data-regex') || '';
  const regex = new RegExp(regexStr, 'g');
  const errorElement = (
    element.closest('.field-parent')?.querySelector('.field-error') as HTMLElement
  );

  if (!errorElement) {
    return {
      isValid: true,
      message: 'В документе нет элемента указывающего ошибку',
    };
  }

  if (!regex.test(element.value)) {
    errorElement.style.display = 'inline';

    return {
      isValid: false,
      message,
    };
  }

  errorElement.style.display = 'none';

  return {
    isValid: true,
    message,
  };
};

export default validateField;
