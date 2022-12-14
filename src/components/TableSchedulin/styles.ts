import styled from "styled-components";

export const TableSchedulinContainer = styled.tr`
    width: 100%;
    height: 2rem;
    background: var(--white-400);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.5rem 0 0.5rem;
    border-bottom: 1px solid var(--gray-300);
    border-radius: 0.5rem;
    margin-bottom: 0.5rem;
    cursor: pointer;

    td {
        background: transparent;
        display: block;
        max-width: 5;
        margin: 0.5rem;
    }

    &:hover {
        background: var(--white-200);
        transition: 0.5s;
    }
`