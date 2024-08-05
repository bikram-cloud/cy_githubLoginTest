describe('CSSLocators', () => {
  it('csslocators', () => {
    cy.visit('www.google.com', {
      onBeforeLoad(win) {
        Object.defineProperty(win.navigator, 'language', {
          value: 'de',
        });
      },
    });
  });
});
