import axios from 'axios';
import { API_BASE_URL } from '../utils/constants';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: { 'Content-Type': 'application/json' },
  timeout: 10000,
});

export async function getUsuarios() {
  const response = await api.get('/usuario');
  return response.data;
}

export async function postUsuario(usuario) {
  const response = await api.post('/usuario', usuario);
  return response.data;
}

export async function emailJaCadastrado(email) {
  const usuarios = await getUsuarios();
  const lista = Array.isArray(usuarios) ? usuarios : [];
  return lista.some((u) => u.email?.toLowerCase() === email.trim().toLowerCase());
}

export async function loginUsuario(email, senha) {
  const usuarios = await getUsuarios();
  const lista = Array.isArray(usuarios) ? usuarios : [];
  const usuario = lista.find(
    (u) =>
      u.email?.toLowerCase() === email.trim().toLowerCase() &&
      String(u.senha) === String(senha)
  );
  if (!usuario) {
    const erro = new Error('E-mail ou senha incorretos.');
    erro.code = 'AUTH_FAILED';
    throw erro;
  }
  return usuario;
}

export async function getTarefas() {
  const response = await api.get('/tarefas');
  return response.data;
}

export async function postTarefa(tarefa) {
  const response = await api.post('/tarefas', tarefa);
  return response.data;
}

export default api;
