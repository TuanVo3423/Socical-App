import { View, Text } from 'react-native';
import React from 'react';
import Header from '../components/home/Header';
import { SafeAreaView } from 'react-native-safe-area-context';
import Stories from '../components/home/Stories';

const HomeScreen = () => {
  return (
    <SafeAreaView className="flex-1 ">
      <Header />
      <Stories />
    </SafeAreaView>
  );
};

export default HomeScreen;
