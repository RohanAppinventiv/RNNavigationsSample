import { useEffect } from "react"
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native"


const Screen4 = ({navigation}) => {
    useEffect(()=>{
        console.log("Screen4: Mount")
        return () => {
            console.log("Screen4: Unmount")
        }
    }, [])
    const handlePress = () =>{
        navigation.popToTop()
    }
    return (
        <SafeAreaView style={styles.safeAreaContainer}>
            <View style={styles.parentContainer}>
                <Text style={styles.screenName}> Screen 4</Text>
                <TouchableOpacity onPress={handlePress} style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>Go Back</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safeAreaContainer: {
        flex: 1
    },
    parentContainer: { 
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center'
     }, 
    screenName: { 
        fontSize: 24, 
        fontWeight: '600', 
        color: '#176d98' 
    },
    buttonContainer: { 
        height: 40, 
        backgroundColor: '#0f4965', 
        justifyContent:'center', 
        paddingHorizontal: 100,
        borderRadius: 10
    },
    buttonText: { 
        fontSize: 18, 
        fontWeight: '600', 
        color: 'white' 
    }
})

export default Screen4;