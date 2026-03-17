import { expect, test } from '@playwright/test';
import { DiagnosticoPage } from './pages/diagnostico-page';

test.describe('🛡️ Diagnóstico QA Umbrella - sem login', () => {
  test('Deve completar o diagnóstico até a tela de resultado (sem login)', async ({ page }) => {
    const diagnostico = new DiagnosticoPage(page);

    await diagnostico.openLanding();
    await diagnostico.startWithoutLogin();

    await diagnostico.responderFluxoCompletoComCaminhoFeliz();

    // Validação simples da tela de resultado, com mais tempo para carregar
    await expect(page.getByText(/Diagnóstico Concluído/i)).toBeVisible({ timeout: 15000 });
  });
});
