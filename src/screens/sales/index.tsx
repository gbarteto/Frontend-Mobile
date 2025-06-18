import React from "react";
import { ScrollView,View, Text, Image } from "react-native";
import { styles } from "./styles";
import { theme } from "../../global/styles/theme";
import sacola from "../../../assets/sacola.png";
import banner from "../../../assets/banner.png";
import ryzen7 from "../../../assets/ryzen7.png";
import fone from "../../../assets/fone.png";
import macbook from "../../../assets/macbook.png";
import home from "../../../assets/Vector.png";
import icon1 from "../../../assets/Grupo414.png";
import icon2 from "../../../assets/Group.png";
import foto from "../../../assets/perfil.png";

import HomeSection from "../../components/HomeSection";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";

const PROCESSADORES = [ryzen7, ryzen7, ryzen7, ryzen7, ryzen7];
const FONES = [fone, fone, fone, fone, fone];
const MACBOOKS = [macbook, macbook, macbook, macbook, macbook];

export function Sales() {
   return (

      <SafeAreaView style={styles.container}>
         <View
            style={{
               width: "97%",
               flexDirection: "row",
               justifyContent: "space-between",
            }}
         >
            <Text style={styles.title}>Home</Text>
            <Image source={sacola} style={styles.imageLogo}></Image>
         </View>
         <ScrollView
            showsVerticalScrollIndicator={false}
         >
         <Image source={banner} style={styles.image} resizeMode="cover" />

         <HomeSection data={MACBOOKS} />
         <HomeSection data={PROCESSADORES} title="Processadores" />
         <HomeSection data={FONES} title="Fones" />
      </ScrollView>
         <LinearGradient 
            colors={['#8628E2', '#6C16E1', '#5205E0']}
            style={styles.footer}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}>
            <Image style={styles.icon} source={home} />
            <Image style={styles.icon}  source={icon1} />
            <Image style={styles.icon}  source={icon2} />
            <Image style={styles.icon}  source={foto} />
         </LinearGradient>
      
      </SafeAreaView>
   );
}