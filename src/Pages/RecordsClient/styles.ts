import styled from "styled-components";

export const RegistersClientsContainer = styled.div`
    margin: 1rem;
    display: flex;
    justify-content: center;

    input {
        width: 50rem;
        height: 2rem;
        background: var(--white-400);
        border: none;
        border-radius: 0.5rem 0 0 0.5rem;
        padding: 0.5rem;
    }

    button {
        width: 1.875rem;
        background: var(--white-400);
        border: none;
        border-radius: 0 0.5rem 0.5rem 0;
        display: flex;
        justify-content: center;
        align-items: center;

        svg {
            background: none;
        }
    }
`

export const RegistersTableContainer = styled.table`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 4rem;

    tr {
        width: 51.875rem;
        background: var(--white-400);
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 0.5rem 0 0.5rem;
        border-radius: 0.5rem;
        margin-bottom: 0.5rem;

        td {
            background: none;
            margin: 0.5rem;
        }
    }
`