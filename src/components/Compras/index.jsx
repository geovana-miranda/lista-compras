import { MdDelete } from "react-icons/md";
import { MdOutlineEdit } from "react-icons/md";

import styles from "./Compras.module.css";

const Compras = ({ listaItem, setListaItem, titulo, renderizar, texto }) => {
  const renderizarLista = (comprado) => {
    return listaItem
      .filter((item) => item.comprado === comprado)
      .map((item) => (
        <div className={styles.lista} key={item.id}>
          <div className={styles.itemLista}>
            {!comprado ? (
              <>
                <input
                  type="checkbox"
                  onClick={() => marcarComoComprado(item.id)}
                />
                <li>{item.item}</li>
              </>
            ) : (
              <li className={styles.itemComprado}>{item.item}</li>
            )}
          </div>
          <div>
            {!comprado && <MdOutlineEdit onClick={() => editar(item)} />}
            <MdDelete onClick={() => excluirItem(item.id)} />
          </div>
        </div>
      ));
  };


  const editar = (item) => {

    const novoValor = prompt("Alterar para: ");

    if (!novoValor) {
      alert("Digite um valor válido");
      return;
    }

    if (listaItem.some(i => i.item.toUpperCase() === novoValor.trim().toUpperCase())) {
      alert("Você já adicionou esse item");
      return;
    }

    const itemAtualizado = listaItem.map((i) =>
      i.id === item.id ? { ...i, item: novoValor } : i
    );

    setListaItem(itemAtualizado);
  };

  const marcarComoComprado = (id) => {
    const listaAtualizada = listaItem.map((item) =>
      item.id === id ? { ...item, comprado: true } : item
    );

    setListaItem(listaAtualizada);
  };

  const excluirItem = (id) => {
    const listaAtualizada = listaItem.filter((item) => item.id !== id);
    setListaItem(listaAtualizada);
  };

  return (
    <div className={styles.listas}>
        <h3>{titulo}</h3>
        <ul>{renderizarLista(renderizar)}</ul>
    </div>
  );
};

export default Compras;
