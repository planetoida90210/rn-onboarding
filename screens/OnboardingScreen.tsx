import { Text, SafeAreaView, Image } from "react-native";
import React from "react";
import Onboarding from "react-native-onboarding-swiper";

const OnboardingScreen = () => {
  return (
    <Onboarding
      pages={[
        {
          backgroundColor: "#fff",
          image: (
            <Image
              source={{
                uri: "https://www.pngfind.com/pngs/m/57-572728_image-naruto-png-naruto-shippuden-naruto-uzumaki-naruto.png",
              }}
            />
          ),
          title: "Onboarding",
          subtitle: "Done with React Native Onboarding Swiper",
        },
      ]}
    />
  );
};

export default OnboardingScreen;
