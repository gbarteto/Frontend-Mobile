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
import { Input } from 'react-native-elements';

export function Address() {


  const navigation = useNavigation<any>();

  const handleNavigateHome = () => {
    navigation.navigate("SignIn");
  };
  const handleNavigateConfirm = () => {
    navigation.navigate("Address2");
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
        <Text style={styles.label}>{"\n"}</Text>
        <Input 
          placeholder="Insira seu endereço"
          placeholderTextColor={theme.colors.primary}
          leftIcon = {{type: 'font-awesome', name: 'paper-plane', color: theme.colors.primary}}
          leftIconContainerStyle={{ marginRight: 8 }}
        />
      </View>

      <View style={styles.cities}>
        <Text style={styles.city}>São Paulo, São Paulo, Brasil{"\n"}</Text>
        <Text style={styles.description}>Localização Atual{"\n"}</Text>
      </View>
      <View style={styles.cities}>
        <Text style={styles.city}>São Bernardo do Campo, São Paulo, Brasil{"\n"}</Text>
        <Text style={styles.description}>Localização Atual{"\n"}</Text>
      </View>

      <View style={styles.cities}>
        <Text style={styles.city}>Guarulhos, São Paulo, Brasil{"\n"}</Text>
        <Text style={styles.description}>Localização Atual{"\n"}</Text>
      </View>

      <View style={styles.cities}>
        <Text style={styles.city}>Osasco, São Paulo, Brasil{"\n"}</Text>
        <Text style={styles.description}>Localização Atual{"\n"}</Text>
      </View>

      <View style={styles.cities}>
        <Text style={styles.city}>Santo André, São Paulo, Brasil{"\n"}</Text>
        <Text style={styles.description}>Localização Atual{"\n"}</Text>
      </View>

      <View style={styles.cities}>
        <Text style={styles.city}>São Caetano do Sul, São Paulo, Brasil{"\n"}</Text>
        <Text style={styles.description}>Localização Atual{"\n"}</Text>
      </View>


      <View style={styles.controlsbutons}>
        <Button title="Continuar"  onPress={handleNavigateConfirm} />
        <Text>{"\n"}</Text>
      </View>
      
    </SafeAreaView>
  );
}
