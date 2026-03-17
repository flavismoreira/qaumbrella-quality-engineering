# 🧪 QA Umbrella — Projeto de Engenharia de Qualidade

> Projeto completo de **Quality Engineering** aplicado em um sistema real: **https://www.qaumbrella.com.br**

---

## 📌 Sobre o Projeto

Este repositório representa a aplicação prática de uma **estratégia completa de qualidade de software** sobre um sistema em produção: **QA Umbrella**.

Mais do que automação de testes, este projeto demonstra:

- Definição de **estratégia de testes**
- Aplicação de diferentes **níveis de teste**
- Validação de **fluxos reais de usuários**
- Garantia de **confiabilidade e performance**
- Uso de **boas práticas modernas de QA**

💡 Este não é apenas um projeto de testes — é um **projeto de engenharia de qualidade de ponta a ponta**.

---

## 🎯 Objetivo

Simular como um(a) **QA Engineer / SDET** atua em um produto real, garantindo qualidade desde a concepção até a validação contínua.

Inclui:

- Testes funcionais
- Automação em múltiplas camadas
- Testes de performance
- Análise baseada em risco
- Documentação técnica

---

## 🌐 Sistema sob Teste (SUT)

- 🔗 URL: https://www.qaumbrella.com.br
- 📚 Tipo: Plataforma educacional (QA)
- 👩‍💻 Responsável: Flavis Moreira

---

## 🧠 Estratégia de Testes

Este projeto segue uma abordagem **multi-camadas**:

### 🧩 Níveis de Teste

- Testes Unitários _(planejado / parcial)_
- Testes de Integração
- Testes de API
- Testes End-to-End (E2E)
- Testes de Performance
- Testes Exploratórios

📄 Estratégia completa: [`/docs/test-strategy.md`](./docs/test-strategy.md)

---

## 🛠️ Stack Tecnológica

### 🔹 Automação

- Playwright (E2E e API)
- Robot Framework (API - opcional)
- k6 (Performance)

### 🔹 Linguagens

- TypeScript / JavaScript

### 🔹 CI/CD

- GitHub Actions

### 🔹 Relatórios (planejado)

- Allure Reports

---

## 📁 Estrutura do Projeto

```id="ptbr1"
qaumbrella-quality-engineering/
│
├── tests/
│   ├── e2e/
│   ├── api/
│   ├── performance/
│   └── contract/
│
├── k6/
├── playwright/
├── fixtures/
├── test-data/
├── utils/
│
├── docs/
│   ├── test-strategy.md
│   ├── test-plan.md
│   ├── riscos.md
│   └── bugs-encontrados.md
│
├── reports/
├── .github/workflows/
│
└── README.md
```

---

## 🧪 Cobertura de Testes

### ✅ E2E

- Navegação do usuário
- Fluxos principais (ex.: diagnóstico com e sem login)

### 🔌 API

- Validação de endpoints
- Estrutura de resposta
- Integridade de dados

### ⚡ Performance

- Testes de carga
- Tempo de resposta
- Cenários de estresse

### 🔍 Exploratórios

- Descoberta de bugs
- Casos de borda
- Comportamentos inesperados

---

## 🛠️ Detalhes Técnicos do Projeto

### Padrão do projeto

- **Linguagem dos testes**: TypeScript (`.ts`)
- **Configurações principais**: `playwright.config.ts`, `vitest.config.ts`, `tsconfig.json`

### Organização das suítes

- E2E em `tests/e2e/`, nomeados por **módulo + variação**
  - Ex.: `diagnostico-sem-login.e2e.spec.ts`, `diagnostico-com-login.e2e.spec.ts`
- Page Objects de apoio em `tests/e2e/pages/`

### Scripts (npm)

- `npm run test:unit`
- `npm run test:e2e`
- `npm run test:api`
- `npm run typecheck`
- `npm run lint`
- `npm run format`

---

## 🚀 Como Executar

```bash id="ptbr2"
git clone https://github.com/seu-usuario/qaumbrella-quality-engineering.git
cd qaumbrella-quality-engineering
npm install
npm run playwright:install
npm test
```

Performance (k6):

```bash id="ptbr3"
k6 run k6/smoke.js
```

---

## 🤖 CI/CD

- Execução automática via GitHub Actions (`.github/workflows/ci.yml`)
- Validação contínua da qualidade (lint, typecheck, testes)

---

## 🐞 Bugs Identificados

📄 [`/docs/bugs-encontrados.md`](./docs/bugs-encontrados.md)

Inclui:

- Descrição
- Passos para reproduzir
- Resultado esperado vs atual
- Severidade

---

## 💡 Destaques

- Testes em sistema real em produção
- Arquitetura independente de QA
- Estratégia baseada em risco
- Testes em múltiplas camadas
- Foco em engenharia de qualidade

---

## 👩‍💻 Sobre mim

Sou **Flavis Moreira**, QA Engineer focada em:

- Automação de testes
- Estratégia de qualidade
- APIs e E2E
- Estruturação de processos de QA

Criadora da **QA Umbrella** 🚀

---

## ⭐ Considerações finais

Este projeto representa minha abordagem como **engenheira de qualidade**, indo além da execução de testes para atuar diretamente na **qualidade do produto**.

---
