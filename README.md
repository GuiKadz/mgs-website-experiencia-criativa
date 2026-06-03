# MGS 

> Site institucional da MGS, empresa especializada em **produção e manutenção de máquinas industriais** para os setores de **mineração** e **madeireira**. Desenvolvido como projeto acadêmico (PUCPR).

---

## 📋 Sobre o Projeto

Este repositório contém o site institucional da **MGS**, empresa familiar fundada com foco em soluções industriais robustas para o setor de mineração, com atuação também no segmento madeireiro.

O site foi desenvolvido como trabalho de faculdade e tem como objetivo apresentar os serviços, diferenciais e contato da empresa.

---

## 🏗️ Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript (Vanilla)

---

## 📁 Estrutura de Pastas

```
mgs-site/
├── index.html
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── main.js
│   └── img/
├── pages/
│   ├── sobre.html
│   ├── servicos.html
│   └── contato.html
└── README.md
```

---

## 🚀 Como Rodar Localmente

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/mgs-site.git

# Acesse a pasta
cd mgs-site

# Abra o arquivo principal no navegador
# (ou use a extensão Live Server no VS Code)
open index.html
```

---

## 💻 Conventional Commits

Este projeto adota o padrão **Conventional Commits** para manter o histórico do Git limpo e legível.

### Formato

```
<tipo>(escopo opcional): <descrição curta>

[corpo opcional]

[rodapé opcional]
```

### Tipos Principais

| Tipo | Quando usar |
|------|-------------|
| `feat` | Nova funcionalidade ou seção no site |
| `fix` | Correção de bug ou erro visual |
| `style` | Alterações de CSS, formatação, espaçamento (sem mudar lógica) |
| `refactor` | Reescrita de código sem alterar comportamento |
| `content` | Atualização de textos, imagens ou conteúdo da página |
| `docs` | Alterações no README ou documentação |
| `chore` | Tarefas de manutenção (configs, dependências) |

### Exemplos Práticos

```bash
# Adicionando uma nova seção
git commit -m "feat(home): adiciona seção de serviços de mineração"

# Corrigindo layout
git commit -m "fix(navbar): corrige alinhamento do menu em mobile"

# Atualizando texto
git commit -m "content(sobre): atualiza história da empresa MGS"

# Ajuste visual sem lógica
git commit -m "style(global): ajusta paleta de cores e tipografia"

# Atualização do README
git commit -m "docs: adiciona instruções de uso no README"
```

### Boas Práticas de Commit

- ✅ Escreva no **imperativo**: `adiciona`, `corrige`, `remove` — não `adicionado` ou `adicionando`
- ✅ Descrição curta: **máximo 72 caracteres** na primeira linha
- ✅ Use **escopo** para indicar qual parte do site foi alterada: `(home)`, `(contato)`, `(navbar)`
- ✅ Faça commits **pequenos e frequentes** — um commit por mudança lógica
- ❌ Evite commits genéricos como `git commit -m "ajustes"` ou `git commit -m "wip"`

---

## 🌿 Fluxo de Branches

```bash
main          → versão estável / entregável
dev           → desenvolvimento ativo
feature/nome  → funcionalidades novas (ex: feature/pagina-contato)
fix/nome      → correções (ex: fix/responsividade-mobile)
```

---

## 👨‍👩‍👦 Sobre a MGS

A **MGS — Marcos, Guilherme e Simone** é uma empresa especializada na produção e manutenção de máquinas industriais pesadas, atendendo principalmente o setor de mineração e, complementarmente, o segmento madeireiro. Com estrutura familiar e comprometimento técnico, a MGS entrega soluções duráveis e de alta performance para operações industriais exigentes.

---

## 📬 Contato

Para mais informações sobre a empresa, acesse o site ou entre em contato diretamente.

---

*Projeto desenvolvido para fins acadêmicos — PUCPR.*