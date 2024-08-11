import { MaterialIcons } from "@expo/vector-icons";
import { Pressable, StyleSheet,Text } from "react-native";


export default function IconButton({icon,label,onPress}) {
    return (
        <Pressable style={styles.IconButton} onPress={onPress}>
            <MaterialIcons name={icon} size={24} color="#000000"/>
            <Text style={styles.iconButtonLabel}>{label}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    IconButton:{
        justifyContent:'center',
        alignItems:'center',
    },
    iconButtonLabel:{
        color:'#000000',
        marginTop:12,
    }
});