import { StyleSheet } from "react-native";
import { Row } from "./Surface";
import { H6 } from "./Texts";
import { memo } from "react";

const CryptoListHeader = memo(function Header({headerText}){
    console.log("Rendering: List Header: ")
    return (<Row style={styles.headerRow}>
        <H6 style={styles.commonBlock}>{headerText.market}</H6>
        <H6 style={styles.commonBlock}>{headerText.price}</H6>
        <H6 style={styles.commonBlock}>{headerText.change}</H6>
        <H6 style={styles.capBlock}>{headerText.cap}</H6>
    </Row>)
})

const styles = StyleSheet.create({
    headerRow: {
        height: 40,
        paddingTop: 20,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        borderBottomWidth: 1,
        borderBottomColor: '#F6F7F9'
    },
    commonBlock: {
        width: '22%'
    },
    capBlock: {
        width: '44%',
    }
})

export default CryptoListHeader;
