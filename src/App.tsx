import React from "react";
import ProfileForm from "./components/Forms/ProfileForm";
import styled from "styled-components";

const AppWrapper = styled.div`
    width: 60%;
    margin: 0 auto;
`;

interface Props {}

const App: React.FC<Props> = () => {
    return (
        <AppWrapper>
            <ProfileForm />
        </AppWrapper>
    );
};

export default App;
