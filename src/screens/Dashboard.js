import React, { memo, useContext, useEffect, useMemo } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { Text, View } from "react-native";
import { AppContext } from "../../StockApp";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import MarketScreen from "./Market";
import RecentScreen from "./Recents";
import BoxShadow from "../components/BoxShadow";
import { H1, H2, H3, H4, H5, H6 } from "../components/Texts";
import { Column, ColumnSurface, Row, RowSurface } from "../components/Surface";
import BarChart from "../components/BarChart";
import DataSource from "../source";

const Tab = createMaterialTopTabNavigator()

export default function DashboardScreen() {
    console.log("Rendering: Dashboard")

    const { currentAmount, setAmount } = useContext(AppContext)

    const chartData = DataSource.graphData
   
    return (
        <SafeAreaView style={styles.surface}>
            <ColumnSurface>
                <BoxShadow>
                    <H5>Current Balance <Text style={{ color: "#7F8BEF" }}>(USD)</Text></H5>
                    <H1>${(currentAmount * 13233).toLocaleString("en-US")}</H1>
                    <H6 style={{ color: '#D9DBE4' }}>Last update yesterday</H6>
                     <BarChart 
                      data ={chartData.data}
                      baseCanvasHeight = {chartData.baseCanvasHeight}
                      isAxisShown = {chartData.isAxisShown}
                      _barColors = {chartData._barColors}
                      xAxisItemBlockWidth = {chartData.xAxisItemBlockWidth}
                      maxBarWidth = {chartData.maxBarWidth}
                     />
                </BoxShadow>
                <Tab.Navigator style={{ flex: 1 }} initialRouteName="Market" screenOptions={{
                    tabBarLabelStyle: { fontSize: 16, fontWeight: '600', textTransform: 'capitalize' },
                    tabBarItemStyle: { flex: 1 },
                    tabBarPressOpacity: 0.2,
                    tabBarAndroidRipple: { borderless: true },
                    tabBarPressColor: "white",
                }}>
                    <Tab.Screen name="Market" component={MarketScreen} />
                    <Tab.Screen name="Recents" component={RecentScreen} />

                </Tab.Navigator>
            </ColumnSurface>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    surface: { flex: 1 },
    section1: {
        flex: 1,
    },
    section2: {
        flex: 1,
    }
})