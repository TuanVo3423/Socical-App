import { View, Text } from 'react-native';
import React from 'react';
import Header from '../components/Header';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = () => {
  return (
    <SafeAreaView className="flex-1 ">
      <Header />
    </SafeAreaView>
  );
};

export default HomeScreen;
