describe('Авторизация на сайте', () => {
    it('Неверные логин и пароль', () => {
        cy.fixture('userData').then(data => {
            cy.log("Открытие страницы авторизации")
            cy.visit(data.main_url)

            cy.log("Ввод неверного логина")
            cy.get('input[id="Login"]').type(data.none_existent_login)

            cy.log("Ввод неверного пароля")
            cy.get('input[id="Password"]').type(data.none_existent_password)

            cy.log("Клик по кнопке 'Войти'")
            cy.get('form button[type="submit"]').click()

            cy.log("Проверка появления ошибки")
            cy.get('div[role="alert"] div[class="ant-login-alert-content"]').should('exist')

            cy.log("Проверка нахождения на странице авторизации")
            cy.url().should('eq', data.main_url)
        });
    });
});