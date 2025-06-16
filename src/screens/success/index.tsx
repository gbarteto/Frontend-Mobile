import { StatusBar } from "expo-status-bar";
import { View, Text, Image, Alert, ActivityIndicator } from "react-native";
import { styles } from "./styles";
import { theme } from "../../global/styles/theme";
import logoSmall from "../../../assets/app-name-small.png";
import { ButtonWhite } from "../../components/ButtonWhite";
import { useNavigation } from "@react-navigation/native";
import IllustrationImg from "../../../assets/like.png";
import { Button } from "../../components/Button";

export function Success() {
    const navigation = useNavigation<any>();

    const handleNavigateHome = () => {
        navigation.navigate("SignIn");
    };

    return (
        <View style={styles.container}>
            <Image source={logoSmall} style={styles.imageLogo} resizeMode="stretch" />
            <Image
                source={IllustrationImg}
                style={styles.image}
                resizeMode="stretch"
            />
            <View style={styles.content}>
                <Text style={{width: "100%", fontSize: 36, textAlign: "center", color: theme.colors.secondary100, fontWeight: "bold"}}>
                    Seu perfil foi criado com sucesso!{"\n"}
                </Text>
                <Text style={styles.label}>
                    Realize o login com as credenciais inseridas {"\n"}
                    nos passos anteriores.
                </Text>
            </View>

            <View style={styles.controlsbutons}>
                <Button title="Entrar" onPress={handleNavigateHome} />
            </View>

        </View>
    );
}
