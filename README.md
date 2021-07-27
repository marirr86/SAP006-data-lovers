## RICK AND MORTY - CARD LIBRARY

- [1. Introdução](#1-Introdução)
- [2. Objetivos de aprendizagem](#2-objetivos-de-aprendizagem)
- [3. Considerações gerais](#3-considerações-gerais)
- [4. Critérios mínimos de aceitação do projeto](#4-critérios-mínimos-de-aceitação-do-projeto)
---

## 1. Introdução

Rick and Morty é uma série de televisão de animação americana para adultos. A série é muito bem recebida mundialmente, e de todo esse grupo de fãs, há um grupo que quer ser capaz de interagir e ver as informações dos personagens e da série em geral.
Constatações
Pesquisamos rapidamente as informações de que nossos usuários precisam e descobrimos que os dados mais interessantes para eles são:

Informações relevantes sobre os personagens, como nome, gênero, espécie, local de origem, imagem e episódios em que aparecem.

Além dessas informações, para nossos usuários, é importante poder ver a lista de personagens que aparecem na série, o número de episódios, os diferentes locais de origem, para obter mais informações sobre a série.

Detalhes dos dados
Com este conjunto de dados, você pode obter os seguintes dados para um personagem:

nome
imagem
estado de vida
espécie
gênero
local de origem (planeta Terra)
lugar onde vive
episódios em que aparece
Com esse conjunto de dados, você também pode obter o seguinte:

Número de personagens.
Número de lugares de origem.
Lista de episódios da série.
Lista de personagens que pertencem a um determinado local.
Todos os personagens da série.



Utilizamos uma lista de personagens da série Rick & Morty[Rick and Morty](src/data/rickandmorty/rickandmorty.json). A documentação da API encontra-se neste [link](https://rickandmortyapi.com).



## 2. Objetivos de aprendizagem

O objetivo principal deste projeto é que aprenda a desenhar e construir uma interface web onde se possa visualizar e manipular dados, entendendo o que o usuário necessita.

Em outras palavras, você aprenderá a:

### HTML e CSS

- [ ] [Uso de HTML semântico.](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#Semantics_in_HTML)
- [ ] Uso de seletores de CSS.
- [ ] Construir sua aplicação respeitando o desenho realizado (protótipo).
- [ ] [Uso de flexbox em CSS.](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

### DOM e Web APIs

- [ ] Uso de seletores de DOM.
- [ ] Gerenciamento de eventos de DOM.
- [ ] [Manipulação dinâmica de DOM.](https://developer.mozilla.org/pt-BR/docs/DOM/Referencia_do_DOM/Introdu%C3%A7%C3%A3o) (appendChild |createElement | createTextNode| innerHTML | textContent | etc.)

### JavaScript

- [ ] Uso de condicionais (if-else | switch | operador ternário)
- [ ] Uso de laços (for | for..in | for..of | while)
- [ ] Uso de funções (parâmetros | argumentos | valor de retorno)
- [ ] Manipular arrays (filter | map | sort | reduce)
- [ ] Manipular objects (key | value)
- [ ] Uso ES modules ([`import`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) | [`export`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export))
- [ ] Diferenciar entre expression e statements.
- [ ] Diferenciar entre tipos de dados atômicos e estruturados.

### Testing

- [ ] [Teste unitário.](https://jestjs.io/docs/pt-BR/getting-started)

### Estrutura do código e guia de estilo

- [ ] Organizar e dividir o código em módulos (Modularização)
- [ ] Uso de identificadores descritivos (Nomenclatura | Semântica)
- [ ] Uso de linter (ESLINT)

### Git e GitHub

- [ ] Uso de comandos de git (add | commit | pull | status | push)
- [ ] Gerenciar repositórios de GitHub (clone | fork | gh-pages)
- [ ] Colaboração no Github (branches | pull requests | |tags)

## 3. Considerações gerais

- Este projeto será executado em duplas.
- Este projeto será entregue através do GitHub e a interface deve ser publicada
  no [GitHub Pages](https://pages.github.com/).

## 4. Critérios mínimos de aceitação do projeto

Os critérios considerados para que tenha terminado este projeto são:

### Definição de produto

Documente brevemente seu trabalho no arquivo `README.md` de seu repositório, contando como foi o processo de desenho e como você acredita que o produto possa resolver o problema (ou problemas) de seu usuário.

### Histórias de usuário

Uma vez que entenda a necessidade dos usuários, escreva as [Histórias de Usuário](https://pt.wikipedia.org/wiki/Hist%C3%B3ria_de_usu%C3%A1rio) que representem tudo que o usuário precisa fazer/ver. As **histórias de usuário** devem ser o resultado de seu processo de investigação/pesquisa de seus usuários.

Não esqueça de incluir a definição de pronto (_definition of done_) e os critérios de aceitação para cada uma.

Na medida do possível, termine uma história de usuário antes de passar para a seguinte (cumpra com as definições de pronto + critérios de aceitação).

### Desenho de interface do usuário

#### Protótipo de baixa fidelidade

Durante seu trabalho você deverá fazer e iterar rascunhos de sua solução usando lápis e papel. Recomendamos que fotografe todas as iterações que fizer, suba para seu repositório e as mencione no `README.md`.

#### Testes de usabilidade

Durante o desafio você deverá fazer testes de usabilidade com usuários diferentes, e com base nos resultados desses testes, iterar seus desenhos de interface. Conte-nos quais problemas de usabilidade você detectou através dos testes e como os resolveu na proposta final.

### Implementação da interface de usuário (HTML/CSS/JS)

Após desenhar sua interface de usuário, deverá trabalhar na sua implementação. **Não** é necessário que construa a interface exatamente da mesma forma que desenhou. Terá um tempo limitado para trabalhar no projeto, então você deve priorizar as tarefas.

No mínimo, sua implementação deverá:

1. Mostrar os dados em uma interface: pode ser em cards, tabelas, listas, etc.
2. Permitir ao usuário interagir com a interface para obter as informações que necessita;
3. Ser _responsiva_, ou seja, deve ser visualizada sem problemas a partir de diversos tamanhos de tela: celulares, tablets, notebooks, etc.

### Testes unitários

O _boilerplate_ do projeto não inclui testes unitários. Assim, você terá que escrever seus próprios testes para as funções encarregadas de _processar_, _filtrar_ e _ordenar_ os dados, assim como _calcular_ estatísticas.

Seus testes unitários devem ter cobertura mínima de 70% de _statements_ (_sentenças_), _functions_ (_funções_), _lines_ (_linhas_), e _branches_ (_ramos_) do arquivo `src/data.js`, que irá conter suas funções e que está detalhado na seção de [Considerações técnicas](#srcdatajs).

