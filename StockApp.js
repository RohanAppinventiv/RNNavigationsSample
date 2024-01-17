import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DashboardScreen from './src/screens/Dashboard';
import DrawerIconLeft from './src/components/DrawerIcons';
import ToolbarIconGroup from './src/components/ToolbarIconGroup';
import { createContext, useState } from 'react';
import LeaderboardScreen from './src/screens/Leaderboard';

const Drawer = createDrawerNavigator();
export const AppContext = createContext()

export default function StockApp() {
    const [currentAmount, setAmount] = useState(0)
    return (
        <AppContext.Provider  value={{ currentAmount, setAmount }}>
            <NavigationContainer>
                <Drawer.Navigator screenOptions={({ navigation }) => ({
                    headerRight: () => <ToolbarIconGroup/>,
                    headerLeft: () => <DrawerIconLeft navigation={navigation} />
                })}>
                    <Drawer.Screen
                        name="Dashboard"
                        component={DashboardScreen}
                        options={{
                            drawerLabel: 'Dashboard',
                            title: ''
                        }}
                    />
                    <Drawer.Screen 
                        name="Leaderboard"
                        component={LeaderboardScreen}
                        options={{
                            drawerLabel: 'Leaderboard',
                            title: ''
                        }}

                    />

                </Drawer.Navigator>
            </NavigationContainer>
        </AppContext.Provider>
    )
}