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

export function Personal() {

  const navigation = useNavigation<any>();
  const [phone, setPhone] = React.useState('');


  const handleNavigateHome = () => {
    navigation.navigate("Address2");
  };
  const handleNavigateConfirm = () => {
    navigation.navigate("Account");
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
                Insira seus dados pessoais 
            </Text>
            

            <Text style={styles.label}>Nome*</Text>
            <TextInput
                style={styles.input}
                placeholder="Insira seu nome"
                placeholderTextColor={theme.colors.primary}
            />
            <Text style={styles.label}>Sobrenome*</Text>
            <TextInput
                style={styles.input}
                placeholder="Insira seu sobrenome"
                placeholderTextColor={theme.colors.primary}
            />
            <Text style={styles.label}>Celular*</Text>
            <TextInput
                style={styles.input}
                placeholder="Insira seu celular"
                placeholderTextColor={theme.colors.primary}
            />
            <Text style={styles.label}>Telefone*</Text>
            <MaskInput
                style={styles.input}
                value={phone}
                onChangeText={(masked, unmasekd)=>{
                    setPhone(masked)
                }}
                mask = {[ '(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/ ]}
                placeholder="Insira seu telefone"
                placeholderTextColor={theme.colors.primary}
                keyboardType={"phone-pad"}
            />
        </View>

        <View style={styles.controlsbutons}>
            <Button title="Continuar"  onPress={handleNavigateConfirm} />
            <Text></Text>
        </View>
      
    </SafeAreaView>
  );
}
