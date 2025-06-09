import { StatusBar } from "expo-status-bar";
import { View, Text, Alert, ActivityIndicator } from "react-native";
import { styles } from "./styles";
import { theme } from "../../global/styles/theme";
import logoSmall from "../../../assets/app-name-small.png";
import voltar from "../../../assets/voltar.png";
import { Button } from "../../components/Button";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { ButtonWhite } from "../../components/ButtonWhite";
import { useNavigation } from "@react-navigation/native";
import {Image} from "expo-image";
import { SafeAreaView } from "react-native-safe-area-context";

export function Address() {


  const navigation = useNavigation<any>();

  const handleNavigateHome = () => {
    navigation.navigate("SignIn");
  };
  const handleNavigateConfirm = () => {
    navigation.navigate("Confirm");
  };
  return (
    <SafeAreaView style={styles.container}>
        <View style={{width: "100%"}}>
        <Image source={logoSmall} style={styles.imageLogo} />
        <TouchableOpacity style={{
          width: 50, 
          height: 50,
        }} onPress={handleNavigateHome}>  
          <Image source={voltar} style={styles.imageVoltar} />
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>
          Para Começar,
         insira seu endereço {"\n"}
        </Text>
        <Text style={styles.label}>E-mail {"\n"}</Text>
        <TextInput
          style={styles.input}
          placeholder="Insira seu Endereço"
          placeholderTextColor={theme.colors.primary}
          maxLength={20}
        ></TextInput>
      </View>

      <View style={styles.controlsbutons}>
        <Button title="Continuar"  onPress={handleNavigateConfirm} />
        <Text>{"\n"}</Text>
        <ButtonWhite title="Retornar" onPress={handleNavigateHome}/>
      </View>
      
    </SafeAreaView>
  );
}
