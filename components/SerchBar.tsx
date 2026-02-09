import { icons } from '@/constants/icons';
import React from 'react';
import { Image, StyleSheet, TextInput, View } from 'react-native';

interface Props {
  placeholder: string;
  onPress: () => void;
}

const SerchBar = ({ onPress, placeholder }: Props) => {
  return (
    <View className='flex-row items-center bg-dark-200 rounded-full px-5 py-4'>
      <Image source={icons.search} className='size-5' tintColor='#ab8bff' />

      <TextInput
        onPress={onPress}
        placeholder={placeholder}
        value=''
        onChangeText={() => {}}
        placeholderTextColor='#a8b6db'
        className='flex-1 ml-2 text-white'
      />
    </View>
  );
};

export default SerchBar;

const styles = StyleSheet.create({});
