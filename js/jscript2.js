function Conta(vSaldo){
	var saldo = vSaldo;

	this.saque = function(vSaque){
		if(vSaque <= saldo){
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