import { StatusBar } from "expo-status-bar";
import { View, Text, Alert, ActivityIndicator } from "react-native";
import { styles } from "./styles";
import { theme } from "../../global/styles/theme";
import logoSmall from "../../../assets/app-name-small.png";
import voltar from "../../../assets/voltar.png";
import { Button } from "../../components/Button";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import {Image} from "expo-image";
import { SafeAreaView } from "react-native-safe-area-context";
import { Input } from 'react-native-elements';
import  MaskInput  from 'react-native-mask-input';
import React from "react";

export function Account() {

  const navigation = useNavigation<any>();
  const [phone, setPhone] = React.useState('');


  const handleNavigateHome = () => {
    navigation.navigate("Personal");
  };
  const handleNavigateConfirm = () => {
    navigation.navigate("Photo");
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
                Insira os dados da sua conta 
            </Text>
            

            <Text style={styles.label}>E-mail*</Text>
            <TextInput
                style={styles.input}
                placeholder="Insira seu e-mail"
                placeholderTextColor={theme.colors.primary}
            />
            <Text style={styles.label}>Nome de usuário*</Text>
            <TextInput
                style={styles.input}
                placeholder="Insira seu nome de usuário"
                placeholderTextColor={theme.colors.primary}
            />
            <Text style={styles.label}> Senha*</Text>
            <TextInput
                style={styles.input}
                placeholder="Insira sua senha"
                placeholderTextColor={theme.colors.primary}
            />
            <Text style={styles.label}>Confirme a senha*</Text>
            <TextInput
                style={styles.input}
                placeholder="Insira sua senha"
                placeholderTextColor={theme.colors.primary}
            />
        </View>

        <View style={styles.controlsbutons}>
            <Button title="Continuar"  onPress={handleNavigateConfirm} />
            <Text></Text>
        </View>
      
    </SafeAreaView>
  );
}
