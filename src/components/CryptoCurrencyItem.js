
import { memo, useContext, useState } from "react";
import { Row } from "./Surface";
import { H6, H5, H7 } from "./Texts";
import { StyleSheet, TouchableOpacity } from "react-native";
import { AppContext } from "../../StockApp";

const CryptoCurrencyItem = memo(function CryptoCurrencyItem({item, index, callback}){
    const updateMarketCap = () =>{
        callback(index)
    }
    console.log("Rendering: List Item",index)
    return (
        <TouchableOpacity onPress={()=>updateMarketCap()}>
            <Row style={styles.itemParent}>
            <H7 style={styles.itemBlock}>{item.Market}</H7>
            <H7 style={styles.itemBlock}>$ {(item.Price).toLocaleString("en-US")}</H7>
            <H7 style={ item.Change > -1 ? styles.itemBlockGreen : styles.itemBlockRed }>{item.Change}%</H7>
            <H7 numberOfLines={1} style={styles.itemCapBlock}>$ {(item.MarketCap).toLocaleString("en-US")}</H7>
        </Row>
        </TouchableOpacity>
    )
},(prevProps, nextProps)=>{
    return prevProps.item.MarketCap == nextProps.item.MarketCap
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
        width: '22%',
        color: 'green'
    },
    itemBlockRed: {
        width: '22%',
        color: 'red'
    }
})
export default CryptoCurrencyItem;
