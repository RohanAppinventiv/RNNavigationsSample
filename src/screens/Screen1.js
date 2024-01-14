import { Button, SafeAreaView, Text, TouchableHighlight, TouchableOpacity, View } from "react-native"


const Screen1 = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 24, fontWeight: '600', color: '#176d98' }}> Screen 1 </Text>
                <TouchableOpacity style={{ height: 40, backgroundColor: '#0f4965', justifyContent:'center', paddingHorizontal: 100, borderRadius: 10}}>
                    <Text style={{ fontSize: 18, fontWeight: '600', color: 'white' }}>Next</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default Screen1;