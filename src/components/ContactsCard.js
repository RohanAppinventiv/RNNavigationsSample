
import { memo, useContext, useState } from "react";
import { Column, Row } from "./Surface";
import { H5, H4 } from "./Texts";
import { StyleSheet, TouchableOpacity } from "react-native";
import BoxShadow from "./BoxShadow";
import OperationType from "../Utils/OperationType";
import { RoundedButton } from "./Buttons";

function ConatctsCard({ item, index, contactCallback }) {

    return (<BoxShadow>
        <Column>
            <H5><H4 style={styles.labels}>Name:</H4> {item.name}</H5>
            <H5 style={styles.parentLabel}><H4 style={styles.labels}>Email:</H4> {item.email}</H5>
            <H5 style={styles.parentLabel}><H4 style={styles.labels}>Phone:</H4> {item.phone}</H5>
            <H5 style={styles.parentLabel}><H4 style={styles.labels}>DOB:</H4> {item.dob}</H5>
            <Row style={styles.buttonRaw}>
                <RoundedButton style={styles.optionButtonEdit} text={"Edit"} onPress={() => contactCallback(OperationType.EDIT, index)} />
                <RoundedButton style={styles.optionButtonDelete} text={"Delete"} onPress={() => contactCallback(OperationType.DELETE, index)} />
            </Row>
        </Column>
    </BoxShadow>
    )
}

const styles = StyleSheet.create({
    buttonRaw: {
        marginTop: 20
    },
    labels: {
        color: '#24292F',
        fontWeight: '900',
    },
    parentLabel: {
        marginTop: 10
    },
    optionButtonEdit: {
        flex: 1,
        backgroundColor: 'green',
        justifyContent: 'center'
    },
    optionButtonDelete: {
        flex: 1,
        backgroundColor: 'red',
        justifyContent: 'center'

    }
})
export default ConatctsCard;

