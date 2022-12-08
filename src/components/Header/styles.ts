import styled from 'styled-components'

export const HeaderContainer = styled.header`
    width: 100%;
    height: 4rem;
    background: var(--pink-300);
    display: flex;
    justify-content: center;
    align-items: center;

    div {
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: transparent;

        h1 {
            font-family: 'Square Peg', cursive;
            font-size: 2.5rem;
            background: transparent;
            user-select: none;
        }
    }

    nav {
        width: 50%;
        background: transparent;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin-right: 0.5rem;

        a {
            background: transparent;
            color: var(--gray-700);
            cursor: pointer;
            margin-left: 3rem;

            svg {
                background: transparent;
            }

            &.active {
                border-bottom: 3px solid var(--gray-700);
            }
        }
    }
`

