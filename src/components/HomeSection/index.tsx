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
      <View style={{marginVertical: 10, marginHorizontal: 5, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end'}}>
        <Text style={{fontSize:18}}>{title}</Text>
        <TouchableOpacity>
          <Text>Ver tudo</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        style={{ flexGrow: 0, marginBottom: 10 }}
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