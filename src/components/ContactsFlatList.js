import { Button, FlatList, View, TouchableOpacity } from "react-native"
import ConatctsCard from "./ContactsCard"
import OperationType from "../Utils/OperationType"


function ContactsList({ list, callback }) {

    const handleCallback = (type, index) => {
        callback(type, index)
    }
    const ItemSeperator = () => (
        <View 
        style={{ height: 1, width: '100%', backgroundColor: '#F6F7F9' }}
        />
    )
    return (
        <FlatList
            style={{ flex: 0.9 }}
            ItemSeparatorComponent={ItemSeperator}
            showsVerticalScrollIndicator={false}
            bounces={false}
            data={list}
            renderItem={({ item, index }) => <ConatctsCard item={item} index={index} contactCallback={(type, index)=> handleCallback(type, index)} />}
        />

    )
}

export default ContactsList;

/**
 * [
 *   {
 *      id: 'timestamp',
 *      name: '',
 *      email: '',
 *      phone: ''
 *   }
 * 
 * ]
 * 
 * 
 */