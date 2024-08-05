# Cypress GitHub Login Test

This project contains an end-to-end test for GitHub login using Cypress.

## Setup

1. Clone the repository:

   ```sh
   git clone https://github.com/your-username/my-cypress-project.git

   cd my-cypress-project

   ```

2. npm install

3. In cypress.config.js, update the github_loginUrl, github_userName and github_userPassword with your GitHub credentials:

   env: {
   github_loginUrl: 'github_loginUrl'
   github_userName: 'your_github_userName',
   github_userPassword: 'your_github_userPassword'
   }

※GitHub ログインテスト実装する前に認証がある場合は解除し
テスト実装するようにお願いします。
