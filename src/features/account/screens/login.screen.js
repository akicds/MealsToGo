import React, { useState, useContext} from "react";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";

import { AccountBackground, AccountContainer, AccountCover, Title, AuthButton, AuthInput, ErrorContainer} from "../components/account.styles";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { Navigation } from "../../../infrastructure/navigation";

export const LoginScreen = ( {navigation} ) => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const { onLogin, error } = useContext(AuthenticationContext);
    return (
        <AccountBackground>
        <AccountCover/>
        <Title>
        Meals To Go
        </Title>
            <AccountContainer>
                <AuthInput
                    label="E-mail"
                    value={email}
                    textContentType="emailAddress"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    onChangeText={(u) => setEmail(u)}
                />
                <Spacer size="large">
                    <AuthInput
                        label="Password"
                        value={password}
                        textContentType="password"
                        secureTextEntry
                        autoCapitalize="none"
                        onChangeText={(p) => setPassword(p)}
                    />
                </Spacer>
                {error && (
                    <ErrorContainer size="large">
                        <Text variant="error">{error}</Text>
                    </ErrorContainer>
                )}
                <Spacer size= "large">
                    <AuthButton
                        icon= "lock-open-outline"
                        mode= "contained"
                        onPress={() => onLogin(email, password)}
                    >
                        Login
                    </AuthButton>
                </Spacer>
            </AccountContainer>
            <Spacer size= "large">
                <AuthButton
                    icon= "arrow-left-thin-circle-outline"
                    mode= "contained"
                    onPress={() => navigation.goBack()}
                >
                    Back
                </AuthButton>
            </Spacer>
        </AccountBackground>
      );
    };