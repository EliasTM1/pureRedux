/* eslint-disable @typescript-eslint/no-explicit-any */
const initialStateAccount = {
	balance: 0,
	loan: 0,
	loanPurpose: 0,
};
export function accountReducer(state = initialStateAccount, action: any) {
	switch (action.type) {
		case "account/deposit":
			return { ...state, balance: Number(state.balance) + Number(action.payload) };
		case "account/withdraw":
			return { ...state, balance: state.balance - action.payload };
		case "account/requestLoan":
			if (state.loan > 0) return state;
			return { ...state, loan: action.payload };
		case "account/payLoan":
			return {
				...state,
				loan: 0,
				loanPurpose: "",
				balance: state.balance - state.loan,
			};
		default:
			return state;
	}
}
export function deposit(amount: any, currency: any) {
	if(currency === 'USD') return {
		type:"account/deposit",
		payload:amount
	}
	// return { type: "account/deposit", payload: amount };
}
export function withdraw(withdraw: any) {
	return { type: "account/withdraw", payload: withdraw };
}
export function requestLoan(loanAmount: any) {
	return { type: "account/requestLoan", payload: loanAmount };
}
export function payLoan() {
	return { type: "account/payLoan" };
}
