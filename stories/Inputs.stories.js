import { createInputs } from './Inputs';

export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'Forms/Inputs',
    tags: ['autodocs'],
    render: ({ placeholder, ...args }) => {
        return createInputs({ placeholder, ...args });
    },
    argTypes: {
        placeholder: { 
            control: 'text',
            default: false,
            description : 'specifies a short hint that describes the expected value of an input field',
        },
        type: {
            control: { type: 'select' },
            default: 'text',
            options: [ 'text', 'number', 'password', 'email' ],
            description : 'sets `[type]` attribute of the input',
        },
        size: {
            control: { type: 'select' },
            options: [ 'small', 'default', 'large' ],
            default: 'default',
            description : 'sets the size of the input, in most cases the default is the one we use',
        },
        required: { 
            control : 'boolean',
            default: false,
            description : 'adds the [required] attribute, works with the notValid and your validation system. Make sure to show the user it is required (might be with a `{label}*` ',
        },
        notValid: { 
            control: 'boolean',
            default: false,
            description : 'adds class `.is-invalid`, if not valid value or required field empty',
        },
        disabled: { 
            control : 'boolean',
            default: false,
            description : 'adding this attribute disables the input',
        },
        readOnly: { 
            control : 'boolean',
            default: false,
            description : 'input has value but user can not edit',
        },
        plainText: {
            control: 'boolean',
            default: false,
            description: 'strictly works in pair and emphasizes the `[readOnly]`',
        },
    },
    //decorators: [ ... ],
    //parameters: { ... },
};

export const Text = {
    name: 'type: text',
    args: {
        size: 'default',
        placeholder: `class='form-control' [type]='text'`,
        type: 'text',
        notValid: false,
        disabled: false,
        readOnly: false,
        plainText: false,
        required: false,
    },
}

export const Email = {
    name: 'type: email',
    comment: 'it is a description',
    args: {
        size: 'default',
        placeholder: `class='form-control' [type]='email'`,
        type: 'email',
    }
}

export const Password = {
    name: 'type: password',
    args: {
        size: 'default',
        placeholder: `class='form-control' [type]='password'`,
        type: 'password',
    }
}


export const Number = {
    name: 'type: number',
    args: {
        size: 'default',
        value: 36,
        placeholder: `class='form-control' [type]='number'`,
        type: 'number',
    }
}

export const Invalid = {
    name: 'state: invalid',
    args: {
        size: 'default',
        placeholder: `class='form-control is-invalid' [type]='text'`,
        type: 'text',
        notValid: true,
    }
}

export const Required = {
    name: 'state: required*',
    args: {
        size: 'default',
        placeholder: `class='form-control' [type]='text' required`,
        type: 'text',
        required: true,
    }
}

export const Disabled = {
    name: 'state: disabled',
    args: {
        size: 'default',
        placeholder: `class='form-control' [type]='text' disabled`,
        type: 'text',
        disabled: true,
    }
}

export const ReadOnly = {
    name: 'state: readOnly',
    args: {
        size: 'default',
        value: `class='form-control' [type]='text' readonly`,
        type: 'text',
        readOnly: true,
    },
}

export const ReadOnlyPlainText = {
    name: 'state: readOnly & plainText',
    args: {
        size: 'default',
        value: `class='form-control plaintext' [type]='text' readonly`,
        type: 'text',
        readOnly: true,
        plainText: true,
    },
}