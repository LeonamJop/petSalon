import styled from "styled-components";

export const LoginContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 1rem;

    h1 {
        font-family: 'Square Peg', cursive;
    }
`

export const CredentialsContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1.5rem;

    div {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    input {
        padding: 0 0.5rem;
        height: 2rem;
        border: none;
        border-radius: 0.5rem;
        background: var(--white-100);
    }
`

export const ButtonLogin = styled.button`
    width: 5.625rem;
    height: 2.5rem;
    background: var(--blue-300);
    color: var(--white);
    font-size: 1rem;
    margin-top: 1rem;
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: 0.8s;

    &:hover {
        background: var(--blue-500);
        font-weight: bold;
    }
`