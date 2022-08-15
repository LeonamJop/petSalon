import styles from './styles.module.css';
import { Header } from "../../components/Header";
import { Calendar } from '../../components/Calendar';
import { OptionsCadastres } from '../../components/OptionsCadastres';

const optionsCadastres = [
    {
        title: 'Cadastro de Cliente',
        content: 'Possibilita criar, editar ou excluir um cadastro de cliente.',
        switchToScreen: '/records/clients'
    }, {
        title: 'Cadastro de Serviço',
        content: 'Possibilita criar, editar ou excluir um cadastro de serviço.',
        switchToScreen: '/records/services'
    }
]


export function Home() {
    return (
        <>
            <Header />
            <div className={styles.home}>
                <div>
                    {optionsCadastres.map(optionCadastre => {
                        return (
                            <OptionsCadastres
                                key={optionCadastre.title}
                                title={optionCadastre.title}
                                content={optionCadastre.content}
                                switchToScreen={optionCadastre.switchToScreen}
                            />
                        )
                    })}
                </div>
                <Calendar />
            </div>
        </>
    )
}