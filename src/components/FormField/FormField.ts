import Block from '../../utils/Block';
import Input from '../Input';
import template from './FormField.hbs';

interface FormFieldProps {
  label: string;
  name: string;
  error: string;
  class: string;
  input: Input;
  additionalClass?: string;
}

export default class FormField extends Block {
  constructor(props: FormFieldProps) {
    super(props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
