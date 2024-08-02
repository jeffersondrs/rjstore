import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";

type CategoryProps = {
  title: string;
  urlImage: string;
};

export default function Category({ title, urlImage }: CategoryProps) {
  return (
    <TouchableOpacity className="w-48 shadow-gray-500 shadow-sm rounded-lg relative h-52 overflow-hidden bg-white flex flex-col justify-between items-center">
      <Image
        className="w-full h-36 object-cover object-center rounded-t-lg"
        source={{
          uri: urlImage,
        }}
      />
      <View className="items-center justify-evenly flex flex-col w-full h-12 px-1">
        <Text className="text-base font-bold tracking-widest">{title}</Text>
      </View>
    </TouchableOpacity>
  );
}