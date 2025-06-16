import { StatusBar } from "expo-status-bar";
import { View, Text, Image, Alert, ActivityIndicator } from "react-native";
import { styles } from "./styles";
import { theme } from "../../global/styles/theme";
import sacola from "../../../assets/sacola.png";
import banner from "../../../assets/banner.png";
import facebook from "../../../assets/facebook.png";
import google from "../../../assets/google.png";
import linha from "../../../assets/linha.png";
import { Button } from "../../components/Button";
import { TextInput } from "react-native-gesture-handler";
import { ButtonWhite } from "../../components/ButtonWhite";
import { useNavigation } from "@react-navigation/native";

export function Sales() {
    return (
        <View style={styles.container}>
            <View style={{flexDirection: "row", justifyContent: "space-evenly"}}>
                <Text style={styles.title}>Home</Text>
                <Image source={sacola} style={styles.imageLogo}></Image>
            </View>
            <Image source={banner} style={styles.image}/>
        </View>
    )
}