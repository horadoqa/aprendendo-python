# 🔬 Trilha de Ciência Computacional

Para a **trilha de Ciência**, eu faria um caminho diferente da trilha de Dados. Aqui o objetivo não é principalmente BI ou análise de negócios, mas usar programação para **modelagem matemática, simulação, análise numérica e computação científica**.

A sequência principal seria:

> **Python → NumPy → SciPy → Pandas → Visualização → Matemática → Computação científica → Projetos**

---

# 🐍 Fase 1 — Base de Python

Aproveite os módulos que você já possui.

### Módulo 1 — Aulas 01–07

**Essencial**

* Variáveis
* Tipos
* Operadores
* Condições
* Repetições
* Lógica

### Módulo 2 — Aulas 08–13

**Essencial**

* Listas
* Tuplas
* Dicionários
* Sets
* Estruturas complexas

### Módulo 3 — Aulas 14–18

**Essencial**

* Funções
* Parâmetros
* `return`
* Escopo
* `lambda`
* Comprehensions

### Módulo 4 — Aulas 20–24

**Importante**

* Módulos
* Pacotes
* Exceções
* Debugging

---

# 🔢 Fase 2 — Matemática para Computação Científica

Antes de aprofundar SciPy, eu colocaria uma base matemática.

# 🟢 Módulo 14 — Matemática

### Aula 81 — Álgebra

* Equações
* Funções
* Polinômios
* Sistemas lineares

### Aula 82 — Vetores e Matrizes

* Vetores
* Matrizes
* Operações matriciais
* Determinantes
* Autovalores e autovetores

### Aula 83 — Cálculo

* Limites
* Derivadas
* Integrais
* Funções de várias variáveis

### Aula 84 — Probabilidade

* Probabilidade
* Variáveis aleatórias
* Distribuições
* Esperança
* Variância

### Aula 85 — Equações Diferenciais

* EDOs
* Condições iniciais
* Sistemas de equações diferenciais

Não precisa dominar matemática de nível universitário inteira antes de começar NumPy. A ideia é **aprender matemática junto com sua implementação computacional**.

---

# 🔢 Fase 3 — NumPy

## 🟡 Módulo 15 — NumPy

### Aula 86 — Arrays

* `ndarray`
* Dimensões
* `shape`
* `dtype`
* Indexação
* Slicing

### Aula 87 — Operações

* Operações vetorizadas
* Broadcasting
* Funções matemáticas
* Estatística

### Aula 88 — Álgebra Linear

* Matrizes
* Produto matricial
* Sistemas lineares
* Decomposições

### Aula 89 — Geração de dados

* Sequências
* Números aleatórios
* Distribuições
* Simulações

### Aula 90 — Performance

* Vetorização
* Comparação com loops
* Memória
* Operações eficientes

---

# 🧮 Fase 4 — SciPy

Aqui está o grande diferencial da trilha.

# 🔵 Módulo 16 — SciPy

### Aula 91 — Introdução ao SciPy

* Estrutura
* Submódulos
* Integração com NumPy

### Aula 92 — `scipy.linalg`

* Álgebra linear
* Sistemas lineares
* Decomposições
* Autovalores

### Aula 93 — `scipy.integrate`

* Integração numérica
* EDOs
* Sistemas dinâmicos

### Aula 94 — `scipy.optimize`

* Otimização
* Minimização
* Maximização
* Ajuste de parâmetros

### Aula 95 — `scipy.stats`

* Distribuições
* Testes estatísticos
* Probabilidade
* Inferência

### Aula 96 — `scipy.signal`

* Sinais
* Filtros
* Transformadas
* Processamento de sinais

---

# 🐼 Fase 5 — Pandas

O Pandas entra depois de NumPy/SciPy para trabalhar com **dados experimentais e resultados de simulações**.

## Módulo 11 — Aulas 60–61

### Aula 60 — Pandas

* `DataFrame`
* `Series`
* Filtragem
* Agrupamento
* `merge`

### Aula 61 — Limpeza

* Valores ausentes
* Duplicados
* Conversão de tipos
* Organização dos dados

Aqui o objetivo é conseguir transformar:

```text
Experimento / Simulação
        ↓
       Dados
        ↓
      Pandas
        ↓
     Análise
```

---

# 📊 Fase 6 — Visualização científica

## Módulo 11 — Aula 62

Mas eu aprofundaria além de apenas gráficos comuns.

### Aula 97 — Matplotlib

* Line plots
* Scatter plots
* Histograms
* Subplots
* Anotações

### Aula 98 — Visualização científica

* Heatmaps
* Contour plots
* Gráficos 3D
* Campos vetoriais
* Escalas logarítmicas

### Aula 99 — Seaborn

* Distribuições
* Correlações
* Comparações estatísticas

### Aula 100 — Visualização de simulações

Exemplo:

```text
Modelo matemático
       ↓
    NumPy/SciPy
       ↓
    Simulação
       ↓
   Matplotlib
       ↓
    Gráfico
```

---

# 🔬 Fase 7 — Computação Científica

Agora juntamos tudo.

# 🟣 Módulo 17 — Computação Científica

### Aula 101 — Métodos numéricos

* Erro numérico
* Precisão
* Estabilidade
* Convergência

### Aula 102 — Interpolação

* Interpolação linear
* Splines
* Ajuste de curvas

### Aula 103 — Equações diferenciais

* EDO
* Sistemas dinâmicos
* Métodos numéricos

### Aula 104 — Otimização

* Funções objetivo
* Restrições
* Otimização numérica

### Aula 105 — Monte Carlo

* Simulação aleatória
* Amostragem
* Estimativas numéricas

### Aula 106 — Processamento de sinais

* Séries temporais
* Fourier
* Filtragem
* Frequência

---

# 🧪 Fase 8 — Experimentos computacionais

Essa fase ensina a transformar código em **experimento científico reproduzível**.

# 🟠 Módulo 18 — Método científico computacional

### Aula 107 — Experimentos

* Hipótese
* Modelo
* Variáveis
* Parâmetros

### Aula 108 — Reprodutibilidade

* Seeds
* Configurações
* Versionamento
* Ambientes

### Aula 109 — Análise de resultados

* Estatística
* Incerteza
* Erros
* Comparação entre modelos

### Aula 110 — Relatórios

* Gráficos
* Tabelas
* Conclusões
* Jupyter Notebook

---

# 🧠 Fase 9 — Computação de alto desempenho

Para problemas científicos grandes, adicionaria:

### Aula 111 — Performance

* Profiling
* Vetorização
* Complexidade
* Memória

### Aula 112 — Paralelismo

* Multiprocessing
* Threads
* Processamento paralelo

### Aula 113 — Computação numérica avançada

* Numba
* Caching
* Otimização de código

---

# 🚀 Projetos científicos

## 🟢 Projeto 1 — Simulação de Monte Carlo

Exemplo:

> Estimar π utilizando números aleatórios.

```text
NumPy
 ↓
Random
 ↓
Simulação
 ↓
Pandas
 ↓
Matplotlib
```

---

## 🟡 Projeto 2 — Sistema massa-mola

Modelar:

```text
Força
 ↓
Equação diferencial
 ↓
SciPy
 ↓
Simulação
 ↓
Gráfico
```

---

## 🟠 Projeto 3 — Modelo populacional

Simular crescimento populacional usando equações diferenciais.

```text
Modelo matemático
       ↓
      SciPy
       ↓
     EDO
       ↓
   Resultados
       ↓
 Matplotlib
```

---

## 🔴 Projeto 4 — Processamento de sinais

Criar uma aplicação que:

* Gere um sinal
* Adicione ruído
* Analise frequência
* Aplique filtro
* Compare antes/depois

---

## 🟣 Projeto 5 — Simulação científica completa

Por exemplo:

### Simulação de um sistema físico

```text
             Modelo
                ↓
          Equações matemáticas
                ↓
             NumPy
                ↓
             SciPy
                ↓
           Simulação
                ↓
             Pandas
                ↓
          Análise dos dados
                ↓
           Visualização
                ↓
            Conclusões
```

---

# 🎯 Trilha resumida

```text
🐍 Python
Módulos 1–4
      ↓
📐 Matemática
Aulas 81–85
      ↓
🔢 NumPy
Aulas 86–90
      ↓
🧮 SciPy
Aulas 91–96
      ↓
🐼 Pandas
Aulas 60–61
      ↓
📊 Visualização
Aulas 97–100
      ↓
🔬 Computação científica
Aulas 101–106
      ↓
🧪 Método científico
Aulas 107–110
      ↓
⚡ HPC / Performance
Aulas 111–113
      ↓
🚀 Projetos científicos
```

## 🔥 Prioridades

| Área                | Prioridade   |
| ------------------- | ------------ |
| Python              | 🔴 Essencial |
| Matemática          | 🔴 Essencial |
| NumPy               | 🔴 Essencial |
| SciPy               | 🔴 Essencial |
| Pandas              | 🟠 Alta      |
| Matplotlib          | 🔴 Essencial |
| Estatística         | 🟠 Alta      |
| Métodos numéricos   | 🔴 Essencial |
| Jupyter             | 🟠 Alta      |
| Computação paralela | 🟡 Depois    |
| HPC                 | 🟡 Depois    |

### A diferença para a trilha de Dados

A **trilha de Dados** seria:

> **Pandas → SQL → Power BI → Estatística → ML**

Enquanto a **trilha de Ciência** seria:

> **NumPy → SciPy → Pandas → Visualização → Matemática → Métodos numéricos → Simulação**

Ou seja, em Ciência Computacional, **Pandas é uma ferramenta de apoio**. O núcleo é **matemática + NumPy + SciPy + métodos numéricos + modelagem e simulação**.
