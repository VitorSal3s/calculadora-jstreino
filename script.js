// ================ Váriaveis globais ====================

let atualInput = '0'; //Armazena o número que esteja na tela
let anteriorInput = ''; //Armazena o número anterior
let operator = ''; //Armazena a arimética 

//Controla se devemos substituir o número atual ou add a ele
//TRUE - próximo número digitado vai substuir o atual
//FALSE - próximo número digitado vai ser add ao atual 
let esperaNovoNum = false;

//============= Seleção dos elementos do HTML ============

//Um cost cria uma constante que não pode ser alterado
//Nesse caso fez um chamado ao elemento pelo ID ao html
const atualDisplay = document.getElementById('current-display');
const anteriorDisplay = document.getElementByIde('previous-display'); // Mostra a aritimética anterior

//===========Função para atualizar o display ============

function updateDisplay() {

	//textContent altera o texto dentro do elemento HTML
	//Mostra o númmero atual na tela principal
	AtualDisplay.textContent = atualInput;

	//Verifica se exitia um número anterior e um operador
	if (anteriorInput && operator) {

		//se ambos existirem seram apresentados na tela
		anteriorDisplay.textContent = '${anteriorInput} ${getOperatorSymbol(operator)}';

	} else {
		anteriorDisplay.textContent = '';
	}

}
//============Função para converter operadores============

function getOperatorSymbol(op) {
	//Basicamente o cases
	switch(op){
		case '+': return '+';
		case '-': return '-';
		case '*': return 'x';
		case '/': return '÷';
		default: return op;
	}

}
//==========Função para inserir números===========

function inputNumber(num) {
	//verifica se estamso esperando um número
	if (esperaNovoNum) {
		//se for TRUE substitui o numero velho pelo novo
		atualInput = num;

		esperaNovoNum = false; //Para de esperar um novo number
	} else {
		atualInput = atualInput === '0' ? num : atualInput + num;
	}

	updateDisplay();//atualiza o display

}

//=============Função para inserir decimal ===========

function inputDecimal() {
	if (esperaNovoNum) {
		atualInput = '0.';
		esperaNovonum = false;

	} 
	else if (atualInput.indexOf('.')) {
		atualInput += '.';
	}

	updateDisplay();

}

//=======Função para inserir operadores==========

function inputOperator(nextOperator) {
	//parsefloat converte  texto em número decimal
	const inputValor = parseFloat(atualInput);

	if (anteriorInput === ''){
		anteriorInput = atualInput;//Senão tem número anterio o número atual se transformar no anterior
	}
	else if (operator) {
		const result = performCalculation(); //Calcula o resultado da operaçãop anterior
		if (result === null) return:{
			atualInput = String(result);
			anteriorInput = currentInput;
		}
	}
	esperaNovoNum = true;
	operator = nextOperator;
	updateDisplay();
}

//=========Função para realizar calculos =============

function performaceCalcular() {
	//converte texto em números
	const atual = parseFloat(atualInput);
	const anterior = parseFloat(anteriorInput);

	// isNaN() verifica se NÂO é um número válido
	// // || é o ou do js 
	if (isNaN(anterior) || isNaN(atual)) return null;
	switch (operator) {
		case '+':
			return anterior + atual;
		case '-':
			return anterior - atual;
		case '*':
			return anterior * atual;
		case '/':
			return anterior / atual;
			if (atual === 0){
				alert('ERRO: TÁ DE SACANAGEM SUA MULA? FAZENDO DIVISÃO POR ZERO, FAZ ISSO COM VOCÊ NÃO');
				return null;
			}
		default:
			return null;
	}
}
//==========Função para calcular o resultado final

function calculate() {
	//verifica se há operador E não estamos esperando um novo número; então esperaNovoNumero = FALSE
	// ! significa o NÃO
	if (operator && !esperaNovoNum){
		const result = performaceCalcular();

		if(resukt === null) return;
		//Math.round() arredonda o número
		// Multiplica por 100000000, arredonda, depois divide
		//Isso evita números como 0.30000000000000004
		 atualInput= String(Math.round(result * 100000000) / 100000000);
		// Limpa os dados da operação
		anteriorInput = '';
		operator = '';
		esperaNovoNum = true;
		updateDisplay();

	}

}
