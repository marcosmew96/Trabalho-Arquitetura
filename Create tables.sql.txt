BEGIN TRANSACTION;

/* Create a table called NAMES */
CREATE TABLE BANCO(id integer PRIMARY KEY AUTOINCREMENT, endereco text);

CREATE TABLE CONTA(id integer PRIMARY KEY AUTOINCREMENT, numero text, senha text);

CREATE TABLE PAGAMENTO(id integer PRIMARY KEY AUTOINCREMENT, quantidadePagamento double);

CREATE TABLE DEPOSITO(id integer PRIMARY KEY AUTOINCREMENT, quantidadeDeposito double);

CREATE TABLE TRANSFERENCIA(id integer PRIMARY KEY AUTOINCREMENT, quantidadeTransferencia double);

COMMIT TRANSACTION;
