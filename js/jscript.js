function Elemento(element, qtd, xml){
	var el = element;
	var elqtde = qtd;
	var boldText = "Atenção! ";
	var normalText = "Isto acaba de ser adicionado ao clicar no botão";
	var qtde = 0;
	var generator = new XmlGenerator("alert-box", xml);

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
		var text = "<strong>Atenção: </strong>Mensagem incorreta. Quantidade: <strong>" + qtde + "</strong>";
		box.html(text);
		elem.prepend(box);
		elqtde.html(qtde);
		generator.generateNewElement(text);
	}
}

function XmlGenerator(vElementName, vDisplay){
	var indice = 0;
	var display = vDisplay;
	var elementName = vElementName;
	var generated = [];

	this.generateNewElement = function(value){
		var elementText = "<pre><" + elementName + ">" + value + "</" + elementName + "></pre>";
		indice++;
		generated.push(elementText);
		display.prepend(elementText);
	}
}