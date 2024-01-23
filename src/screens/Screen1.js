import { useEffect } from "react"
import { SafeAreaView, StyleSheet } from "react-native"
import { Column, ColumnSurface } from "../components/Surface"
import { H4 } from "../components/Texts"
import ContactsList from "../components/ContactsFlatList"
import OperationType from "../Utils/OperationType"
import { useDispatch, useSelector } from "react-redux"
import { FlatButton, RoundedButton } from "../components/Buttons"
import { deleteContact } from "../store/slices/contactSlice"


const ListingScreen = ({ navigation }) => {
    const dispatch = useDispatch()
    const list = useSelector((state) => state.contacts.data)
   
    const handlePress = (type, index) => {
        if (type == OperationType.DELETE) {
            dispatch(deleteContact(index))
        } else {
            navigation.navigate("form", { operationType: type, index: index });
        }
    }

    return (
        <SafeAreaView style={styles.safeAreaContainer}>
            {list.length > 0 ? <DataLayout /> : <NoItemLayout />}
        </SafeAreaView>
    )

    function DataLayout() {
        return (
            <Column>
                <ContactsList list={list} callback={(type, index) => handlePress(type, index)} />
                <FlatButton text={"Add"} onPress={() => handlePress(OperationType.ADD, -1)} />
            </Column>
        )
    }

    function NoItemLayout() {
        return (
            <ColumnSurface style={styles.columnSurface}>
                <H4>No Records Found!</H4>
                <RoundedButton style={styles.noDataButton} text={"Add"} onPress={() => handlePress(OperationType.ADD, -1)} />
            </ColumnSurface>
        )
    }
}


const styles = StyleSheet.create({
    safeAreaContainer: {
        flex: 1
    },
    columnSurface: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    noDataButton: {
        width: 200,
        marginTop: 10
    }
})

export default ListingScreen;