import React, { useEffect, useState } from 'react';
import { atualizaProduto, getProduto } from '../../service/ProdutoService';
import { useNavigate, useParams } from 'react-router-dom';

export default function Editar() {
    const { id } = useParams(); 
    const [produto, setProduto] = useState({
        id: '',
        nome: '',
        preco: '',
        imagem: ''
    });
    const navigate = useNavigate();

    useEffect(() => {
        getProduto(id)
            .then((response) => setProduto(response))
            .catch((error) => console.error('Erro ao buscar produto:', error));
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduto({
            ...produto,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        atualizaProduto(produto, produto.id)
            .then(response => {
                if (response.status === 200 || response.status === 201) {
                    navigate('/');
                } else {
                    console.error('Erro ao atualizar produto');
                }
            })
            .catch(error => console.error('Erro ao atualizar produto:', error));
    };

    return (
        <div>
            <h2>Editar Produto</h2>
            <form onSubmit={handleSubmit} style={styles.form}>
                <label>
                    ID:
                    <input type="text" name="id" value={produto.id} onChange={handleChange} required />
                </label>
                <label>
                    Nome:
                    <input type="text" name="nome" value={produto.nome} onChange={handleChange} required />
                </label>
                <label>
                    Preço:
                    <input type="text" name="preco" value={produto.preco} onChange={handleChange} required />
                </label>
                <img src={produto.imagem} alt='imagem do produto'/>
                <label>
                    Imagem:
                    <input type="text" name="imagem" value={produto.imagem} onChange={handleChange} required />
                </label>
                <button type="submit" style={styles.submitButton}>Concluir</button>
            </form>
        </div>
    );
}

const styles = {
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        maxWidth: '300px',
        margin: '0 auto'
    },
    submitButton: {
        padding: '10px 20px',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    }
};
