import React from "react";
import { StyleSheet, Text, View, TouchableOpacity} from "react-native";
import BudgetScreen from '../screens/budgetScreen';


export default function BudgetItem({item}){
    const budgetPressHandler = () => {
        console.log(item.nameb)
    }
    
    return(
        <TouchableOpacity
            onPress={budgetPressHandler}
        >
            <View style={Styles.budgetItemView}>
                <Text style={Styles.budgetText}> {item.nameb} </Text>
                <Text style={Styles.budgetText}> {item.amount} </Text>
            </View>
        </TouchableOpacity>
    );
}

const Styles = StyleSheet.create({
    budgetItemView: {
        padding: 10,
        backgroundColor: 'red',
        flexDirection:'row',
        alignContent: 'center',
        justifyContent: 'space-evenly',
    },
    budgetText: {
        padding: 10,
        backgroundColor: 'yellow',
        fontSize: 30,
        justifyContent: 'center',
        alignContent: 'center',
    },

});