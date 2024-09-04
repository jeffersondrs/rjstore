import { MotiImage, AnimatePresence, Text } from 'moti';
import React, { useState, useEffect } from 'react';
import { View, useWindowDimensions } from 'react-native';
import { wrap } from 'popmotion';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const photos = [
  `https://images.unsplash.com/photo-1551871812-10ecc21ffa2f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=929&q=80`,
  `https://images.unsplash.com/photo-1530447920184-b88c8872?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTN8fHJvY2tldHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60`,
  `https://images.unsplash.com/photo-1581069700310-8cf2e1b6baf0?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjF8fHJvY2tldHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60`,
  `https://images.unsplash.com/photo-1562802378-063ec186a863?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fHN1c2hpfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60`,
];

export default function Gallery() {
  const { width } = useWindowDimensions();
  const [[index, direction], setState] = useState([0, 0]);

  const paginate = (direction: 1 | -1) => () => {
    setState(([index]) => {
      return [index + direction, direction];
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setState(([index]) => [index + 1, 1]);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const url = photos[wrap(0, photos.length, index)];

  return (
    <View className="h-52 justify-center bg-transparent  px-1">
      <AnimatePresence initial={false} custom={direction}>
        <MotiImage
          from={{
            opacity: 0,
            translateX: direction * width,
          }}
          animate={{
            opacity: 1,
            translateX: 0,
            zIndex: 1,
          }}
          exit={(custom) => {
            'worklet';
            return {
              opacity: 0,
              translateX: custom * width * -1,
              zIndex: 0,
            };
          }}
          style={{ height: 200 }}
          className="absolute self-center w-full rounded-xl"
          key={index}
          source={{ uri: url }}
          transition={{
            translateX: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 200, type: 'timing' },
          }}
        />
      </AnimatePresence>
      <View className="flex-row m-4 justify-between z-10 items-center">
        <Text
          selectable={false}
          className="text-lg bg-white h-6 w-6 rounded-full text-center"
          onPress={paginate(-1)}
        >
          <MaterialCommunityIcons name="chevron-left" size={20} color="black" />
        </Text>
        <Text
          selectable={false}
          className="text-lg bg-white h-6 w-6 rounded-full text-center"
          onPress={paginate(1)}
        >
          <MaterialCommunityIcons
            name="chevron-right"
            size={20}
            color="black"
          />
        </Text>
      </View>
    </View>
  );
}
