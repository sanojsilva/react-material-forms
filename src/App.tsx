import React from "react";
import LoginForm from "./components/Forms/LoginForm";
import styled from "styled-components";

const AppWrapper = styled.div`
    width: 80%;
    margin: 0 auto;
`;

interface Props {}

const App: React.FC<Props> = () => {
    return (
        <AppWrapper>
            <LoginForm />
        </AppWrapper>
    );
};

export default App;
