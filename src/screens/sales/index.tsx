import { StatusBar } from "expo-status-bar";
import React from 'react';
import { View, Text, Image, Alert, FlatList, Dimensions } from "react-native";
import { styles } from "./styles";
import { theme } from "../../global/styles/theme";
import sacola from "../../../assets/sacola.png";
import banner from "../../../assets/banner.png";
import ryzen7 from "../../../assets/ryzen7.png";
import fone from "../../../assets/fone.png";
import macbook from "../../../assets/macbook.png";
import linha from "../../../assets/linha.png";
import { Button } from "../../components/Button";
import { TextInput } from "react-native-gesture-handler";
import { ButtonWhite } from "../../components/ButtonWhite";
import { useNavigation } from "@react-navigation/native";

export function Sales() {
    interface Props {
  image: string;
}
    const SectionItem = ({ image }: Props) => {
  return (
    <View>
      <Image
        source={image}
        style={{ width: '100%', height: 100 }}
        resizeMode="contain"    
      />
      <Text numberOfLines={1}>
        Lorem ipsum
      </Text>
      <Text numberOfLines={1}>
        Lorem ipsum dolor sit
      </Text>
      <Text>
        R$ 1.000,00
      </Text>
    </View>
  );
};
    const dados = [
        {title: 'Ryzen 7', price: 'R$ 2.500,00', image: ryzen7, store: 'Loja Barreto Store'},
        {title: 'Fone de Ouvido', price: 'R$ 500,00', image: fone, store: 'Loja Barreto Store'},
        {title: 'Macbook Pro', price: 'R$ 12.000,00', image: macbook, store: 'Loja Barreto Store'},
        {title: 'Ryzen 7', price: 'R$ 2.500,00', image: ryzen7, store: 'Loja Barreto Store'},
    ]

    return (
        <View style={styles.container}>
            <View style={{width: '97%', flexDirection: "row", justifyContent: "space-between"}}>
                <Text style={styles.title}>Home</Text>
                <Image source={sacola} style={styles.imageLogo}></Image>
            </View>
            <Image source={banner} style={styles.image} resizeMode="cover"/>
            <View style={styles.content}>
                <View style={styles.carroussel}>
                    <View style={styles.carrousseTitle}>
                        <Text style={{fontSize: 18, }}>Processador</Text>
                        <Text style={{fontSize: 12, color: theme.colors.primary}}> Ver tudo</Text>
                    </View>
                    <View style={styles.carrousselItems}>
                        
                    </View>
                </View>
                <FlatList
                    data={dados}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(_, index) => String(index)}
                    renderItem={({ item }) => <SectionItem image={item} />}
                />
                <View style={styles.footer}></View>
            </View>
        </View>
    )
}