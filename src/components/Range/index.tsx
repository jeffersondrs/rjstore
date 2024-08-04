import React from "react";
import { View, Text } from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

type RangeProps = {
  title: string;
  icon: string;
};

export default function Range({ title, icon }: RangeProps) {
  return (
    <View className="mx-1 justify-evenly items-center shadow-slate-400 shadow-lg bg-gray-50 rounded-lg h-8 flex-row">
      <Text className="text-sm">
        <FontAwesome6
          name={icon as typeof FontAwesome6.defaultProps.name}
          size={16}
          color="black"
        />
      </Text>
      <Text className="text-sm font-bold">{title}</Text>
    </View>
  );
}
