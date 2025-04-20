# 🛍️ Ignite Shop

<p align="center">
  <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React Logo" width="80"/>
</p>

Ignite Shop é uma **loja virtual** moderna que permite aos usuários navegar por produtos em forma de carrossel, escolher o desejado e realizar pagamentos de forma segura através do Stripe.

A aplicação permite:
✅ Navegar por uma lista de produtos
✅ Visualizar detalhes de cada produto
✅ Realizar pagamentos seguros via Stripe
✅ Visualizar histórico de compras

---

## 🚀 Tecnologias Principais

| Tecnologia       | Versão       | Descrição |
|------------------|--------------|-----------|
| **Next.js**      | 14.1.0       | Framework React para produção |
| **TypeScript**   | 5.3.3        | Tipagem estática para segurança |
| **Stripe**       | 14.0.0       | Processamento de pagamentos |
| **Stitches**     | 1.2.8        | Sistema de estilização |

---

## 📦 Dependências Principais

- **@stripe/stripe-js** → Integração com Stripe
- **@stitches/react** → Sistema de estilização
- **axios** → Requisições HTTP
- **keen-slider** → Carrossel de produtos
- **next** → Framework React
- **react** → Biblioteca base
- **react-dom** → Renderização React

---

## 🎯 Funcionalidades Implementadas

### 🛍️ **Gerenciamento de Produtos**
✅ Listagem de produtos
✅ Visualização detalhada
✅ Carrossel de imagens
✅ Preços formatados

### 💳 **Sistema de Pagamento**
✅ Integração com Stripe
✅ Checkout seguro
✅ Processamento de pagamentos
✅ Confirmação de compra

### 📱 **Interface Responsiva**
✅ Design adaptativo
✅ Navegação intuitiva
✅ Feedback visual
✅ Animações suaves

---

## 🏛 Arquitetura

### 🌍 **Gerenciamento de Estado**
🔹 **Context API** para estado global
🔹 **Stripe** para processamento de pagamentos

### 🏗 **Componentização**
🔹 Componentes reutilizáveis
🔹 Separação clara de responsabilidades
🔹 Hooks personalizados

### 🎨 **Estilização**
🔹 Sistema de design com Stitches
🔹 Temas consistentes
🔹 Componentes estilizados

---

## 🔒 Segurança e Performance

✅ **Pagamentos seguros** com Stripe
✅ **Otimização de imagens** com Next.js
✅ **Tipagem forte** com TypeScript
✅ **SSR** para melhor performance

---

## ▶️ Como Executar o Projeto

1. Clone o repositório:
   ```sh
   git clone https://github.com/PedroGouveia77/ignite-shop.git
   cd ignite-shop
   ```

2. Instale as dependências:
   ```sh
   npm install
   ```

3. Configure as variáveis de ambiente:
   Crie um arquivo `.env.local` com:
   ```
   NEXT_PUBLIC_STRIPE_PUBLIC_KEY=sua_chave_publica_do_stripe
   STRIPE_SECRET_KEY=sua_chave_secreta_do_stripe
   ```

4. Execute o projeto:
   ```sh
   npm run dev
   ```

A aplicação estará disponível em http://localhost:3000 🚀

---

## 📝 Considerações Finais

Este projeto foi desenvolvido como parte do curso Ignite da Rocketseat, focando em:
- Integração com Stripe
- Gerenciamento de estado
- Performance e SEO
- Experiência do usuário

Se tiver sugestões ou melhorias, sinta-se à vontade para contribuir! 🎉

🚀 Desenvolvido por Pedro Henrique Gouveia de Miranda Couto
- [GitHub](https://github.com/PedroGouveia77) | [LinkedIn](www.linkedin.com/in/pedrohenriquegouveia) 
