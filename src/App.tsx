/* eslint-disable @typescript-eslint/no-explicit-any */
import CreateCustomer from "./features/customers/CreateCustomer";
import Customer from "./features/customers/Customer";
import AccountOperations from "./features/account/AccountOperations";
import BalanceDisplay from "./features/account/BalanceDisplay";
import "./index.css";
import { useSelector } from "react-redux";

export function App() {
	const user = useSelector((state: any) => state.customer.fullName);
	return (
		<div>
			<h1>🏦 The React-Redux Bank ⚛️</h1>
			{user === "" ? (
				<CreateCustomer />
			) : (
				<>
					<Customer />
					<AccountOperations />
					<BalanceDisplay />
				</>
			)}
		</div>
	);
}

export default App;
