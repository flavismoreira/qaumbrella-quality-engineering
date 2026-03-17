# Plano de Testes

## Objetivo

Planejar e acompanhar a execução das suítes de teste deste repositório.

## O que testamos

- **E2E**: fluxos-chave de negócio e regressões
- **API**: corretude dos endpoints, autenticação e casos de borda
- **Contrato**: compatibilidade consumidor/provedor
- **Performance**: baseline de throughput/latência e limiares de regressão

## Dados de teste e fixtures

- `fixtures/`: fixtures estáticas (arquivos, mocks, etc.)
- `test-data/`: datasets de entrada (CSV/JSON) usados pelos testes

## Execução

- Execuções locais: disparadas durante mudanças
- Execuções em CI: automatizadas em PRs e na branch principal

## Relatórios

- Saídas armazenadas em `reports/` (o CI pode publicar/arquivar artefatos)

## Critérios de entrada/saída (exemplo)

- **Entrada**: requisitos definidos, ambiente estável, dados de teste disponíveis
- **Saída**: testes críticos passando, sem defeitos alto/crítico em aberto, relatórios publicados
