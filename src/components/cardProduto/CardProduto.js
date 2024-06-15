import React from "react";
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";
import { deleteProduto } from "../../service/ProdutoService";

export function Card({ produto }) {
    const navigate = useNavigate();

    
    const deletar = () => {
        deleteProduto(produto.id);
    }
    

    return (
        <div style={styles.card}>
            <img src={produto.imagem} alt={produto.nome} style={styles.image} />
            <h2>{produto.nome}</h2>
            <p>R$: {produto.preco}</p>
            <button onClick={() => navigate(`/editar/${produto.id}`)}>Editar</button>
            <button onClick={deletar}>Excluir</button>
        </div>
    )
}
    Card.propTypes = {
        produto: PropTypes.shape({
            imagem: PropTypes.string.isRequired,
            nome: PropTypes.string.isRequired,
            preco: PropTypes.string.isRequired,
        }).isRequired,
    };

    const styles = {
        card: {
            border: '1px solid #ddd',
            borderRadius: '10px',
            padding: '20px',
            width: '200px',
            textAlign: 'center',
        },
        image: {
            width: '100%',
            height: 'auto',
            borderRadius: '10px',
        },
    };
