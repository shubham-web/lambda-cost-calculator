interface UserInput<T> {
	executions: T;
	memory: T;
	avgDuration: T;
	rates: { execution: number; request: number };
}
interface ResultObject {
	requestCost: number;
	executionCost: number;
}
