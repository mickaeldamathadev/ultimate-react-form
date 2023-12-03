"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_hook_form_1 = require("react-hook-form");
var react_native_1 = require("react-native");
function TextInput(props) {
    var _a = (0, react_hook_form_1.useFormContext)(), control = _a.control, errors = _a.formState.errors;
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(react_hook_form_1.Controller, { control: control, rules: {
                    required: props.required,
                }, render: function (_a) {
                    var _b = _a.field, onChange = _b.onChange, onBlur = _b.onBlur, value = _b.value;
                    return ((0, jsx_runtime_1.jsx)(react_native_1.TextInput, { secureTextEntry: props.secure, placeholder: props.placeholder || '', onBlur: onBlur, onChangeText: function (text) {
                            onChange(text);
                            props.onChange(text);
                        }, value: value }));
                }, name: props.name }), errors[props.name] && ((0, jsx_runtime_1.jsx)(react_native_1.Text, { style: props.errorStyle, children: props.errorMessage || 'This is required.' }))] }));
}
exports.default = TextInput;
