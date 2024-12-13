 // Array para armazenar os dados dos usuários (simulação de banco de dados)
 let users = [];

 // Exibe o formulário de cadastro
 function showRegisterForm() {
     document.getElementById('register-form').classList.remove('hidden');
     document.getElementById('login-form').classList.add('hidden');
     document.getElementById('recovery-form').classList.add('hidden');
     document.getElementById('new-password-form').classList.add('hidden');
 }

 // Exibe o formulário de login
 function showLoginForm() {
     document.getElementById('login-form').classList.remove('hidden');
     document.getElementById('register-form').classList.add('hidden');
     document.getElementById('recovery-form').classList.add('hidden');
     document.getElementById('new-password-form').classList.add('hidden');
 }

 // Exibe o formulário de recuperação de senha
 function showRecoveryForm() {
     document.getElementById('recovery-form').classList.remove('hidden');
     document.getElementById('register-form').classList.add('hidden');
     document.getElementById('login-form').classList.add('hidden');
     document.getElementById('new-password-form').classList.add('hidden');
 }

 // Exibe o formulário para definir nova senha
 function showNewPasswordForm() {
     document.getElementById('new-password-form').classList.remove('hidden');
     document.getElementById('recovery-form').classList.add('hidden');
 }

 // Função para gerar um código de segurança aleatório de 5 dígitos (números e letras)
 function generateSecurityCode() {
     const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
     let code = '';
     for (let i = 0; i < 5; i++) {
         const randomIndex = Math.floor(Math.random() * characters.length);
         code += characters[randomIndex];
     }
     return code;
 }

 // Função para registrar o usuário
 function register() {
     const username = document.getElementById('username').value;
     const email = document.getElementById('email').value;
     const password = document.getElementById('password').value;

     if (username && email && password) {
         // Gerando código de segurança aleatório
         const securityCode = generateSecurityCode();
         const user = { username, email, password, securityCode };
         users.push(user);

         // Exibe o código de segurança no console (simulando armazenamento seguro)
         console.log('Cadastro realizado com sucesso! Código de segurança: ${securityCode}');

         // Mensagem de sucesso
         document.getElementById('register-message').innerHTML = 'Cadastro realizado com sucesso!<br> Seu código de segurança é: <span>${securityCode}</span>';

         // Limpar os campos após cadastro
         document.getElementById('username').value = '';
         document.getElementById('email').value = '';
         document.getElementById('password').value = '';
     }
 }

 // Função de login
 function login() {
     const email = document.getElementById('login-email').value;
     const password = document.getElementById('login-password').value;
     const user = users.find(user => user.email === email && user.password === password);

     if (user) {
         document.getElementById('login-message').innerText = 'Login realizado com sucesso!';

         // Redireciona para o site.html após 2 segundos
         setTimeout(function() {
             window.location.href = 'site.html'; // Altere o nome da página para onde você deseja redirecionar
         }, 2000); // O tempo de espera pode ser ajustado conforme necessário
     } else {
         document.getElementById('login-message').innerText = 'E-mail ou senha incorretos.';
     }
 }

 // Função para verificar o código de segurança na recuperação de senha
 function verifySecurityCode() {
     const recoveryEmail = document.getElementById('recovery-email').value;
     const recoveryCode = document.getElementById('recovery-code').value;
     const user = users.find(user => user.email === recoveryEmail);

     if (user && user.securityCode === recoveryCode) {
         document.getElementById('recovery-message').innerText = 'Código correto! Defina sua nova senha.';
         showNewPasswordForm(); // Exibe o formulário para definir nova senha
     } else {
         document.getElementById('recovery-message').innerText = 'Código de segurança incorreto.';
     }
 }

 // Função para atualizar a senha
 function updatePassword() {
     const newPassword = document.getElementById('new-password').value;
     const confirmPassword = document.getElementById('confirm-password').value;

     if (newPassword === confirmPassword) {
         document.getElementById('new-password-message').innerText = 'Senha atualizada com sucesso!';
         // Atualize a senha do usuário aqui, se necessário
     } else {
         document.getElementById('new-password-message').innerText = 'As senhas não coincidem.';
     }
 }