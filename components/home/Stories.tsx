import { View, Text, FlatList, Image, ScrollView } from 'react-native';
import React, { useState, useLayoutEffect } from 'react';
import { UserStoriesData } from '../../datas';

const Stories = () => {
  const [data, setData] = useState<UserStories[]>([]);
  useLayoutEffect(() => {
    setData(UserStoriesData);
  }, []);
  return (
    <View className="px-4">
      <ScrollView
        className=" flex-row"
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {data.map((item, index) => {
          return (
            <View className="items-center justify-center" key={index}>
              <Image
                style={{
                  resizeMode: 'contain',
                  height: 70,
                  width: 70,
                  borderWidth: 3,
                  borderColor: '#ff8501',
                  marginLeft: 6,
                }}
                className="rounded-full "
                source={require('../../assets/images/logo-instagram.png')}
              />
              <Text className="text-black font-semibold">
                {item.name.length > 8
                  ? item.name.slice(0, 8) + '...'
                  : item.name}
              </Text>
            </View>
          );
        })}
      </ScrollView>

      {/* <FlatList
        data={UserStoriesData}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <View>
            <Image className="h-10 w-10" source={require()} />
            <Text>{item.image}</Text>
          </View>
        )}
      /> */}
    </View>
  );
};

export default Stories;
