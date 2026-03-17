# Estratégia de Testes

## Objetivo

Definir a abordagem geral de quality engineering deste repositório, cobrindo tipos de teste, escopo, ambientes, ferramentas e critérios de qualidade (quality gates).

## Escopo

- Testes E2E: jornadas críticas de usuário
- Testes de API: endpoints e integrações de serviço
- Testes de contrato: compatibilidade provedor/consumidor
- Testes de performance: baseline e checagens de regressão

## Pirâmide de testes (diretriz)

- Priorizar testes de API/contrato para maior cobertura e velocidade
- Usar testes E2E para um conjunto pequeno de fluxos de alto valor

## Ambientes

- Local: validação pelo time de desenvolvimento
- CI: gates em pull requests e na branch principal
- Staging: validação pré-release (quando disponível)

## Ferramentas

- Playwright: end-to-end (e, opcionalmente, fluxos de API sem UI)
- k6: performance
- CI/CD: GitHub Actions
- Unitários: Vitest (a confirmar conforme stack do produto)

## Quality gates (sugestão)

- PR: lint + unit (quando aplicável) + API/contrato (rápidos) + E2E smoke
- Main: suíte completa + smoke de performance
