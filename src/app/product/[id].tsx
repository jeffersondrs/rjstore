import React from 'react';
import { View, Text, Image } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { data as products } from '../../utils/data';

export default function Product() {
  const { id } = useLocalSearchParams();
  const product = products.find((product) => product.id === Number(id));

  if (!product) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text className="text-lg font-bold">Product not found {id}</Text>
      </View>
    );
  }

  return (
    <View className="flex-1 items-center">
      <View className="w-full p-4 bg-black">
        <Text className="text-lg text-gray-50">
          Product: {product.name}
        </Text>
      </View>
      <Image
        className="w-full h-full max-h-60 object-cover object-center rounded-lg"
        source={{ uri: product.url }}
      />
      <Text className="text-lg font-bold">{product.name}</Text>
      <Text className="text-sm text-gray-400">{product.url}</Text>
      <Text className="text-lg font-bold text-blue-500">
        R$ {product.price}
      </Text>
    </View>
  );
}
