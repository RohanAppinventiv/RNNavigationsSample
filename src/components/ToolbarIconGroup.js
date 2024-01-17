import { StyleSheet, View } from "react-native"
import RoundedIcon from "./RoundedIcon"
import { memo } from "react"


const ToolbarIconGroup = memo(function ToolbarIconGroup() {
    console.log("Rendering: Toolbar")
    return (
        <View style={styles.container}>
            <RoundedIcon
                imagePath= {require('../../assets/plus.png')}
                outerContainerStyle={styles.imageAddParent}
                innerImageStyle={styles.imageAdd}
            />

            <RoundedIcon
                imagePath= {require('../../assets/notification.png')}
                outerContainerStyle={styles.imageNotificationParent}
                innerImageStyle={styles.imageNotification}
            />
            <RoundedIcon
                imagePath= {require('../../assets/avatar.png')}
                outerContainerStyle={styles.imgAvatarParent}
                innerImageStyle={styles.imgAvatar}
            />

        </View>
    )
})


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginHorizontal: 12,
    },
    imageAddParent: {
        backgroundColor: '#E9EBFD'
    },
    imageAdd: {
        tintColor: "#5b64cc"
    },
    imageNotificationParent: {
        backgroundColor: '#ffffff',
        borderColor: '#F6F7F9'
    },
    imageNotification: {
        tintColor: "#000000"
    },
    imgAvatarParent: {
        backgroundColor: '#E9EBFD',
    },
    imgAvatar: {
        width: 32,
        height: 32,
    }

})

export default ToolbarIconGroup;