import { FlatList, View } from "react-native"
import { useCallback, useContext, useMemo } from "react"
import CryptoCurrencyItem from "./CryptoCurrencyItem"
import { AppContext } from "../../StockApp"
import CryptoListHeader from "./CryptoListHeader"


export default function CryptoList({list}){
    const {setAmount} = useContext(AppContext)
    console.log("Rendering: CryptoList")
    
    const headerText = useMemo(()=> {
       return {
        market: 'Market',
        price: 'Price',
        change: 'Change',
        cap: 'Market Cap'
         }
    }, []
    )
    const updateAmount = useCallback((amount) => {
       console.log("AMOUNT UPDATE", amount)
       setAmount(amount)

    },[])
    const ItemSeperator = () => (
    <View style={
        {height: 1, width: '100%', backgroundColor: '#F6F7F9'}
        }/>
    )

    return (
        <FlatList
        ItemSeparatorComponent={ItemSeperator}
        showsVerticalScrollIndicator={false}
        bounces={false}
        stickyHeaderIndices={[0]}
        ListHeaderComponent={<CryptoListHeader headerText={headerText} />}
        data={list}
        renderItem = {({item, index}) => <CryptoCurrencyItem callback={(v)=>updateAmount(v)} item={item} index={index}/>}
        />
    )


};

// Dont Memo the Flatlist as query prop will always change
// Memo the Items of the list if its data is same
// And compare if prev and new data is same 