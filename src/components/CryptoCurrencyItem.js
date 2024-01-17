
import { memo, useContext, useState } from "react";
import { Row } from "./Surface";
import { H6, H5, H7 } from "./Texts";
import { StyleSheet, TouchableOpacity } from "react-native";
import { AppContext } from "../../StockApp";

const CryptoCurrencyItem = memo(function CryptoCurrencyItem({item, index, callback}){
    const [marketCap, setMarketCap] = useState(item.MarketCap)
    const updateMarketCap = (updatedMarketCapital) =>{
        setMarketCap(updatedMarketCapital)
        callback(updatedMarketCapital)

    }
    console.log("Rendering: List Item",index)
    return (
       <Row style={styles.itemParent}>
            <H7 style={styles.itemBlock}>{item.Market}</H7>
            <H7 style={styles.itemBlock}>$ {(item.Price).toLocaleString("en-US")}</H7>
            <TouchableOpacity onPress={()=>updateMarketCap(Date.now())} style={styles.itemBlock}><H7 style={ item.Change > -1 ? styles.itemBlockGreen : styles.itemBlockRed }>{item.Change}%</H7></TouchableOpacity>
            <H7 numberOfLines={1} style={styles.itemCapBlock}>$ {(marketCap).toLocaleString("en-US")}</H7>
        </Row>
    )
});

const styles = StyleSheet.create({
    itemParent: {
        height: 30,
        alignItems: 'center'
    },
    itemBlock: {
        width: '22%',
    },
    itemCapBlock: {
        width: '44%',
    },
    itemBlockGreen: {
        color: 'green'
    },
    itemBlockRed: {
        color: 'red'
    }
})
// Market: 'AAPL', Price: 150.25, Change: 1.5, MarketCap: 2.5e6
export default CryptoCurrencyItem;
