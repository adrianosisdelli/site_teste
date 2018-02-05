function Conta(vSaldo){
	var saldo = vSaldo;
	var extrato = [];

	this.saque = function(vSaque){
		if(vSaque <= saldo){
			var dataHora = new Date();
			var texto = dataHora.toLocaleString() + " - Movimentação no valor de R$ " + vSaque.toFixed(2);
			extrato.push(texto);
			saldo -= vSaque;
			return vSaque;
		}
		else{
			return false;
		}
	}

	this.getSaldo = function(){
		return saldo;
	}
}