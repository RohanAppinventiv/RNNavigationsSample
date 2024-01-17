import { StyleSheet, TextInput, View } from "react-native"
import RoundedIcon from "./RoundedIcon"
import useDebounce from "../hooks/customHooks"
import { useEffect, useState } from "react"


export default function SearchBar({callback}){
    const [searchText, setSearchText] = useState("")
    const debouncedQuery = useDebounce(searchText, 500)

    useEffect(()=>{
      console.log("SEARCH: DEBOUNCE:", debouncedQuery)
      callback(debouncedQuery)
    },[debouncedQuery])
    console.log("Rendering: SearchBar")
    return (
        <View style={styles.container}>
            <RoundedIcon imagePath={require('../../assets/search.png')}
                outerContainerStyle={styles.outerContainerStyle}
                innerImageStyle={styles.innerImageStyle}
            />
            <TextInput
            value={searchText}
            onChangeText={(value) => setSearchText(value)} 
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
        marginHorizontal: 10,
        borderWidth: 1,
        borderColor: '#B4B8CC',
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    outerContainerStyle: { 
        height: 24, 
        width: 24, 
        backgroundColor: '#fff',
        borderWidth: 0
    },
    innerImageStyle: { 
        tintColor: '#B4B8CC' 
    },
    searchInputStyle: {
        flex: 1, 
        marginStart: 2, 
        marginEnd: 20, 
        fontSize: 12, 
        color: '#373737' 
}

})
