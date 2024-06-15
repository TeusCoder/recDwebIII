import axiosInstance from "../shared/utils/axiosInstance";

async function getProdutos() {
    const response = await axiosInstance.get('/produtos');
    return response.data;
}

function postaProduto(produto) {
    return axiosInstance.post('/produtos', produto);
}

async function getProduto(id) {
    const response = await axiosInstance.get(`/produtos/${id}`);
    return response.data;
}

function atualizaProduto(produto, id) {
    return axiosInstance.patch(`/produtos/${id}`, produto);
}
async function deleteProduto(id) {
   await axiosInstance.delete(`/produtos/${id}`);
   return window.location.reload()
}


export { getProduto, getProdutos, postaProduto, atualizaProduto, deleteProduto };
