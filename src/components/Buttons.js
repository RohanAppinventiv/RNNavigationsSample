import { Button, TouchableOpacity } from "react-native"


export const FlatButton = ({onPress, text = "", textColor="#fff", style, disabled = false }) => {
    return (<TouchableOpacity disabled={disabled} style={[{
            backgroundColor: 'teal',
            width: '100%',
            paddingVertical: 5
        }, style]}>
        <Button disabled={disabled} onPress={() => onPress()} color={textColor} title={text} />
    </TouchableOpacity>)
}

export const RoundedButton = ({onPress, text = "", textColor="#fff", style, disabled = false }) => {
    return (<TouchableOpacity disabled={disabled} style={[{
            backgroundColor: 'teal',
            width: '100%',
            borderRadius: 10,
            marginHorizontal: 20,
            paddingVertical: 5
        }, style]}>
        <Button disabled={disabled} onPress={() => onPress()} color={textColor} title={text} />
    </TouchableOpacity>)
}