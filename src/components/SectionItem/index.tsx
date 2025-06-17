import React, { Text, View, Image } from 'react-native';

interface Props {
  image: string;
}

const SectionItem = ({ image }: Props) => {
  return (
    <View>
      <Image
        src={image}
        style={{ width: '100%', height: 100 }}
        resizeMode="contain"
      />
      <Text numberOfLines={1}>Lorem ipsum</Text>
      <Text numberOfLines={1}>Lorem ipsum dolor sit</Text>
      <Text>R$ 1.000,00</Text>
    </View>
  );
};

export default SectionItem;