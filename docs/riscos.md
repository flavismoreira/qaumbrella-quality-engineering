# Riscos

Este arquivo consolida os principais riscos identificados para o projeto QA Umbrella.

> Versão em PT-BR inspirada em `docs/risks.md`.

## Riscos de produto / escopo

- Cobertura incompleta de fluxos críticos por requisitos pouco claros ou mudanças tardias
- Testes flakey reduzindo o sinal e desacelerando a entrega

## Riscos de ambiente

- Ambientes de staging/teste instáveis causando falsos negativos
- Baixa paridade entre CI/staging/prod gerando defeitos escapados

## Riscos de dados

- Dados de teste não representativos do uso real
- Vazamento de PII em datasets de teste ou relatórios

## Riscos de ferramentas / pipeline

- Pipelines lentas desincentivando execuções frequentes
- Falta de artefatos (logs, traces) dificultando o diagnóstico de falhas

## Mitigações (alto nível)

- Manter E2E pequeno e de alto valor; empurrar cobertura para API/contrato
- Adicionar retries apenas com correção de causa raiz; quarentenar testes flakey com responsáveis
- Padronizar geração e sanitização de dados de teste
- Garantir que o CI arquive relatórios, logs e traces em `reports/`
