# 📤 Como Fazer Upload dos Arquivos no GitHub

## **FORMA 1: Upload Direto (Mais Fácil - Sem Git)**

### Passo 1: Criar o Repositório
1. Acesse **github.com** e faça login
2. Clique no **+** (canto superior direito) → **New repository**
3. Preencha:
   - **Repository name**: `k2-lanches-menu`
   - **Description**: `Cardápio digital para K2 Lanches`
   - Selecione **Public**
4. Clique em **Create repository**

### Passo 2: Upload dos Arquivos
1. Na página do repositório, clique em **Add file** → **Upload files**
2. Você verá uma área com texto "Drag files here to add them to your repository"
3. **Opção A - Arrastar e soltar:**
   - Abra a pasta `k2-lanches-menu` no seu computador
   - Selecione TODOS os arquivos e pastas
   - Arraste para a área do GitHub
4. **Opção B - Clicar para selecionar:**
   - Clique em "choose your files"
   - Selecione todos os arquivos da pasta

### Passo 3: Confirmar Upload
1. Role para baixo até ver "Commit changes"
2. Deixe a mensagem padrão ou escreva algo como: "Adicionar cardápio K2 Lanches"
3. Clique em **Commit changes**

### Passo 4: Ativar GitHub Pages
1. Vá em **Settings** (engrenagem no topo)
2. Na barra lateral, clique em **Pages**
3. Em "Source", selecione:
   - Branch: **main**
   - Folder: **/ (root)**
4. Clique em **Save**
5. Aguarde alguns minutos e seu site estará em:
   ```
   https://SEU_USUARIO.github.io/k2-lanches-menu/
   ```

---

## **FORMA 2: Usando Git (Mais Profissional)**

### Passo 1: Instalar Git
- Baixe em: https://git-scm.com/downloads
- Instale normalmente

### Passo 2: Abrir o Terminal
- **Windows**: Clique com botão direito na pasta → "Git Bash Here"
- **Mac/Linux**: Abra o Terminal e navegue até a pasta

### Passo 3: Executar Comandos

```bash
# Entrar na pasta do projeto
cd k2-lanches-menu

# Inicializar repositório local
git init

# Adicionar todos os arquivos
git add .

# Criar primeiro commit
git commit -m "Cardápio digital K2 Lanches"

# Adicionar repositório remoto (copie a URL do seu repositório GitHub)
git remote add origin https://github.com/SEU_USUARIO/k2-lanches-menu.git

# Enviar para o GitHub
git branch -M main
git push -u origin main
```

**Substitua `SEU_USUARIO` pelo seu nome de usuário do GitHub!**

### Passo 4: Ativar GitHub Pages
Mesmo processo da Forma 1 (Passo 4 acima)

---

## **QUAL FORMA ESCOLHER?**

| Forma | Vantagem | Desvantagem |
|-------|----------|------------|
| **Upload Direto** | Mais fácil, sem instalar nada | Não ideal para atualizações frequentes |
| **Git** | Profissional, fácil atualizar | Precisa instalar Git e aprender comandos |

**Recomendação**: Se é a primeira vez, use a **Forma 1 (Upload Direto)**. Se pretende fazer muitas atualizações, aprenda a **Forma 2 (Git)**.

---

## **ESTRUTURA ESPERADA NO GITHUB**

Após fazer upload, seu repositório deve ficar assim:

```
k2-lanches-menu/
├── index.html
├── README.md
├── GITHUB-SETUP.md
├── package.json
├── .gitignore
└── src/
    ├── assets/
    │   └── images/
    │       ├── hero.png
    │       ├── lanches.png
    │       ├── porcoes.png
    │       └── chopp.png
    └── styles/
        ├── style.css
        └── script.js
```

---

## **VERIFICAR SE DEU CERTO**

1. Vá em **Settings** → **Pages**
2. Procure por uma mensagem verde dizendo:
   ```
   Your site is published at https://seu-usuario.github.io/k2-lanches-menu/
   ```
3. Clique no link para acessar seu cardápio! 🎉

---

## **ATUALIZAÇÕES FUTURAS**

### Com Upload Direto:
1. Vá ao repositório
2. Clique no arquivo que quer editar
3. Clique no ícone de lápis (Edit)
4. Faça as mudanças
5. Clique em "Commit changes"

### Com Git:
```bash
# Fazer mudanças nos arquivos
# Depois executar:
git add .
git commit -m "Descrição das mudanças"
git push
```

---

## **DÚVIDAS FREQUENTES**

### P: Quanto tempo leva para o site aparecer?
**R**: Geralmente 2-5 minutos. Se demorar mais, verifique se o repositório é público.

### P: Posso usar um domínio próprio?
**R**: Sim! Em Settings → Pages, tem opção de adicionar domínio personalizado.

### P: Como compartilho o link?
**R**: Copie a URL: `https://seu-usuario.github.io/k2-lanches-menu/` e compartilhe nas redes sociais, WhatsApp, etc!

### P: Preciso pagar algo?
**R**: Não! GitHub Pages é 100% gratuito para repositórios públicos.

---

**Pronto! Agora você sabe como fazer upload! 🚀**
