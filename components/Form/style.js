import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    addTask: {
        flexDirection:'row',
        bottom:30,
        paddingHorizontal:20,
        width:'100%',
    },
    input: {
        height:44,
        width:'86%',
        backgroundColor:'#fff',
        borderRadius:8,
        paddingHorizontal:8,
    },
    iconWrapper: {
        marginLeft:10,
        backgroundColor:'blue',
        borderRadius:50,
        height:44,
        width:44,
        justifyContent:'center',
        alignItems:'center',
    },
    icon: {
        color:'#fff',
        fontSize:20,
    },
});

export default styles;