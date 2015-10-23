// Worker 
var first 	= document.querySelector('#number1');
var second 	= document.querySelector('#number2');
var result 	= document.querySelector('.result');

if (window.Worker) {
	var myWorker = new Worker('./worker/worker.js');

	// sending messages to the worker
	first.onchange = function () {
		myWorker.postMessage([first.value, second.value]);
		console.info('I. Message posted to worker.');
	};

	second.onchange = function () {
		myWorker.postMessage([first.value, second.value]);
		console.info('II. Message posted to worker.');
	};

	myWorker.onmessage  = function (e) {
		result.textContent = e.data;
		console.info('Result: Message received from worker.');
	};

}
