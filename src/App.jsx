import { useState } from "react";

import AdicionarItem from "./components/AdicionarItem";
import Compras from "./components/Compras";

function App() {
  const [item, setItem] = useState("");
  const [listaItem, setListaItem] = useState([]);

  const itemComprado = listaItem.some((item) => item.comprado === true);

  return (
    <>
      <main>
        <AdicionarItem
          item={item}
          setItem={setItem}
          listaItem={listaItem}
          setListaItem={setListaItem}
        />

        {listaItem.length > 0 && (
          <Compras
            listaItem={listaItem}
            setListaItem={setListaItem}
            titulo={"Comprar:"}
            renderizar={false}
          />
        )}

        {itemComprado && (
          <Compras
            listaItem={listaItem}
            setListaItem={setListaItem}
            titulo={"Comprados:"}
            renderizar={true}
          />
        )}
      </main>
    </>
  );
}

export default App;
