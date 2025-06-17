import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

import SectionItem from '../SectionItem';

interface Props {
  title?: string;
  data?: string[];
}

const HomeSection = ({ title = 'Notebooks', data = [] }: Props) => {
  return (
    <View>
      <View>
        <Text>{title}</Text>
        <TouchableOpacity>
          <Text>Ver tudo</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 24,
          gap: 16,
        }}
        keyExtractor={(_, index) => String(index)}
        renderItem={({ item }) => <SectionItem image={item} />}
      />
    </View>
  );
};

export default HomeSection;