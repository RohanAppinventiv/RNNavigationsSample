import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import { Column } from "./Surface"
import { H5, H6, H7 } from "./Texts"


const NonEditableView = ({value = "", placeholder, label, style, errorMessage, onPress }) => {
    return (
        <Column style={[{flex: 0}, style]}>
            <H5>{label}</H5>
            <TouchableOpacity style={styles.input} onPress={()=>onPress()}>
                {value ? <H6>{value}</H6> : <H6 style={styles.placeholderText}>{placeholder}</H6>}
            </TouchableOpacity>
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
        paddingHorizontal: 10,
        fontSize: 14,
        marginTop: 5,
        justifyContent: "center"
    },
    placeholderText: {
        color: "#C5C6C9",
        fontWeight: '500'
    }
})

export default NonEditableView;