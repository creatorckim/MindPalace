import { View, Text, TouchableOpacity } from "react-native";


function HomeScreen({navigation, route}) {
    return(
        <View>
            <Text>homescreen</Text>
            <TouchableOpacity
                onPress={() => navigation.navigate({name: 'CalendarScreen'})}
            >
                <Text>Calendar</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate({name: 'AddScreen'})}
            >
                <Text>Add</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate({name: 'SettingScreen'})}
            >
                <Text>Setting</Text>
            </TouchableOpacity>
        </View>
    )
}

export default HomeScreen;