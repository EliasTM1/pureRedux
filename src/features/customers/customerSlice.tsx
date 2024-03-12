/* eslint-disable @typescript-eslint/no-explicit-any */
export const initialState = {
	fullName: "",
	nationalId: "",
	createdAt: "",
};

export function customerReducer(state = initialState, action: any) {
	switch (action.type) {
		case "customer/createCustomer":
			return {
				...state,
				fullName: action.payload.fullName,
				nationalID: action.payload.nationalID,
				createdAt: action.payload.createdAt,
			};
		case "customer/updateName":
			return {
				...state,
				fullName: action.payload,
			};
		default:
			return { ...state };
	}
}

export function createCustomer(fullName: string, nationalID: any) {
	return {
		type: "customer/createCustomer",
		payload: {
			fullName: fullName,
			nationalID: nationalID,
			createdAt: new Date().toISOString(),
		},
	};
}

export function updateName(fullName: string ) {
    return {
        type: "account/updateName",
        payload: fullName
    }
}
