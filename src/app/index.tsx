import React from 'react';
import { View, ScrollView, SafeAreaView } from 'react-native';
import {
  CardProduct,
  CardCategory,
  Banner,
  Splash,
  Range,
  Button,
} from '../components';
import { FlashList } from '@shopify/flash-list';
import { data as products, categoryData } from '../utils/data';
import { observer } from 'mobx-react-lite';
import { Link } from 'expo-router';

const Index = observer(() => {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView className="w-full h-full flex-col">
        <View className="flex-col justify-center items-center h-[330px]">
          <FlashList
            data={products}
            renderItem={({ item }) => (
              <CardProduct
                id={item.id}
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
            contentContainerStyle={{ paddingHorizontal: 5 }}
            showsHorizontalScrollIndicator={false}
            estimatedItemSize={200}
          />
        </View>
        <View className="w-full rounded-xl relative">
          <Banner />
        </View>
        <Button className="text-gray-50 font-bold text-lg rounded-sm py-2 bg-black w-40 text-center mx-auto">
          <Link href="/(tabs)" className="">
            Ver mais
          </Link>
        </Button>
        <View>
          <Range title="Frete Grátis" icon="truck-fast" />
        </View>
        <View className="w-full h-[218px] flex-col justify-center items-center">
          <FlashList
            data={categoryData}
            renderItem={({ item }) => (
              <CardCategory title={item.name} urlImage={item.url} />
            )}
            keyExtractor={(item) => item.id.toString()}
            ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
            horizontal
            contentContainerStyle={{ paddingHorizontal: 5 }}
            showsHorizontalScrollIndicator={false}
            estimatedItemSize={200}
          />
        </View>
        <Splash urlImage="https://images.unsplash.com/photo-1530447920184-b88c8872?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTN8fHJvY2tldHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" />
      </ScrollView>
    </SafeAreaView>
  );
});

export default Index;
