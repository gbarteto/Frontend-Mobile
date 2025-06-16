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

export function Address2() {

  const navigation = useNavigation<any>();
  const [cep, setCep] = React.useState('');


  const handleNavigateHome = () => {
    navigation.navigate("Address");
  };
  const handleNavigateConfirm = () => {
    navigation.navigate("Personal");
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
                placeholder="São Paulo, São Paulo, Brasil"
                placeholderTextColor={theme.colors.secondary100}
                leftIcon = {{type: 'font-awesome', name: 'paper-plane', color: theme.colors.primary}}
                leftIconContainerStyle={{ marginRight: 8 }}
            />
            
            <Text style={styles.label}>{"\n"}CEP*</Text>
            <MaskInput
                style={styles.input}
                value={cep}
                onChangeText={(masked, unmasekd)=>{
                    setCep(masked)
                }}
                mask = {[ /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/ ]}
                keyboardType={"phone-pad"}
                placeholder="Digite seu cep"
                placeholderTextColor={theme.colors.primary}
            />

            <Text style={styles.label}>{"\n"}Endereço*</Text>
            <TextInput
                style={styles.input}
                placeholder="Insira seu Endereço"
                placeholderTextColor={theme.colors.primary}
            />
            <Text style={styles.label}>{"\n"}Número*</Text>
            <TextInput
                style={styles.input}
                placeholder="Insira seu número"
                placeholderTextColor={theme.colors.primary}
            />
            <Text style={styles.label}>{"\n"}Complemento</Text>
            <TextInput
                style={styles.input}
                placeholder="Insira seu complemento"
                placeholderTextColor={theme.colors.primary}
            />
        </View>

        <View style={styles.controlsbutons}>
            <Button title="Continuar"  onPress={handleNavigateConfirm} />
            <Text>{"\n"}</Text>
        </View>
      
    </SafeAreaView>
  );
}
