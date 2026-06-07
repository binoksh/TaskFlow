import { MIN_SENHA_LENGTH } from './constants';

export function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email.trim());
}

export function validateCadastroFields({ nome, email, curso, senha, confirmSenha }) {
  const errors = {};

  if (!nome?.trim()) {
    errors.nome = 'Nome é obrigatório';
  } else if (nome.trim().length < 3) {
    errors.nome = 'Nome deve ter pelo menos 3 caracteres';
  }

  if (!email?.trim()) {
    errors.email = 'E-mail é obrigatório';
  } else if (!isValidEmail(email)) {
    errors.email = 'Informe um e-mail válido';
  }

  if (!curso?.trim()) {
    errors.curso = 'Curso é obrigatório';
  } else if (curso.trim().length < 2) {
    errors.curso = 'Curso deve ter pelo menos 2 caracteres';
  }

  if (!senha) {
    errors.senha = 'Senha é obrigatória';
  } else if (senha.length < MIN_SENHA_LENGTH) {
    errors.senha = `Senha mínima de ${MIN_SENHA_LENGTH} caracteres`;
  }

  if (!confirmSenha) {
    errors.confirmSenha = 'Confirme sua senha';
  } else if (senha !== confirmSenha) {
    errors.confirmSenha = 'As senhas devem ser iguais';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

export function validateCadastro(data) {
  const { isValid, errors } = validateCadastroFields(data);
  if (isValid) return null;
  return Object.values(errors)[0];
}

export function validateLoginFields({ email, senha }) {
  const errors = {};

  if (!email?.trim()) {
    errors.email = 'E-mail é obrigatório';
  } else if (!isValidEmail(email)) {
    errors.email = 'Informe um e-mail válido';
  }

  if (!senha) {
    errors.senha = 'Senha é obrigatória';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

export function validateLogin(data) {
  const { isValid, errors } = validateLoginFields(data);
  if (isValid) return null;
  return Object.values(errors)[0];
}

export function validateTarefa({ titulo, descricao }) {
  if (!titulo?.trim() || !descricao?.trim()) {
    return 'Preencha título e descrição';
  }
  return null;
}
