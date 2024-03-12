import {useSelector} from 'react-redux'

function Customer() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const customer = useSelector((store: any) => store.customer. fullName)
  return <h2>👋 Welcome, {customer}</h2>;
}

export default Customer;
