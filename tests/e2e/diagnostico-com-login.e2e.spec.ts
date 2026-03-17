import { test } from '@playwright/test';
import { DiagnosticoPage } from './pages/diagnostico-page';

test.describe('🛡️ Diagnóstico QA Umbrella - com login', () => {
  test('Fluxo até a tela de resultado (com login)', async ({ page }) => {
    const diagnostico = new DiagnosticoPage(page);

    await diagnostico.openLanding();
    await diagnostico.startWithoutLogin();

    await diagnostico.responderFluxoCompletoComCaminhoFeliz();
    // Por enquanto, sem asserções adicionais até estabilizarmos os seletores de login/Google.
  });
});
