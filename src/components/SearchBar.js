import { StyleSheet, TextInput, View } from "react-native"
import RoundedIcon from "./RoundedIcon"


export default function SearchBar({callback}){
    console.log("Rendering: SearchBar")
    return (
        <View style={styles.container}>
            <RoundedIcon imagePath={require('../../assets/search.png')}
                outerContainerStyle={styles.outerContainerStyle}
                innerImageStyle={styles.innerImageStyle}
            />
            <TextInput
            onChangeText={(value) => callback(value)} 
            style={styles.searchInputStyle}
            placeholder= 'Search'
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 40,
        marginTop: 10,
        marginHorizontal: 30,
        borderWidth: 1,
        borderColor: '#B4B8CC',
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    outerContainerStyle: { 
        height: 24, 
        width: 24, 
        backgroundColor: '#F6F8FA'
    },
    innerImageStyle: { tintColor: '#B4B8CC' },
    searchInputStyle: {
        flex: 1, 
        marginStart: 2, 
        marginEnd: 20, 
        fontSize: 12, 
        color: '#373737' 
}

})
