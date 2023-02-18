import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';

const Header = () => {
  return (
    <View className="my-2 flex-row items-center justify-between px-2">
      <TouchableOpacity>
        <Image
          style={{ height: 50, resizeMode: 'contain', marginLeft: -15 }}
          source={require('../../assets/images/logo-instagram.png')}
        />
      </TouchableOpacity>
      <View className="flex-row gap-x-2">
        <TouchableOpacity>
          <Image
            style={{ width: 30, height: 30 }}
            source={require('../../assets/images/newicon.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={{ width: 30, height: 30 }}
            source={require('../../assets/images/heart.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Text className="absolute z-[1] bottom-4 left-4 bg-red-600 h-5 w-5 text-center text-white rounded-2xl">
            11
          </Text>
          <Image
            style={{ width: 30, height: 30 }}
            className="relative"
            source={require('../../assets/images/message.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
