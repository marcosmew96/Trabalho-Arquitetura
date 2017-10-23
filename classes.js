class Conta {

	constructor(numero, senha) {

		this.numero = numero;
		this.senha = senha;
	}
}

class Banco {

	constructor(endereco) {

		this.endereco = endereco;
	}
}

class Menu {

	//Métodos existentes para demonstração..
	sacarDinheiro();
	verificaSaldo();
	transferencia();
	depositar();
	pagarConta();
	imprimirExtrato();
}

class Pagamento() {

	constructor(quantidadePagamento) {

		this.quantidadePagamento = quantidadePagamento;
	}
}

class Deposito() {

	constructor(quantidadeDeposito) {

		this.quantidadeDeposito = quantidadeDeposito;
	}
}

class Transferencia() {

	constructor(quantidadeTransferencia) {

		this.quantidadeTransferencia = quantidadeTransferencia;
	}
}