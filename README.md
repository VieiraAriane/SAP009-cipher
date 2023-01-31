# Cifra de César

## Índice

- [1. Prefácio](#1-prefácio)
- [2. Projeto](#2-resumo-do-projeto)
- [3. Protótipo](#3-Protótipo)
- [4. Usuários e Necessidades do usuário](#4-Usuários-e-necessidades-do-usuário)
- [5. Instruções de uso](#5-Instruções-de-uso)
- [6. Projeto final](#6-projeto-final)

## 1. Prefácio

Cifrar significa codificar. A [cifra de César](https://pt.wikipedia.org/wiki/Cifra_de_C%C3%A9sar)
é um dos primeiros tipos de criptografias conhecidas na história.
O imperador romano Júlio César utilizava essa cifra para enviar
ordens secretas aos seus generais no campo de batalha.

A cifra de César é uma das técnicas mais simples de cifrar uma mensagem. É um
tipo de cifra por substituição, em que cada letra do texto original é
substituida por outra que se encontra há um número fixo de posições
(deslocamento) mais a frente do mesmo alfabeto.

Por exemplo se usarmos o deslocamento (_offset_) de 3 posições:

- Alfabeto sem cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
- Alfabeto com cifra: D E F G H I J K L M N O P Q R S T U V W X Y Z A B C
- A letra A será D
- A palavra CASA será FDVD

Atualmente todas as cifras de substituição alfabética simples, são decifradas
com facilidade e não oferecem muita segurança na comunicação por si mesma,
mas a cifra de César muitas vezes pode fazer parte de um sistema
mais complexo de criptografia, como
a cifra de Vigenère, e tem aplicação no sistema ROT13.

## 2. Resumo do projeto

A cifra de César é uma técnica de criptografia onde as letras são substituídas por outras a uma quantidade de posições definida pelo usuário.Por exemplo, a letra "A" é substituída pela letra "H" se for deslocada 33 posições a frente.
A partir dela, foi criado o projeto Papo de busão, que visa garantir a proteção dos usuários de transporte público quando trocam mensagens. É uma forma de manter suas mensagem longes dos curiosos.

### Os objetivos gerais deste projeto são os seguintes

- Trabalhar com base em um boilerplate, a estrutura básica de um projeto em diferentes
  pastas (através de módulos em JS).
- Conhecer as ferramentas de manutenção e melhoria do código (linters e testes
  unitários).
- Aprenda sobre objetos, estruturas, métodos e iteração (loops) em JavaScript
- Implementar controle de versão com git (e a plataforma github)

## 3. Protótipo

O layout foi projetado com agilidade, visando uma aparência limpa e objetiva, como mostrado na imagem. Ao final, mostraremos a imagem final com pequenas mudanças.

![prototipociplher](https://user-images.githubusercontent.com/107221542/215860581-5c8740ba-31fd-4977-9a72-563e49921fcb.jpeg)

## 4. Usuários e Necessidades do usuário

A aplicação tem como público alvo adultos que utilizam transporte coletivo. Foi pensado no sentido de preservar o usuário, visto que ultimamente muitas pessoas tem sido vítimas daqueles que tiram foto da sua troca de mensagem e compartilham nas redes socias.

## 5. Instruções de uso

Para que o usuário utilize a aplicação de forma correta foi criado um prompt de instruçoes conforme imagem a seguir.
![prompt](https://user-images.githubusercontent.com/107221542/215861728-8d0afed0-f92a-476f-9ccd-9bbb7553453a.png)

## 6. Projeto final

Como mencionado anteriormente, o projeto tem um layote simple e intuitivo. Vemos no primeiro espaço um local para por a senha, o mesmo serve para que ocorra o deslocamento do alfabeto. Abaixo vemos o local onde a mensagem deve ser digita e após isso o botão codificar, o mesmo faz essa função e envia o texto para a caixa seguinte. Para decodicar a mensagem é necessário que o número da senha seja o mesmo utilizado no envio, após esse processo o botão decodificar transforma a mensagem no alfabeto normal novamente. Essa aplicação só faz a leitura de caracteres em formato maiúsculo, mas não é necessário que o usuário se preocupe com isso, visto que ao digitar e enviar a mensagem o mesmo já transforma as letras no formato desejado para que ocorra codificação e decodificação de forma correta.
![final](https://user-images.githubusercontent.com/107221542/215861809-aedb33ae-3445-481c-9b7c-e951b76edee2.png)
