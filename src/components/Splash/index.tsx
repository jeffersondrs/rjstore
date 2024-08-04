import React from "react";
import { View, Image } from "react-native";

type SplashProps = {
  urlImage: string;
};

export default function Splash({ urlImage }: SplashProps) {
  return (
    <View className="flex-1 justify-center items-center p-1">
      <Image
        source={{ uri: urlImage }}
        className="w-full h-60 rounded-xl"
      />
    </View>
  );
}
