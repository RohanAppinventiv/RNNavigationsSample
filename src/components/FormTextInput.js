import { StyleSheet, TextInput } from "react-native"
import { Column } from "./Surface"
import { H5, H7 } from "./Texts"


const FormTextInput = ({onFocus, initialValue = "", style, inputMode="text", isEditable = true, placeholder, label, errorMessage, maxLength = 20, onChangeText }) => {
    return (
        <Column style={[{flex: 0}, style]}>
            <H5>{label}</H5>
            <TextInput 
            onFocus={onFocus}
            autoCapitalize={inputMode == "email" ? "none" : "sentences"}
            defaultValue={initialValue}
            style={styles.input}
            placeholder={placeholder}
            maxLength={maxLength}
            editable={isEditable}
            inputMode={inputMode}
            onChangeText={(value) => onChangeText(value)}
            />
            {errorMessage ? <H7 style={{color:'red', marginStart: 5, marginTop: 5}}>{errorMessage}</H7>: null}
        </Column>

    )
}

const styles = StyleSheet.create({
    input: {
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 10,
        height: 40,
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingHorizontal: 10,
        fontSize: 14,
        marginTop: 5
    }
})

export default FormTextInput;