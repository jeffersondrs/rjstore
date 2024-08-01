import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

type ProductProps = {
  title: string;
  price: number;
  urlImage: string;
  discount: boolean;
  percentage: number;
};

export default function Product({
  title,
  price,
  urlImage,
  discount,
  percentage,
}: ProductProps) {
  return (
    <View className="w-48 shadow-gray-500 shadow-sm rounded-lg relative h-72 overflow-hidden bg-white flex flex-col justify-between items-center">
      <Image
        className="w-full h-48 object-cover object-center rounded-t-lg"
        source={{
          uri: urlImage,
        }}
      />
      <View className="items-start justify-evenly flex flex-col w-full h-12 px-1">
        <View className="flex-row items-center justify-between w-full">
          {discount && (
            <Text className="text-sm text-blue-500 font-bold">
              R$ {price - (price * percentage) / 100}/un
            </Text>
          )}
          <Text
            className={`
          text-sm
          ${discount ? "line-through text-gray-400" : "text-gray-900 font-bold"}
          `}
          >
            R$ {price}/un
          </Text>
        </View>
        <Text className="text-xs">{title}</Text>
      </View>
      <View className="p-2 w-full h-12 flex flex-row items-center justify-center ">
        <TouchableOpacity
          className="bg-sky-600 text-white px-4 py-2 rounded-lg mx-2 w-full "
          onPress={() => {}}
        >
          <Text className="text text-center text-gray-50 font-medium ">
            Adicionar
          </Text>
        </TouchableOpacity>
      </View>
      <View className="absolute top-1 right-1 rounded-tr-lg">
        {discount && (
          <View className="relative justify-center items-center">
            <MaterialIcons name="local-offer" size={48} color="#0099e5" />
            <Text className="absolute text-xs text-gray-50">{percentage}%</Text>
          </View>
        )}
      </View>
    </View>
  );
}
