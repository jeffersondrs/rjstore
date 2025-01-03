import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

type ButtonProps = {
  onPress?: () => void;
  className?: string;
  children?: React.ReactNode;
};

export default function Button({ onPress, className, children }: ButtonProps) {
  return (
    <TouchableOpacity className={`${className}`} onPress={onPress}>
      <Text className="text text-center text-gray-50 font-medium tracking-wider">
        {children}
      </Text>
    </TouchableOpacity>
  );
}
