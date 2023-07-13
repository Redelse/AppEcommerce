import { TextInput, View} from "react-native";

import { styles } from "./styles";

const Input = ({
    borderColor,
    onHandleFocus,
    onHandleBlur,
    onhHandleChangeText,
    text,
    placeholder,
    ... props
}) => {
     return (
        <View style={styles.container}>
            <TextInput
            {...props}
            style={[styles.input, {borderColor}]}
            onFocus={onHandleFocus}
            onBlur={onHandleBlur}
            onChangeText={onhHandleChangeText}
            autoCorrect={false}
            autoCapitalize="none"
            cursorColor={borderColor}
            placeholderTextColor={borderColor}
        />
        </View>
     );
};

export default Input;