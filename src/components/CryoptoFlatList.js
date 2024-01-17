import { FlatList, View } from "react-native"
import { useCallback, useContext, useMemo, useState } from "react"
import CryptoCurrencyItem from "./CryptoCurrencyItem"
import { AppContext } from "../../StockApp"
import CryptoListHeader from "./CryptoListHeader"


export default function CryptoList({ list }) {
    const { setAmount } = useContext(AppContext)
    const [timestamp, setTimestamp] = useState()
    console.log("Rendering: CryptoList")

    const headerText = useMemo(() => {
        return {
            market: 'Market',
            price: 'Price',
            change: 'Change',
            cap: 'Market Cap'
        }
    }, []
    )
    const updateAmount = (index) => {
        const amount = Date.now()
        console.log("AMOUNT UPDATE", amount)
        list[index] = {...list[index], MarketCap:amount}
        setAmount(amount)
        setTimestamp(amount)
    }


    const ItemSeperator = () => (
        <View style={
            { height: 1, width: '100%', backgroundColor: '#F6F7F9' }
        } />
    )

    return (
        <FlatList
            extraData={timestamp}
            ItemSeparatorComponent={ItemSeperator}
            showsVerticalScrollIndicator={false}
            bounces={false}
            stickyHeaderIndices={[0]}
            ListHeaderComponent={<CryptoListHeader headerText={headerText} />}
            data={list}
            renderItem={({ item, index }) => <CryptoCurrencyItem item={item} index={index} callback={updateAmount} />}
        />
    )


};

// Dont Memo the Flatlist as query prop will always change
// Memo the Items of the list if its data is same
// And compare if prev and new data is same 