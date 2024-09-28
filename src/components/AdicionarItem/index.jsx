import { useRef } from "react";
import { v4 as uuidv4 } from "uuid";

import styles from './AdicionarItem.module.css'

const AdicionarItem = ({item, setItem, listaItem, setListaItem}) => {

    const inputRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
    
        if (!item) {
          alert("Digite um item válido");
          return;
        }
    
        const comparando = listaItem.some(
          (elemento) => elemento.item.toUpperCase() === item.trim().toUpperCase()
        );
    
        if (comparando) {
          alert("Você já adicionou esse item");
        } else {
          const novoItem = {
            id: uuidv4(),
            item: item,
            comprado: false,
          };
    
          setListaItem((atualListaItem) => [...atualListaItem, novoItem]);
        }
        setItem("");
        inputRef.current.focus();
      };

  return (
      <div className={styles.adicionarItem}>
        <h2>Lista de compras </h2>
          <form onSubmit={handleSubmit}>
            <input
              value={item}
              onChange={(e) => setItem(e.target.value)}
              type="text"
              placeholder="Digite um item..."
              ref={inputRef}
            />
            <button>Salvar</button>
          </form>
        </div>
  )
}

export default AdicionarItem
