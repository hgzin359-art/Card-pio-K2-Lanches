# Guia: Como Publicar no GitHub

Este guia passo a passo vai ajudar você a publicar o cardápio da K2 Lanches no GitHub.

## 📋 Pré-requisitos

1. Criar uma conta no [GitHub](https://github.com) (grátis)
2. Instalar o [Git](https://git-scm.com/downloads) no seu computador
3. Ter o projeto K2 Lanches em uma pasta no seu computador

## 🚀 Passo a Passo

### 1. Criar um Novo Repositório no GitHub

1. Acesse [github.com](https://github.com) e faça login
2. Clique no ícone **+** no canto superior direito
3. Selecione **New repository**
4. Preencha os campos:
   - **Repository name**: `k2-lanches-menu`
   - **Description**: `Cardápio digital moderno para K2 Lanches`
   - **Public** (para que qualquer pessoa possa acessar)
   - Deixe as outras opções como padrão
5. Clique em **Create repository**

### 2. Configurar Git no Seu Computador

Abra o terminal/prompt de comando e execute:

```bash
# Configurar seu nome
git config --global user.name "Seu Nome"

# Configurar seu email
git config --global user.email "seu.email@example.com"
```

### 3. Fazer Upload do Projeto

Abra o terminal na pasta do projeto `k2-lanches-menu` e execute:

```bash
# Inicializar o repositório local
git init

# Adicionar todos os arquivos
git add .

# Criar o primeiro commit
git commit -m "Primeiro commit: Cardápio digital K2 Lanches"

# Adicionar o repositório remoto (copie a URL do seu repositório GitHub)
git remote add origin https://github.com/SEU_USUARIO/k2-lanches-menu.git

# Enviar os arquivos para o GitHub
git branch -M main
git push -u origin main
```

**Nota**: Substitua `SEU_USUARIO` pelo seu nome de usuário do GitHub.

### 4. Ativar GitHub Pages

1. Vá para o repositório no GitHub
2. Clique em **Settings** (Configurações)
3. Na barra lateral, clique em **Pages**
4. Em **Source**, selecione:
   - Branch: `main`
   - Folder: `/ (root)`
5. Clique em **Save**

Seu cardápio estará disponível em: `https://SEU_USUARIO.github.io/k2-lanches-menu/`

## 📝 Atualizando o Cardápio

Sempre que fizer mudanças, execute:

```bash
# Adicionar as mudanças
git add .

# Criar um commit descrevendo as mudanças
git commit -m "Descrição das mudanças"

# Enviar para o GitHub
git push
```

## 🔧 Exemplos de Commits

```bash
# Adicionar novo item ao cardápio
git commit -m "Adicionar novo item: X Especial Premium"

# Atualizar preços
git commit -m "Atualizar preços de bebidas"

# Melhorar design
git commit -m "Melhorar responsividade em mobile"

# Corrigir bug
git commit -m "Corrigir erro de scroll na navbar"
```

## 🌐 Acessar o Cardápio Online

Após ativar o GitHub Pages, seu cardápio estará disponível em:

```
https://SEU_USUARIO.github.io/k2-lanches-menu/
```

Você pode compartilhar este link com clientes, amigos e redes sociais!

## 💡 Dicas Úteis

### Adicionar um Domínio Personalizado (Opcional)

Se quiser um domínio próprio como `k2lanches.com.br`:

1. Compre um domínio em um registrador (GoDaddy, Registro.br, etc)
2. Configure os DNS apontando para o GitHub Pages
3. Em Settings > Pages, adicione o domínio personalizado

### Usar um Serviço de Hospedagem Alternativo

Se preferir não usar GitHub Pages, você pode usar:

- **Netlify**: Conecte seu repositório e deploy automático
- **Vercel**: Ótimo para sites estáticos
- **Hostinger**: Hospedagem tradicional com suporte FTP
- **000webhost**: Hospedagem gratuita

### Criar um Favicon

Para adicionar um ícone na aba do navegador, adicione ao `<head>` do HTML:

```html
<link rel="icon" type="image/png" href="src/assets/images/favicon.png">
```

## ❓ Troubleshooting

### Erro: "fatal: not a git repository"

Execute na pasta do projeto:
```bash
git init
```

### Erro: "Permission denied (publickey)"

Configure sua chave SSH no GitHub:
1. Gere uma chave SSH: `ssh-keygen -t ed25519 -C "seu.email@example.com"`
2. Copie a chave pública: `cat ~/.ssh/id_ed25519.pub`
3. Vá em GitHub Settings > SSH and GPG keys > New SSH key
4. Cole a chave e salve

### O site não aparece após fazer push

Aguarde 5-10 minutos para o GitHub Pages processar. Se persistir:
1. Verifique se o repositório é público
2. Confirme que o arquivo `index.html` está na raiz
3. Verifique a aba "Actions" para erros de build

## 📞 Suporte

Para dúvidas sobre Git e GitHub:
- [Documentação do Git](https://git-scm.com/doc)
- [Guia do GitHub](https://guides.github.com/)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/github)

---

**Parabéns! Seu cardápio digital está no ar! 🎉**
