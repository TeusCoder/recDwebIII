import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getProdutos } from '../../service/ProdutoService';
import { Card } from '../../components/cardProduto/CardProduto';


function Home() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getProdutos()
      .then((response) => setProducts(response))
      .catch((error) => console.error('Erro ao buscar produtos:', error));
  }, []);

  const handleCreateProduct = () => {
    navigate('/adicionar');
  };

  return (
    <div>
      <button style={styles.createButton} onClick={handleCreateProduct}>Criar Produto</button>
      <div style={styles.container}>
        {products.map((produto) => (
          <Card key={produto.id} produto={produto} />
        ))}
      </div>
    </div>
  );
}


const styles = {
  createButton: {
    padding: '10px 20px',
    margin: '20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    justifyContent: 'center',
  }
};

export default Home;
