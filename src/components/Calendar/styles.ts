import styled from "styled-components";

export const AgendContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`
export const CalendarHeader = styled.div`
    background: var(--pink-300);
    width: 100%;
    height: 2rem;
    border-radius: 0.5rem 0.5rem 0 0;
    display: flex;
    justify-content: center;
    align-items: center;

    strong {
        background: transparent;
        font-size: 1.5rem;
    }
`

export const CalendarContainer = styled.div`
    width: 100%;
    height: 100%;
    padding: 0.5rem;
    background: var(--white-400);
    border-radius: 0 0 0.5rem 0.5rem;
`

export const TableContainer = styled.table`
    width: 100%;
    display: flex;
    background: transparent;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    tbody {
        background: transparent;

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
    }
`