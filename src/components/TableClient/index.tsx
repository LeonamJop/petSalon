import { TableClientContainer } from './styles';

interface TableClientProps {
    name: string;
    email: string;
    phoneNumber: string;
}

export function TableClient({ name, email, phoneNumber }: TableClientProps) {
    
    return (
        <TableClientContainer>
            <td>{name}</td>
            <td>{email}</td>
            <td>{phoneNumber}</td>
        </TableClientContainer>
    )
}