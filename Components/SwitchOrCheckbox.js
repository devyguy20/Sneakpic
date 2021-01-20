import React,{useState} from 'react'
import { StyleSheet, Text, View,Platform,CheckBox } from 'react-native'
import { Switch } from 'react-native-gesture-handler';

const SwitchOrCheckbox = ({setSubmit}) => {

    const [isSelected, setSelection] = useState(false);
    const toggleSelect =() => {
        setSelection(!isSelected)
        setSubmit(isSelected)
    }
    
    const switchOrBox = () => {
        if(Platform.OS == 'android'){
            return <CheckBox           
            value={isSelected}
            onValueChange={toggleSelect}
            style={styles.checkbox}/>
           
        }
        else{
            return <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={isSelected ? "#f5dd4b" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSelect}
                value={isSelected}
                />
        }
    }


    return (
        <View>
            {switchOrBox()}
        </View>
    )
}

export default SwitchOrCheckbox

const styles = StyleSheet.create({})
