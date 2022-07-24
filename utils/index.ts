export const validateInputs = (inputs: UserInput<string>): false | UserInput<number> => {
	let numberOfLambdaCalls = Math.abs(parseInt(inputs.executions));
	if (isNaN(numberOfLambdaCalls)) {
		return false;
	}

	let avgDuration = Math.abs(parseInt(inputs.avgDuration));
	if (isNaN(avgDuration)) {
		return false;
	}

	let memory = Math.abs(parseInt(inputs.memory));
	if (isNaN(memory)) {
		return false;
	}

	return {
		executions: numberOfLambdaCalls,
		avgDuration,
		memory,
		rates: inputs.rates,
	};
};

export const msToSecond = (ms: number): number => {
	return ms / 1000;
};

export const mbToGb = (mb: number): number => {
	return mb / 1024;
};

export const getCost = ({ rates, avgDuration, executions, memory }: UserInput<number>): ResultObject => {
	let executionCost: number;
	let requestCost: number;

	// calculate request cost
	let numberOfLambdaCalls = Math.abs(executions);
	requestCost = rates.request * numberOfLambdaCalls;

	// calculate execution cost
	let GBs = mbToGb(memory) * msToSecond(avgDuration);
	executionCost = numberOfLambdaCalls * (rates.execution * GBs);

	return { executionCost, requestCost };
};
