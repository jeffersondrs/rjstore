import React from "react";
import {
  View,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Text,
} from "react-native";
import { CardProduct, CardCategory } from "../components";
import { FlashList } from "@shopify/flash-list";
import { data as products } from "../utils/data";
import counterStore from "../store/store";
import { observer } from "mobx-react-lite";

const CounterComponent = observer(() => {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView className="w-full h-full flex-col">
        <View className="h-80">
          <FlashList
            data={products}
            renderItem={({ item }) => (
              <CardProduct
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
        <View className="h-80">
          <FlashList
            data={products}
            renderItem={({ item }) => (
              <CardCategory title={item.name} urlImage={item.url} />
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
});

export default CounterComponent;
