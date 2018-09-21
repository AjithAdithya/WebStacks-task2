import {MDCRipple} from '@material/ripple';
const ripple = new MDCRipple(document.querySelector('.foo-button'));

import {MDCTopAppBar} from '@material/top-app-bar/index';
const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const topAppBar = new MDCTopAppBar(topAppBarElement);

import {MDCTextField} from '@material/textfield';
const textField = new MDCTextField(document.querySelector('.mdc-text-field'));

import {MDCTextFieldHelperText} from '@material/textfield/helper-text';
const helperText = new MDCTextFieldHelperText(document.querySelector('.mdc-text-field-helper-text'));