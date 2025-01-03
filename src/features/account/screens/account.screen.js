import React from "react";
import { Spacer } from "../../../components/spacer/spacer.component";

import { 
  AccountBackground, 
  AccountContainer, 
  AccountCover, 
  Title, 
  AuthButton,
  StyledLottieView,
} from "../components/account.styles";


export const AccountScreen = ( {navigation} ) => {
  return (
    <AccountBackground>
      <AccountCover/>
      <StyledLottieView/>
      <Title>
        Meals To Go
      </Title>
      <AccountContainer>
        <AuthButton
            icon= "lock-open-outline"
            mode= "contained"
            onPress= {() => navigation.navigate("Login")}
        >
            Login
        </AuthButton>
        <Spacer size="large">
            <AuthButton
                icon= "email"
                mode= "contained"
                onPress= {() => navigation.navigate("Register")}
            >
                Register
            </AuthButton>
        </Spacer>
      </AccountContainer>
    </AccountBackground>
  );
};