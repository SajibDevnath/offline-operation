onmessage = function (e) {
	console.info('Message received from the main script.');
	var workerResult = 'RESULT: ' + (e.data[0] * e.data[1]);
	console.log('Posting message back to main script.');
	postMessage(workerResult);
};