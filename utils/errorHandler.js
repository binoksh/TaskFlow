export function getErrorMessage(error, mensagemPadrao) {
  if (error?.response?.status === 404) {
    return 'Recurso não encontrado na API.';
  }
  if (error?.response?.data?.message) {
    return error.response.data.message;
  }
  if (error?.message === 'Network Error') {
    return 'Sem conexão com a internet. Verifique sua rede.';
  }
  return mensagemPadrao;
}
