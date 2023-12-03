import { StyleProp, TextStyle } from 'react-native';
export default function TextInput(props: {
    name: string;
    placeholder?: string;
    onChange?: (text: string) => void;
    errorMessage?: string;
    required?: boolean;
    errorStyle?: StyleProp<TextStyle>;
    secure?: boolean;
}): import("react/jsx-runtime").JSX.Element;
