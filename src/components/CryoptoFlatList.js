import { FlatList } from "react-native"


export default function CryptoList({list}){
    console.log("Rendering: CryptoList")


    const ListHeader = () => {
        return <View>
            
        </View>
    }
    const Item = ({item}) => {
      return <View></View>
    }

    return (
        <FlatList 
           
        />
    )


}

// Dont Memo the Flatlist
// Memo the Items of the list if its data is same
// And compare if prev and new data is same 