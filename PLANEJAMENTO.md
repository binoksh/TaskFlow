# 📚 PLANEJAMENTO DO PROJETO TASKFLOW

## 🎯 PAPEL
Desenvolvimento de projeto acadêmico em React Native com Expo e professor universitário de ADS.

---

## 📱 CONTEXTO DO PROJETO

**Nome:** TaskFlow

**Descrição:** Aplicativo para gerenciamento de tarefas acadêmicas e pessoais.

**Objetivo:** Permitir cadastro de usuários, cadastro de tarefas, visualização e acompanhamento das atividades.

**Tecnologia:** React Native com Expo

---

## ✅ REQUISITOS OBRIGATÓRIOS

### Quantidade de Telas
- ✔ Mínimo de 4 telas
- ✔ 1 tela obrigatória de cadastro de usuários
- ✔ 3 telas adicionais

### Recursos Técnicos
- ✔ Navegação Drawer Navigator customizada
- ✔ Context API
- ✔ createContext
- ✔ useContext
- ✔ Comunicação direta utilizando Props
- ✔ Comunicação indireta utilizando Context
- ✔ FlatList
- ✔ Picker para filtros
- ✔ API REST (GET e POST)
- ✔ Componentização
- ✔ Estrutura organizada por pastas
- ✔ Compatível com Expo
- ✔ Tratamento básico de erros

---

## 📋 TELAS DO APLICATIVO

### 1️⃣ TELA DE CADASTRO DE USUÁRIO

**Campos:**
- Nome
- Email
- Curso
- Senha
- Confirmar Senha

**Validações:**
- Todos os campos obrigatórios
- Email válido
- Senha mínima de 6 caracteres
- Confirmar senha igual à senha

**Ações:**
- Botão "Cadastrar"
- POST na API

---

### 2️⃣ TELA DE DASHBOARD

**Exibição:**
- Total de tarefas
- Tarefas pendentes
- Tarefas concluídas

**Consumo de Dados:**
- GET da API

---

### 3️⃣ TELA DE NOVA TAREFA

**Campos:**
- Título
- Descrição
- Categoria
- Status

**Categorias Disponíveis:**
- Faculdade
- Trabalho
- Pessoal

**Status Disponíveis:**
- Pendente
- Concluído

**Ações:**
- Botão "Salvar"
- POST na API

---

### 4️⃣ TELA DE LISTA DE TAREFAS

**Exibição:**
- FlatList com tarefas

**Filtros com Picker:**
- Todos
- Faculdade
- Trabalho
- Pessoal

**Consumo de Dados:**
- GET da API

---

## 🧩 COMPONENTES REUTILIZÁVEIS

Cada componente possui:
- `index.js` - Lógica do componente
- `styles.js` - Estilos

### Componentes

1. **InputField** - Campo de entrada customizado
2. **CustomButton** - Botão reutilizável
3. **TaskCard** - Card para exibição de tarefa
4. **Header** - Cabeçalho das telas

---

## 🏗️ ESTRUTURA DE PASTAS

```
TaskFlow/
│
├── assets/
│   ├── images/
│   └── colors.js
│
├── components/
│   ├── InputField/
│   │   ├── index.js
│   │   └── styles.js
│   ├── CustomButton/
│   │   ├── index.js
│   │   └── styles.js
│   ├── TaskCard/
│   │   ├── index.js
│   │   └── styles.js
│   └── Header/
│       ├── index.js
│       └── styles.js
│
├── screens/
│   ├── CadastroScreen/
│   │   ├── index.js
│   │   └── styles.js
│   ├── DashboardScreen/
│   │   ├── index.js
│   │   └── styles.js
│   ├── NovaTarefaScreen/
│   │   ├── index.js
│   │   └── styles.js
│   └── ListaTarefasScreen/
│       ├── index.js
│       └── styles.js
│
├── navigation/
│   ├── DrawerRoutes.js
│   └── DrawerContent.js
│
├── context/
│   ├── UserContext.js
│   └── UserProvider.js
│
├── services/
│   └── api.js
│
├── utils/
│   ├── validations.js
│   └── constants.js
│
├── App.js
├── app.json
├── package.json
└── .gitignore
```

---

## 📦 DEPENDÊNCIAS NECESSÁRIAS

### Dependências Principais

| Dependência | Versão | Propósito |
|---|---|---|
| `react` | ^18.0 | Biblioteca base |
| `react-native` | 0.73+ | Framework mobile |
| `expo` | ~50.0 | Plataforma Expo |
| `@react-navigation/native` | ^6.0 | Navegação base |
| `@react-navigation/drawer` | ^6.0 | Drawer Navigator |
| `react-native-gesture-handler` | ~2.0 | Gestos (necessário para drawer) |
| `react-native-reanimated` | ~3.0 | Animações drawer |
| `react-native-screens` | ~3.0 | Otimização de navegação |
| `react-native-safe-area-context` | ~4.0 | Área segura da tela |
| `react-native-community/picker` | ^1.0 | Picker component |
| `axios` | ^1.0 | Requisições HTTP |
| `expo-constants` | ~15.0 | Constantes do Expo |

### Dependências de Desenvolvimento
- `@types/react-native` - Type hints (opcional)

---

## 🎨 PALETA DE CORES

```javascript
// assets/colors.js
export const COLORS = {
  primary: '#1E3A8A',      // Azul escuro
  secondary: '#3B82F6',    // Azul claro
  background: '#F8FAFC',   // Cinza claro
  success: '#22C55E',      // Verde
  error: '#EF4444',        // Vermelho
  text: '#1F2937',         // Texto escuro
  white: '#FFFFFF',
  lightGray: '#E5E7EB',
};
```

---

## 📡 ESTRUTURA DA API (MockAPI)

### Recurso: usuario

**Estrutura:**
```json
{
  "id": "1",
  "nome": "João Silva",
  "email": "joao@example.com",
  "curso": "Análise e Desenvolvimento de Sistemas",
  "senha": "hash_da_senha"
}
```

### Recurso: tarefas

**Estrutura:**
```json
{
  "id": "1",
  "titulo": "Fazer trabalho de BD",
  "descricao": "Trabalho sobre normalização",
  "categoria": "Faculdade",
  "status": "Pendente"
}
```

---

## 🔑 FLUXO DE DADOS

```
┌─────────────────────────────────────────┐
│         UserContext (Provider)          │
│  - Usuário logado                       │
│  - setUser (ação)                       │
└─────────────────────────────────────────┘
           ↓ (useContext)
┌─────────────────────────────────────────┐
│          Todas as Telas                 │
│  - CadastroScreen (POST usuário)        │
│  - DashboardScreen (GET estatísticas)   │
│  - NovaTarefaScreen (POST tarefa)       │
│  - ListaTarefasScreen (GET tarefas)     │
└─────────────────────────────────────────┘
           ↓ (axios)
┌─────────────────────────────────────────┐
│         MockAPI (REST API)              │
│  - /usuario (GET, POST)                 │
│  - /tarefas (GET, POST)                 │
└─────────────────────────────────────────┘
```

---

## 🚀 PROCESSO DE DESENVOLVIMENTO

### ETAPA 1: ✅ CONCLUÍDA
- Análise de requisitos
- Criação da arquitetura
- Estrutura de pastas
- Listagem de dependências

### ETAPA 2: ✅ CONCLUÍDA
- Gerar comandos de instalação
- Explicar cada dependência

**Comandos de instalação:**
```bash
npm install
npx expo install --fix
npx expo install react-native-worklets
npm start
```

### ETAPA 3: ✅ CONCLUÍDA
- Criar navegação Drawer

### ETAPA 4: ✅ CONCLUÍDA
- Criar Context API

### ETAPA 5: ✅ CONCLUÍDA
- Criar componentes reutilizáveis

### ETAPA 6: ✅ CONCLUÍDA
- Criar tela Cadastro

### ETAPA 7: ✅ CONCLUÍDA
- Criar tela Nova Tarefa

### ETAPA 8: ✅ CONCLUÍDA
- Criar tela Lista de Tarefas

### ETAPA 9: ✅ CONCLUÍDA
- Criar Dashboard

### ETAPA 10: ✅ CONCLUÍDA
- Criar integração com MockAPI

### ETAPA 11: ✅ CONCLUÍDA (código)
- Revisão completa
- Verificação de requisitos
- Checklist final

---

## 📌 ANOTAÇÕES IMPORTANTES

- Projeto simples e organizado
- Compatível com Expo
- Apenas bibliotecas solicitadas
- Tratamento básico de erros
- Componentes bem estruturados
- Context API para gerenciamento de estado
- Props para comunicação entre componentes

## ✅ CHECKLIST DE VALIDAÇÃO FINAL

### Requisitos da Atividade

* [x] Aplicativo criado com React Native + Expo
* [x] Compatível com Snack Expo
* [x] Mínimo de 4 telas
* [x] Tela obrigatória de Cadastro de Usuário
* [x] 3 telas adicionais personalizadas
* [x] Drawer Navigator Customizado
* [x] Uso de createContext
* [x] Uso de useContext
* [x] Comunicação direta via Props
* [x] Comunicação indireta via Context API
* [x] FlatList implementada
* [x] Picker implementado para filtros
* [x] API REST com GET
* [x] API REST com POST
* [x] Componentização aplicada
* [x] Tratamento básico de erros
* [x] Projeto organizado por pastas
* [ ] Protótipo criado no Figma
* [ ] Documento PDF/Word criado
* [ ] Vídeo de demonstração gravado
* [ ] Projeto exportado para Snack Expo

## 🌐 CONFIGURAÇÃO DA MOCKAPI

Será utilizada a plataforma MockAPI para simular um backend REST.

ENDPOINT DA API: 
https:// 6a2544ef5447714a6f834da2 .mockapi.io /taskflow/api / :endpoint

Recursos que já foram criados:

### usuario

Campos:

* id
* nome
* email
* curso
* senha

Endpoints utilizados:

* GET /usuario
* POST /usuario

### tarefas

Campos:

* id
* titulo
* descricao
* categoria
* status

Endpoints utilizados:

* GET /tarefas
* POST /tarefas

A integração será realizada através do Axios utilizando o arquivo:

services/api.js

Objetivo:

Permitir armazenamento e recuperação de dados de usuários e tarefas simulando um backend real.

Toda comunicação com a API deverá ser realizada através do Axios.

## 📱 COMPATIBILIDADE COM SNACK EXPO

O projeto deverá ser desenvolvido de forma compatível com o Snack Expo.

Evitar bibliotecas que não funcionem corretamente no Snack.

Ao final do desenvolvimento deverá ser gerado:

* Link público do Snack
* Arquivo ZIP do projeto
* Vídeo de demonstração
* Documento PDF/Word com prints das telas

## AVISO IMPORTANTE

IMPORTANTE: As versões serão mantidas conforme as versões instaladas automaticamente pelo Expo SDK 54


---

**Documento criado em:** 30 de Maio de 2026  
**Status:** Planejamento Aprovado ✅
