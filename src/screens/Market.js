import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import { ColumnSurface } from "../components/Surface"
import RoundedIcon from "../components/RoundedIcon"
import { useCallback, useEffect, useMemo, useState } from "react"
import SearchBar from "../components/SearchBar"
import DataSource from "../source"
import CryptoList from "../components/CryoptoFlatList"
import useDebounce from "../hooks/customHooks"


export default function MarketScreen(){
    console.log("Rendering: MarketScreen")
    const [query, setQuery] = useState("")
    const [list, setList] = useState()

    useEffect(()=>{
        if(!query){
           setList(DataSource.shareMarketData)
        } else {
            const result = DataSource.shareMarketData.filter((item)=>
                item.Market.toLowerCase().includes(query.toLowerCase())
            );
            setList(result)
        }
    },[query])
    
    return (
          <ColumnSurface style={{backgroundColor: '#fff', paddingHorizontal:20}}>
           <SearchBar callback={(query) => setQuery(query)}/>
           <CryptoList list={list} />
          </ColumnSurface>
    )
}

const styles = StyleSheet.create({
    safeAreaContainer: {
        flex: 1
    },

    parentContainer: { 
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center'
     }, 
    screenName: { 
        fontSize: 24, 
        fontWeight: '600', 
        color: '#176d98' 
    },
    buttonContainer: { 
        height: 40, 
        backgroundColor: '#0f4965', 
        justifyContent:'center', 
        paddingHorizontal: 100,
        borderRadius: 10
    },
    buttonText: { 
        fontSize: 18, 
        fontWeight: '600', 
        color: 'white' 
    },
    container: {
        height: 40,
        marginTop: 10,
        marginHorizontal: 30,
        borderWidth: 1,
        borderColor: '#B4B8CC',
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center'
    }
})

