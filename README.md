* __ Cálculo do IMC (Índice de Massa Corporal) __ *
> Neste desafio prático, algumas regras foram definidas:

1) Crie um aplicativo para calcular o índice de massa corporal.
Considere os seguintes critérios:
1) Ao executar o script da aplicação, deve-se solicitar a entrada do nome da pessoa.
2) Em seguida, o aplicativo deve solicitar que a altura da pessoa em
polegadas
3) A seguir, a aplicação deve exigir que seja informado o peso da pessoa.
4) Após as estradas de dados, preste atenção à engenharia da informação para dados do tipo
flutuador.
5) Converta a altura desejada em metros. (apenas divida a altura por
100).
6) Internamente o aplicativo deve realizar o cálculo do índice de massa corporal através de
da expressão: M = peso (quilogramas) ÷ altura²
7) Determinar a identificação da massa corporal que o sistema deve classificar em faixas
descritivo usando os critérios abaixo:
a) Se M estiver abaixo de 16: muito grave abaixo do peso
b) Se M estiver entre 16 e 16,99: Gravemente abaixo do peso
c) Se M estiver entre 17 e 18,49: Peso baixo
d) Se M estiver entre 18,50 e 24,99: Peso normal
e) Se M estiver entre 25 e 29,99: Sobrepeso
f) Se M estiver entre 30 e 34,99: obesidade grau I
g) Se M estiver entre 35 e 39,99: obesidade grau II
h) Se M for maior que 40: obesidade grau III
8) Ao final do sistema, ele deve fornecer a seguinte saída para o usuário:
“<Nome> tem índice de massa corporal igual a <m>, sendo avaliado como:
<classificação>. ”
* As informações em vermelho são variáveis e devem ser substituídas por suas respectivas
Valores calculados dentro do aplicativo *


*__Resolução__*
> Definiu as entradas de dados e calculou o imc onde bmi = peso / (altura * altura)
> Após este tratamento, se mais foi usado para atender as condições e classificar o imc
