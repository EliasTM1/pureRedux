import { PayloadAction, createSlice } from "@reduxjs/toolkit/react";

/* eslint-disable @typescript-eslint/no-explicit-any */
type initialStateT = {
	balance: number;
	loan: number;
	loanPurpose: string;
	isLoading: boolean;
};
const initialState: initialStateT = {
	balance: 0,
	loan: 0,
	loanPurpose: "",
	isLoading: false,
};

const accountSlice = createSlice({
	name: "account",
	initialState,
	reducers: {
		deposit(state: initialStateT, action: PayloadAction<any>) {
			state.balance = state.balance + Number(action.payload);
			state.isLoading = false

		},
		withdraw(state: initialStateT, action: PayloadAction) {
			state.balance = state.balance - Number(action.payload);
		},
		requestLoan: {
			// * In order to modify multiple properties inside the state we need to use 'prepare' first
			// * Instead of this approaach we could also pass an object and use single param
			prepare(loan, loanPurpose) {
				return {
					payload: {
						loan,
						loanPurpose,
					},
				};
			},
			reducer(state: initialStateT, action: PayloadAction<any>) {
				if (state.loan > 0) return;
				state.loan = action.payload.loan;
				state.loanPurpose = action.payload.loanPurpose;
			},
		},
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		payLoan(state: initialStateT) {
			state.loan = 0;
			state.loanPurpose = "";
		},
		convertingCurrency(state: initialStateT) {
			state.isLoading = true;
		},
	},
});
export const { withdraw, payLoan, requestLoan } = accountSlice.actions;

export function deposit(amount: any, currency: any) {
	if (currency === "USD") return { type: "account/deposit", payload: amount };
	return async function (dispatch: any) {
		dispatch({ type: "account/convertingCurrency" });
		(currency)
		const res = await fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`);

		const data = await res.json();
		const converted = data.rates.USD;
		dispatch({ type: "account/deposit", payload: converted });
	};
}

export default accountSlice.reducer;
