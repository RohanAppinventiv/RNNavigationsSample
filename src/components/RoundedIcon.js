import { Image, StyleSheet, TouchableOpacity } from "react-native";


export default function RoundedIcon(props) {
    console.log("Rendering: Rounded Icon")
    return (
        <TouchableOpacity style={[styles.outerContainer, props.outerContainerStyle]}>
            <Image source={props.imagePath} style={[styles.innerImage, props.innerImageStyle]} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    outerContainer: {
        marginStart: 10,
        backgroundColor: '#ffffff',
        borderRadius: 16,
        width: 32,
        height: 32,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#F6F7F9'
    },
    innerImage: {
        width: 16,
        height: 16   
     }
})