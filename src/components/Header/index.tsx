import { HeaderContainer } from './styles'
import { House, PawPrint, SignOut, Users } from 'phosphor-react';
import { NavLink, Outlet } from 'react-router-dom';

export function Header() {
    return (
        <>
            <HeaderContainer>
                <div>
                    <h1 >Roana Pet Salon</h1>
                </div>

                <nav>
                    <NavLink to="/home" title='Início'>
                        <House size={30} />
                    </NavLink>

                    <NavLink to="/clients" title='Cadastros de usuário'>
                        <Users size={30} />
                    </NavLink>

                    <NavLink to="/pets" title='Cadastros de pets'>
                        <PawPrint size={30} />
                    </NavLink>

                    <NavLink to="/login" title='Sair'>
                        <SignOut size={30} />
                    </NavLink>

                </nav>
            </HeaderContainer>
            <Outlet />
        </>
    )
}