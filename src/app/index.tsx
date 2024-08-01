import React from "react";
import { View, ScrollView, SafeAreaView } from "react-native";
import { Product } from "../components";
import { FlashList } from "@shopify/flash-list";
import { data as products } from "../utils/data";

export default function Layout() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView className="w-full h-full flex-col">
        <View className="h-80">
          <FlashList
            data={products}
            renderItem={({ item }) => (
              <Product
                title={item.name}
                price={item.price}
                urlImage={item.url}
                discount={item.discount}
                percentage={item.percentage}
              />
            )}
            keyExtractor={(item) => item.id.toString()}
            ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
            horizontal
            contentContainerStyle={{ paddingHorizontal: 10 }}
            showsHorizontalScrollIndicator={false}
            estimatedItemSize={200}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
