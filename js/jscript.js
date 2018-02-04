function Elemento(element, qtd){
	var el = element;
	var elqtde = qtd;
	var boldText = "Atenção! ";
	var normalText = "Isto acaba de ser adicionado ao clicar no botão";
	var qtde = 0;

	this.setWarning = function(){
		el.removeClass();
		el.addClass('alert');
		el.addClass('alert-warning');
	}

	this.setDanger = function(){
		el.removeClass();
		el.addClass('alert');
		el.addClass('alert-danger');
	}

	this.setSuccess = function(){
		el.removeClass();
		el.addClass('alert');
		el.addClass('alert-success');
	}

	this.add = function(elem){
		var box = $("<div />", {
			class: "alert alert-danger"
		});

		qtde++;

		box.html("<strong>Atenção: </strong>Mensagem incorreta. Quantidade: <strong>" + qtde + "</strong>");
		elem.prepend(box);
		elqtde.html(qtde);
	}
}