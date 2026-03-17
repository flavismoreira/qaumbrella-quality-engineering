import { expect, test } from '@playwright/test';

test.describe('🛡️ Diagnóstico QA Umbrella - sem login', () => {
  test('Deve completar o diagnóstico até a tela de resultado (sem login)', async ({ page }) => {
    await page.goto('/');

    // Início do fluxo (landing até iniciar diagnóstico)
    await page.getByRole('button', { name: /iniciar diagnóstico agora/i }).click();
    await page.getByRole('button', { name: /iniciar diagnóstico/i }).click();

    // Bloco de perguntas (mantendo o fluxo real do codegen, mas mais legível)

    // 1º bloco
    await page.getByRole('button', { name: 'Concordo' }).first().click();
    await page.getByRole('button', { name: 'Discordo' }).nth(3).click();
    await page.getByRole('button', { name: 'Concordo totalmente' }).nth(2).click();
    await page.getByRole('button', { name: 'Próximo' }).click();

    // 2º bloco
    await page.getByRole('button', { name: 'Discordo totalmente' }).first().click();
    await page.getByRole('button', { name: 'Neutro' }).nth(1).click();
    await page.getByRole('button', { name: 'Concordo totalmente' }).nth(2).click();
    await page.getByRole('button', { name: 'Próximo' }).click();

    // 3º bloco
    await page.getByRole('button', { name: 'Discordo' }).nth(1).click();
    await page.getByRole('button', { name: 'Discordo totalmente' }).nth(1).click();
    await page.getByRole('button', { name: 'Concordo' }).nth(4).click();
    await page.getByRole('button', { name: 'Próximo' }).click();

    // 4º bloco
    await page.getByRole('button', { name: 'Concordo totalmente' }).first().click();
    await page.getByRole('button', { name: 'Concordo totalmente' }).nth(1).click();
    await page.getByRole('button', { name: 'Concordo' }).nth(4).click();
    await page.getByRole('button', { name: 'Próximo' }).click();

    // 5º bloco
    await page.getByRole('button', { name: 'Neutro' }).first().click();
    await page.getByRole('button', { name: 'Neutro' }).nth(1).click();
    await page.getByRole('button', { name: 'Neutro', exact: true }).click();
    await page.getByRole('button', { name: 'Próximo' }).click();

    // 6º bloco
    await page.getByRole('button', { name: 'Concordo totalmente' }).first().click();
    await page.getByRole('button', { name: 'Discordo' }).nth(5).click();
    await page.getByRole('button', { name: 'Discordo' }).nth(3).click();
    await page.getByRole('button', { name: 'Próximo' }).click();

    // 7º bloco
    await page.getByRole('button', { name: 'Discordo totalmente' }).first().click();
    await page.getByRole('button', { name: 'Discordo totalmente' }).nth(1).click();
    await page.getByRole('button', { name: 'Discordo totalmente', exact: true }).click();
    await page.getByRole('button', { name: 'Próximo' }).click();

    // 8º bloco
    await page.getByRole('button', { name: 'Concordo' }).first().click();
    await page.getByRole('button', { name: 'Concordo totalmente' }).nth(1).click();
    await page.getByRole('button', { name: 'Concordo' }).nth(4).click();
    await page.getByRole('button', { name: 'Próximo' }).click();

    // 9º bloco
    await page.getByRole('button', { name: 'Neutro' }).first().click();
    await page.getByRole('button', { name: 'Concordo' }).nth(2).click();
    await page.getByRole('button', { name: 'Neutro' }).nth(2).click();
    await page.getByRole('button', { name: 'Ver Resultado' }).click();

    // Validações na tela de resultado (mais estáveis)
    await expect(page.getByRole('heading', { name: /proteção/i })).toBeVisible();
    await expect(page.getByText(/áreas críticas/i)).toBeVisible();
    await expect(page.getByText(/áreas parcialmente/i)).toBeVisible();
  });
});
