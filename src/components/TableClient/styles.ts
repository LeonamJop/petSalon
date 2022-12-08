import styled from "styled-components";

export const TableClientContainer = styled.tr`
    width: 51.875rem;
    height: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.5rem 0 0.5rem;
    border-bottom: 1px solid var(--gray-100);
    border-radius: 0.5rem;
    margin-bottom: 0.5rem;
    cursor: pointer;

    td {
        background: none;
        display: block;
        max-width: 5;
        margin: 0.5rem;
    }

    &:hover {
        background: var(--white-400);
        transition: 0.5s;
    }
`