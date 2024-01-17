import { useEffect } from "react"
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native"


const Screen1 = ({navigation}) => {
    useEffect(()=>{
        console.log("Screen1: Mount")
        return () => {
            console.log("Screen1: Unmount")
        }
    }, [])
    const handlePress = () =>{
        navigation.navigate("Screen2", {key: "coming from first screen"});
        // navigation.goBack()
    }
    return (
        <SafeAreaView style={styles.safeAreaContainer}>
            <View style={styles.parentContainer}>
                <Text style={styles.screenName}> Screen 1 </Text>
                <TouchableOpacity onPress={handlePress} style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>Go To Screen 2</Text>
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

export default Screen1;