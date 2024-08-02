import Reat from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

type ButtonProps = {
  title: string;
  onPress: () => void;
};

export default function Button({ title, onPress }: ButtonProps) {
  return (
    <TouchableOpacity
      className="bg-sky-600 text-white px-4 py-2 rounded-lg mx-2 w-full"
      onPress={onPress}
    >
      <Text className="text text-center text-gray-50 font-medium tracking-wider">{title}</Text>
    </TouchableOpacity>
  );
}