# Configuração do EmailJS para o Formulário de Contato

Para que o formulário de contato envie emails reais, você precisa configurar o serviço EmailJS. Siga os passos abaixo:

## 1. Criar uma conta no EmailJS

1. Acesse [EmailJS](https://www.emailjs.com/) e crie uma conta gratuita
2. O plano gratuito permite enviar até 200 emails por mês, o que é suficiente para a maioria dos sites de pequeno porte

## 2. Configurar um serviço de email

1. Faça login na sua conta EmailJS
2. Acesse a seção "Email Services" 
3. Clique em "Add New Service"
4. Escolha seu provedor de email (Gmail, Outlook, etc.)
5. Siga as instruções para conectar sua conta de email
6. Anote o **Service ID** que será usado no código

## 3. Criar um template de email

1. Acesse a seção "Email Templates"
2. Clique em "Create New Template"
3. Configure o template conforme necessário. Exemplo:
   - Assunto: `{{subject}} - Nova mensagem do site`
   - Corpo:
     ```
     Nome: {{name}}
     Email: {{email}}
     Assunto: {{subject}}
     Mensagem: {{message}}
     ```
4. Salve o template e anote o **Template ID**

## 4. Obter a chave pública

1. Acesse a seção "Account" > "API Keys"
2. Copie sua **Public Key**

## 5. Configurar o código

1. Abra o arquivo `components/Contact.tsx`
2. Substitua os placeholders pelas suas chaves:
   - `YOUR_SERVICE_ID` pelo Service ID que você anotou
   - `YOUR_TEMPLATE_ID` pelo Template ID que você anotou
   - `YOUR_PUBLIC_KEY` pela Public Key que você copiou

## 6. Testar o formulário

1. Execute o projeto com `npm run dev`
2. Acesse o site e envie uma mensagem de teste através do formulário
3. Verifique sua caixa de entrada para confirmar que o email foi recebido

## Observações

- Certifique-se de que os nomes dos campos no formulário (`name`, `email`, `subject`, `message`) correspondam aos usados no seu template do EmailJS
- Em caso de problemas, verifique o console do navegador para mensagens de erro 

const serviceId = 'YOUR_SERVICE_ID';
const templateId = 'YOUR_TEMPLATE_ID';
const publicKey = 'YOUR_PUBLIC_KEY'; 