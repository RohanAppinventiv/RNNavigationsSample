import { StyleSheet, View } from "react-native"


export default function BoxShadow(props) {
    return (
        <View style={[styles.container, props.boxStyle]}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingBottom: 20,
        backgroundColor: '#FFFFFF',
        borderColor: '#CFD1DE',
        margin: 20,
        borderWidth: 2,
        borderRadius: 15,
        shadowOffset: { 
            width: 10, height: 10, 
        },
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 15,
    
    }
})