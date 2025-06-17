import React, { Text, View, Image, ImageSourcePropType } from "react-native";
import { theme } from "../../global/styles/theme";

interface Props {
   image: ImageSourcePropType;
}

const SectionItem = ({ image }: Props) => {
   return (
      <View style={{alignItems: "center", marginRight: 16}}>
         <Image
            source={image}
            style={{ width: "100%", height: 100 }}
            resizeMode="contain"
         />
         <Text style={{fontSize: 16, fontWeight: "bold", color: theme.colors.text}} numberOfLines={1}>Lorem ipsum</Text>
         <Text style={{fontSize: 12}} numberOfLines={1}>Lorem ipsum dolor sit</Text>
         <Text style={{color: theme.colors.secondary100, fontWeight: '600'}}>R$ 1.000,00</Text>
      </View>
   );
};

export default SectionItem;