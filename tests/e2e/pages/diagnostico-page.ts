import type { Locator, Page } from '@playwright/test';

export class DiagnosticoPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  get startNowButton(): Locator {
    return this.page.getByRole('button', { name: /iniciar diagnóstico agora/i });
  }

  get startDiagnosticButton(): Locator {
    return this.page.getByRole('button', { name: /iniciar diagnóstico/i });
  }

  get nextButton(): Locator {
    return this.page.getByRole('button', { name: /próximo|ver resultado/i });
  }

  async openLanding() {
    await this.page.goto('/');
  }

  async startWithoutLogin() {
    const agoraBtn = this.startNowButton.first();
    try {
      await agoraBtn.waitFor({ state: 'visible', timeout: 5000 });
      await agoraBtn.click();
    } catch {
      // Botão "iniciar diagnóstico agora" pode não existir em alguns fluxos.
    }

    if (await agoraBtn.isVisible().catch(() => false)) {
      await this.startDiagnosticButton.click();
    } else {
      // Quando não existe "agora", às vezes é necessário clicar duas vezes para avançar.
      await this.startDiagnosticButton.click();
      await this.startDiagnosticButton.click();
    }

    // Espera o questionário aparecer antes de interagir.
    await this.page
      .getByRole('button', { name: /concordo|discordo|neutro/i })
      .first()
      .waitFor({ state: 'visible', timeout: 60000 });
  }

  async responderFluxoCompletoComCaminhoFeliz() {
    // 1º bloco
    await this.page.getByRole('button', { name: 'Concordo' }).first().click();
    await this.page.getByRole('button', { name: 'Discordo' }).nth(3).click();
    await this.page.getByRole('button', { name: 'Concordo totalmente' }).nth(2).click();
    await this.page.getByRole('button', { name: 'Próximo' }).click();

    // 2º bloco
    await this.page.getByRole('button', { name: 'Discordo totalmente' }).first().click();
    await this.page.getByRole('button', { name: 'Neutro' }).nth(1).click();
    await this.page.getByRole('button', { name: 'Concordo totalmente' }).nth(2).click();
    await this.page.getByRole('button', { name: 'Próximo' }).click();

    // 3º bloco
    await this.page.getByRole('button', { name: 'Discordo' }).nth(1).click();
    await this.page.getByRole('button', { name: 'Discordo totalmente' }).nth(1).click();
    await this.page.getByRole('button', { name: 'Concordo' }).nth(4).click();
    await this.page.getByRole('button', { name: 'Próximo' }).click();

    // 4º bloco
    await this.page.getByRole('button', { name: 'Concordo totalmente' }).first().click();
    await this.page.getByRole('button', { name: 'Concordo totalmente' }).nth(1).click();
    await this.page.getByRole('button', { name: 'Concordo' }).nth(4).click();
    await this.page.getByRole('button', { name: 'Próximo' }).click();

    // 5º bloco
    await this.page.getByRole('button', { name: 'Neutro' }).first().click();
    await this.page.getByRole('button', { name: 'Neutro' }).nth(1).click();
    await this.page.getByRole('button', { name: 'Neutro', exact: true }).click();
    await this.page.getByRole('button', { name: 'Próximo' }).click();

    // 6º bloco
    await this.page.getByRole('button', { name: 'Concordo totalmente' }).first().click();
    await this.page.getByRole('button', { name: 'Discordo' }).nth(5).click();
    await this.page.getByRole('button', { name: 'Discordo' }).nth(3).click();
    await this.page.getByRole('button', { name: 'Próximo' }).click();

    // 7º bloco
    await this.page.getByRole('button', { name: 'Discordo totalmente' }).first().click();
    await this.page.getByRole('button', { name: 'Discordo totalmente' }).nth(1).click();
    await this.page.getByRole('button', { name: 'Discordo totalmente', exact: true }).click();
    await this.page.getByRole('button', { name: 'Próximo' }).click();

    // 8º bloco
    await this.page.getByRole('button', { name: 'Concordo' }).first().click();
    await this.page.getByRole('button', { name: 'Concordo totalmente' }).nth(1).click();
    await this.page.getByRole('button', { name: 'Concordo' }).nth(4).click();
    await this.page.getByRole('button', { name: 'Próximo' }).click();

    // 9º bloco
    await this.page.getByRole('button', { name: 'Neutro' }).first().click();
    await this.page.getByRole('button', { name: 'Concordo' }).nth(2).click();
    await this.page.getByRole('button', { name: 'Neutro' }).nth(2).click();
    await this.page.getByRole('button', { name: 'Ver Resultado' }).click();
  }
}
