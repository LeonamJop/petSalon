import styled from "styled-components";

export const OpenModalContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    div {
        width: 51.875rem;
        margin-top: 1rem;
        display: flex;
        justify-content: flex-end;

        button {
            width: 2rem;
            height: 2rem;
            border: none;
            border-radius: 50%;
            background: var(--pink-300);
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            margin-left: 50%;

            svg {
               background: none;
            }
        }
    }
`