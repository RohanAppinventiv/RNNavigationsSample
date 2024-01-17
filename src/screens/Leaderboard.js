import { useContext } from "react";
import { SafeAreaView } from "react-native";
import { Text, View } from "react-native";
import { AppContext } from "../../StockApp";


export default function LeaderboardScreen(){
    console.log("Rendering: LeaderboardScreen")

    const {currentAmount, setAmount} = useContext(AppContext)
    return(
        <SafeAreaView style={{flex: 1}}>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text onPress={() => setAmount(prevValue => prevValue + 1)}>Leaderboard: {currentAmount}</Text>
            </View>
        </SafeAreaView>
    )
}