import React from "react";
// import { StyleSheet, Image, View } from "react-native";
// import { Card } from "react-native-paper";
// import styled from "styled-components/native";
import { SvgXml } from 'react-native-svg';
import { View } from "react-native";

import { Favourite } from "../../../components/favourites/favourite.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import star from '../../../../assets/star';
import open from '../../../../assets/open';
// import { sizes } from "../../../infrastructure/theme/sizes";

import {
  RestaurantCard, 
  RestaurantCardCover, 
  Info, 
  Rating, 
  Section, 
  SectionEnd, 
  Address, 
  Icon 
} from "./restaurant-info-card.styles";


export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Leziz Burgercim",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 rastgele bir sokak",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
    placeID,
  } = restaurant;

const ratingArray = Array.from(new Array(Math.floor(rating)));
console.log(ratingArray);

  return (
    <RestaurantCard elevation={5}>
      <View>
        <Favourite restaurant={restaurant}/>
        <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      </View>
      <Info>
        <Text variant= "label">{name}</Text>
        <Section>
          <Rating>
            {ratingArray.map((_, i) => (
            <SvgXml 
              key={`star-${placeID}-${i}`}
              xml={star} 
              width={20} 
              height={20}
            />
            ))}
          </Rating>
          <SectionEnd>
            {isClosedTemporarily && (
                <Text variant="error">
                  CLOSED TEMPORARILY
                </Text>
            )}
            <Spacer position="left" size="large">
              {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            </Spacer>
            <Spacer position="left" size="large">
              <Icon source={{ uri: icon }} />
            </Spacer>
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};


