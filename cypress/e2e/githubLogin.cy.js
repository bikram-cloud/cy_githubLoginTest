describe('GitHub Login Test', () => {
  it('should log in to GitHub', () => {
    // GitHubのログインページに移動
    cy.visit(Cypress.env('github_loginUrl'));

    // ユーザー名とパスワードを入力
    cy.get('#login_field').type(Cypress.env('github_userName'));
    cy.get('#password').type(Cypress.env('github_userPassword'));

    // ログインボタンをクリック
    cy.get('.position-relative > .btn').click();

    // ログイン後のURLの確認
    cy.url().should('eq', 'https://github.com/');

    //ログインが成功したことを確認するためにユーザーのプロフィールアイコンを確認
    cy.get('.Button-label > .avatar').should('be.visible');
  });
});
