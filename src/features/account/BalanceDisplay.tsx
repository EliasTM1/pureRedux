import { useSelector } from "react-redux";

function formatCurrency(value) {
	return new Intl.NumberFormat("en", {
		style: "currency",
		currency: "USD",
	}).format(value);
}

function BalanceDisplay() {
	const { balance, loan, loanPurpose } = useSelector((state) => state.account);

	return (
		<>
			<div className='balance'>Your Balance {formatCurrency(balance)}</div>
			{Boolean(loan) && (
				<div className='balance'>
					<span>
						Your loan of: {loanPurpose} is ${loan}{" "}
					</span>
				</div>
			)}
		</>
	);
}

export default BalanceDisplay;
