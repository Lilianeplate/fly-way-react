import styles from './search.module.css';

function Search() {
    return (
        <div className={styles.searchContent}>
            <div className={styles.searchLocal}>
                <p>Para onde deseja ir?</p>
                <select defaultValue="">
                    <option value="" disabled>Selecione a opção desejada</option>
                    <option value="canada">Canadá</option>
                    <option value="australia">Austrália</option>
                    <option value="roma">Roma</option>
                    <option value="eua">Estados Unidos</option>
                    <option value="malta">Malta</option>
                </select>
            </div>

            <div className={styles.searchObj}>
                <p>Qual é o seu objetivo?</p>
                <select defaultValue="">
                    <option value="" disabled>Selecione a opção desejada</option>
                    <option value="ferias">Férias</option>
                    <option value="estudo">Estudo</option>
                    <option value="trabalho">Trabalho</option>
                </select>
            </div>

            <div className={styles.searchButton}>
                <button>Buscar</button> 
            </div>
        </div>
    );
}

export default Search;

