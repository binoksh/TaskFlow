# ðŸ“š PLANEJAMENTO DO PROJETO TASKFLOW

## ðŸŽ¯ PAPEL
Desenvolvimento de projeto acadÃªmico em React Native com Expo e professor universitÃ¡rio de ADS.

---

## ðŸ“± CONTEXTO DO PROJETO

**Nome:** TaskFlow

**DescriÃ§Ã£o:** Aplicativo para gerenciamento de tarefas acadÃªmicas e pessoais.

**Objetivo:** Permitir cadastro de usuÃ¡rios, cadastro de tarefas, visualizaÃ§Ã£o e acompanhamento das atividades.

**Tecnologia:** React Native com Expo

---

## âœ… REQUISITOS OBRIGATÃ“RIOS

### Quantidade de Telas
- âœ” MÃ­nimo de 4 telas
- âœ” 1 tela obrigatÃ³ria de cadastro de usuÃ¡rios
- âœ” 3 telas adicionais

### Recursos TÃ©cnicos
- âœ” NavegaÃ§Ã£o Drawer Navigator customizada
- âœ” Context API
- âœ” createContext
- âœ” useContext
- âœ” ComunicaÃ§Ã£o direta utilizando Props
- âœ” ComunicaÃ§Ã£o indireta utilizando Context
- âœ” FlatList
- âœ” Picker para filtros
- âœ” API REST (GET e POST)
- âœ” ComponentizaÃ§Ã£o
- âœ” Estrutura organizada por pastas
- âœ” CompatÃ­vel com Expo
- âœ” Tratamento bÃ¡sico de erros

---

## ðŸ“‹ TELAS DO APLICATIVO

### 1ï¸âƒ£ TELA DE CADASTRO DE USUÃRIO

**Campos:**
- Nome
- Email
- Curso
- Senha
- Confirmar Senha

**ValidaÃ§Ãµes:**
- Todos os campos obrigatÃ³rios
- Email vÃ¡lido
- Senha mÃ­nima de 6 caracteres
- Confirmar senha igual Ã  senha

**AÃ§Ãµes:**
- BotÃ£o "Cadastrar"
- POST na API

---

### 2ï¸âƒ£ TELA DE DASHBOARD

**ExibiÃ§Ã£o:**
- Total de tarefas
- Tarefas pendentes
- Tarefas concluÃ­das

**Consumo de Dados:**
- GET da API

---

### 3ï¸âƒ£ TELA DE NOVA TAREFA

**Campos:**
- TÃ­tulo
- DescriÃ§Ã£o
- Categoria
- Status

**Categorias DisponÃ­veis:**
- Faculdade
- Trabalho
- Pessoal

**Status DisponÃ­veis:**
- Pendente
- ConcluÃ­do

**AÃ§Ãµes:**
- BotÃ£o "Salvar"
- POST na API

---

### 4ï¸âƒ£ TELA DE LISTA DE TAREFAS

**ExibiÃ§Ã£o:**
- FlatList com tarefas

**Filtros com Picker:**
- Todos
- Faculdade
- Trabalho
- Pessoal

**Consumo de Dados:**
- GET da API

---

## ðŸ§© COMPONENTES REUTILIZÃVEIS

Cada componente possui:
- `index.js` - LÃ³gica do componente
- `styles.js` - Estilos

### Componentes

1. **InputField** - Campo de entrada customizado
2. **CustomButton** - BotÃ£o reutilizÃ¡vel
3. **TaskCard** - Card para exibiÃ§Ã£o de tarefa
4. **Header** - CabeÃ§alho das telas

---

## ðŸ—ï¸ ESTRUTURA DE PASTAS

```
TaskFlow/
â”‚
â”œâ”€â”€ assets/
â”‚   â”œâ”€â”€ images/
â”‚   â””â”€â”€ colors.js
â”‚
â”œâ”€â”€ components/
â”‚   â”œâ”€â”€ InputField/
â”‚   â”‚   â”œâ”€â”€ index.js
â”‚   â”‚   â””â”€â”€ styles.js
â”‚   â”œâ”€â”€ CustomButton/
â”‚   â”‚   â”œâ”€â”€ index.js
â”‚   â”‚   â””â”€â”€ styles.js
â”‚   â”œâ”€â”€ TaskCard/
â”‚   â”‚   â”œâ”€â”€ index.js
â”‚   â”‚   â””â”€â”€ styles.js
â”‚   â””â”€â”€ Header/
â”‚       â”œâ”€â”€ index.js
â”‚       â””â”€â”€ styles.js
â”‚
â”œâ”€â”€ screens/
â”‚   â”œâ”€â”€ CadastroScreen/
â”‚   â”‚   â”œâ”€â”€ index.js
â”‚   â”‚   â””â”€â”€ styles.js
â”‚   â”œâ”€â”€ DashboardScreen/
â”‚   â”‚   â”œâ”€â”€ index.js
â”‚   â”‚   â””â”€â”€ styles.js
â”‚   â”œâ”€â”€ NovaTarefaScreen/
â”‚   â”‚   â”œâ”€â”€ index.js
â”‚   â”‚   â””â”€â”€ styles.js
â”‚   â””â”€â”€ ListaTarefasScreen/
â”‚       â”œâ”€â”€ index.js
â”‚       â””â”€â”€ styles.js
â”‚
â”œâ”€â”€ navigation/
â”‚   â”œâ”€â”€ DrawerRoutes.js
â”‚   â””â”€â”€ DrawerContent.js
â”‚
â”œâ”€â”€ context/
â”‚   â”œâ”€â”€ UserContext.js
â”‚   â””â”€â”€ UserProvider.js
â”‚
â”œâ”€â”€ services/
â”‚   â””â”€â”€ api.js
â”‚
â”œâ”€â”€ utils/
â”‚   â”œâ”€â”€ validations.js
â”‚   â””â”€â”€ constants.js
â”‚
â”œâ”€â”€ App.js
â”œâ”€â”€ app.json
â”œâ”€â”€ package.json
â””â”€â”€ .gitignore
```

---

## ðŸ“¦ DEPENDÃŠNCIAS NECESSÃRIAS

### DependÃªncias Principais

| DependÃªncia | VersÃ£o | PropÃ³sito |
|---|---|---|
| `react` | ^18.0 | Biblioteca base |
| `react-native` | 0.73+ | Framework mobile |
| `expo` | ~50.0 | Plataforma Expo |
| `@react-navigation/native` | ^6.0 | NavegaÃ§Ã£o base |
| `@react-navigation/drawer` | ^6.0 | Drawer Navigator |
| `react-native-gesture-handler` | ~2.0 | Gestos (necessÃ¡rio para drawer) |
| `react-native-reanimated` | ~3.0 | AnimaÃ§Ãµes drawer |
| `react-native-screens` | ~3.0 | OtimizaÃ§Ã£o de navegaÃ§Ã£o |
| `react-native-safe-area-context` | ~4.0 | Ãrea segura da tela |
| `react-native-community/picker` | ^1.0 | Picker component |
| `axios` | ^1.0 | RequisiÃ§Ãµes HTTP |
| `expo-constants` | ~15.0 | Constantes do Expo |

### DependÃªncias de Desenvolvimento
- `@types/react-native` - Type hints (opcional)

---

## ðŸŽ¨ PALETA DE CORES

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

## ðŸ“¡ ESTRUTURA DA API (MockAPI)

### Recurso: usuario

**Estrutura:**
```json
{
  "id": "1",
  "nome": "JoÃ£o Silva",
  "email": "joao@example.com",
  "curso": "AnÃ¡lise e Desenvolvimento de Sistemas",
  "senha": "hash_da_senha"
}
```

### Recurso: tarefas

**Estrutura:**
```json
{
  "id": "1",
  "titulo": "Fazer trabalho de BD",
  "descricao": "Trabalho sobre normalizaÃ§Ã£o",
  "categoria": "Faculdade",
  "status": "Pendente"
}
```

---

## ðŸ”‘ FLUXO DE DADOS

```
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚         UserContext (Provider)          â”‚
â”‚  - UsuÃ¡rio logado                       â”‚
â”‚  - setUser (aÃ§Ã£o)                       â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
           â†“ (useContext)
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚          Todas as Telas                 â”‚
â”‚  - CadastroScreen (POST usuÃ¡rio)        â”‚
â”‚  - DashboardScreen (GET estatÃ­sticas)   â”‚
â”‚  - NovaTarefaScreen (POST tarefa)       â”‚
â”‚  - ListaTarefasScreen (GET tarefas)     â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
           â†“ (axios)
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚         MockAPI (REST API)              â”‚
â”‚  - /usuario (GET, POST)                 â”‚
â”‚  - /tarefas (GET, POST)                 â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
```

---

## ðŸš€ PROCESSO DE DESENVOLVIMENTO

### ETAPA 1: âœ… CONCLUÃDA
- AnÃ¡lise de requisitos
- CriaÃ§Ã£o da arquitetura
- Estrutura de pastas
- Listagem de dependÃªncias

### ETAPA 2: âœ… CONCLUÃDA
- Gerar comandos de instalaÃ§Ã£o
- Explicar cada dependÃªncia

**Comandos de instalaÃ§Ã£o:**
```bash
npm install
npx expo install --fix
npx expo install react-native-worklets
npm start
```

### ETAPA 3: âœ… CONCLUÃDA
- Criar navegaÃ§Ã£o Drawer

### ETAPA 4: âœ… CONCLUÃDA
- Criar Context API

### ETAPA 5: âœ… CONCLUÃDA
- Criar componentes reutilizÃ¡veis

### ETAPA 6: âœ… CONCLUÃDA
- Criar tela Cadastro

### ETAPA 7: âœ… CONCLUÃDA
- Criar tela Nova Tarefa

### ETAPA 8: âœ… CONCLUÃDA
- Criar tela Lista de Tarefas

### ETAPA 9: âœ… CONCLUÃDA
- Criar Dashboard

### ETAPA 10: âœ… CONCLUÃDA
- Criar integraÃ§Ã£o com MockAPI

### ETAPA 11: âœ… CONCLUÃDA (cÃ³digo)
- RevisÃ£o completa
- VerificaÃ§Ã£o de requisitos
- Checklist final

---

## ðŸ“Œ ANOTAÃ‡Ã•ES IMPORTANTES

- Projeto simples e organizado
- CompatÃ­vel com Expo
- Apenas bibliotecas solicitadas
- Tratamento bÃ¡sico de erros
- Componentes bem estruturados
- Context API para gerenciamento de estado
- Props para comunicaÃ§Ã£o entre componentes

## âœ… CHECKLIST DE VALIDAÃ‡ÃƒO FINAL

### Requisitos da Atividade

* [x] Aplicativo criado com React Native + Expo
* [x] CompatÃ­vel com Snack Expo
* [x] MÃ­nimo de 4 telas
* [x] Tela obrigatÃ³ria de Cadastro de UsuÃ¡rio
* [x] 3 telas adicionais personalizadas
* [x] Drawer Navigator Customizado
* [x] Uso de createContext
* [x] Uso de useContext
* [x] ComunicaÃ§Ã£o direta via Props
* [x] ComunicaÃ§Ã£o indireta via Context API
* [x] FlatList implementada
* [x] Picker implementado para filtros
* [x] API REST com GET
* [x] API REST com POST
* [x] ComponentizaÃ§Ã£o aplicada
* [x] Tratamento bÃ¡sico de erros
* [x] Projeto organizado por pastas
* [ ] ProtÃ³tipo criado no Figma
* [ ] Documento PDF/Word criado
* [ ] VÃ­deo de demonstraÃ§Ã£o gravado
* [ ] Projeto exportado para Snack Expo

## ðŸŒ CONFIGURAÃ‡ÃƒO DA MOCKAPI

SerÃ¡ utilizada a plataforma MockAPI para simular um backend REST.

ENDPOINT DA API: 
https:// 6a2544ef5447714a6f834da2 .mockapi.io /taskflow/api / :endpoint

Recursos que jÃ¡ foram criados:

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

A integraÃ§Ã£o serÃ¡ realizada atravÃ©s do Axios utilizando o arquivo:

services/api.js

Objetivo:

Permitir armazenamento e recuperaÃ§Ã£o de dados de usuÃ¡rios e tarefas simulando um backend real.

Toda comunicaÃ§Ã£o com a API deverÃ¡ ser realizada atravÃ©s do Axios.

## ðŸ“± COMPATIBILIDADE COM SNACK EXPO

O projeto deverÃ¡ ser desenvolvido de forma compatÃ­vel com o Snack Expo.

Evitar bibliotecas que nÃ£o funcionem corretamente no Snack.

Ao final do desenvolvimento deverÃ¡ ser gerado:

* Link pÃºblico do Snack
* Arquivo ZIP do projeto
* VÃ­deo de demonstraÃ§Ã£o
* Documento PDF/Word com prints das telas

## AVISO IMPORTANTE

IMPORTANTE: As versÃµes serÃ£o mantidas conforme as versÃµes instaladas automaticamente pelo Expo SDK 54


---

**Documento criado em:** 30 de Maio de 2026  
**Status:** Planejamento Aprovado âœ…
