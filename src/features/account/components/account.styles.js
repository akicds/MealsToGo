import styled from "styled-components/native";
import { Button } from "react-native-paper";
import { colors } from "../../../infrastructure/theme/colors";

const backgrounds = [
  require("../../../../assets/home_bg.jpg"),
  require("../../../../assets/home_bg2.jpg"),
  require("../../../../assets/home_bg3.jpg"),
];

const getRandomBackground = () => {
  const index = Math.floor(Math.random() * backgrounds.length);
  return backgrounds[index];
};

export const AccountBackground = styled.ImageBackground.attrs({
  source: getRandomBackground(),
})`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const AccountCover = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
`;

export const AccountContainer = styled.View`
    background-color: rgba(255, 255, 255, 0.5);
    padding: ${(props) => props.theme.space[4]};
    margin-top: ${(props) => props.theme.space[2]};
    border-radius: ${(props) => props.theme.space[3]};
`;

export const AuthButton = styled(Button).attrs({
    color: colors.brand.primary,
})`
    padding: ${(props) => props.theme.space[2]};
`;