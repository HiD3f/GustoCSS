import './inputs.scss';

export const createInputs = ({
    disabled = false,
    readOnly = false,
    plainText = false,
    notValid = false,
    required = false,
    size = 'default',
    placeholder,
    value = null,
    type,
}) => {
    const input = document.createElement('input');
    input.type = type;
    input.placeholder = placeholder;
    input.disabled = disabled;
    input.readOnly = readOnly;
    input.required = required;
    input.value = value;

    const notvalid = notValid ? 'is-invalid' : '';
    const plaintext = plainText ? 'plaintext' : '';
    
    input.className = ['form-control', `form-control-${size}`, plaintext, notvalid].join(' ');

    return input;
}