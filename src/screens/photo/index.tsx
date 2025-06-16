import { StatusBar } from "expo-status-bar";
import { View, Text, Image, Alert, ActivityIndicator } from "react-native";
import { styles } from "./styles";
import { theme } from "../../global/styles/theme";
import logoSmall from "../../../assets/app-name-small.png";
import { Button } from "../../components/Button";
import { ButtonWhite } from "../../components/ButtonWhite";
import { useNavigation } from "@react-navigation/native";
import Profile from "../../../assets/profile_empty.png";
import * as ImagePicker from "expo-image-picker";
import React, { useState } from "react";

export function Photo() {
  const navigation = useNavigation<any>();
  const [photo, setPhoto] = useState<string | null>(null);


  const handleNavigateContinue = () => {
    navigation.navigate("Success");
  };

  const handlePress = async () => {
    const {status} = await ImagePicker.requestMediaLibraryPermissionsAsync(); //Permissao para acessar galeria
    if (status !== "granted") {
        Alert.alert("Permissão negada, você deve permitir acesso para continuar.");
        return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1], // Quadrada
        quality: 1,
    })

    if (!result.canceled) {
      setPhoto(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={logoSmall} style={styles.imageLogo} resizeMode="stretch" />
      <Text style={styles.title}>
        Seu perfil foi criado com sucesso! {"\n"}
      </Text>

      <Image 
        source={photo ? { uri: photo } : Profile}
        style={styles.image}
        resizeMode="cover"    
        />

      <View style={styles.content}>
        <Text
          style={[
            styles.subtitle,
            { color: "#007BFF", textDecorationLine: "underline" },
          ]}
          onPress={handlePress}
        >
          {" "}
          Selecionar foto de perfil
        </Text>
      </View>

      <View style={styles.controlsbutons}>
        <Button title="Continuar" onPress={handleNavigateContinue} />
        <Text>{"\n"}</Text>
        <ButtonWhite
          title="Pular esta etapa"
          onPress={handleNavigateContinue}
        />
      </View>
    </View>
  );
}