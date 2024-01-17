import { memo } from "react"
import {View, Image, StyleSheet, TouchableOpacity } from "react-native"


const DrawerIconLeft = memo(function DrawerIconLeft({navigation}){
    console.log("Rendering: DrawerLeft")
    return (
        <View style={styles.parentView}>
            <TouchableOpacity style={styles.hamburgerContainer} onPress={()=>navigation.toggleDrawer()}>
                <Image style={styles.iconImage} source={require('../../assets/menu_icon.png')} />
            </TouchableOpacity>
        </View>
    )
});


const styles = StyleSheet.create({
    parentView: {
        marginStart: 12,
    },
    hamburgerContainer: {
        width: 32,
        height: 32,
        backgroundColor: '#5b64cc',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20
    },
    iconImage: {
        height: 16,
        width: 16,
        tintColor: 'white',
    }
})
export default DrawerIconLeft;