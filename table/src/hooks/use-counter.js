import { useEffect, useState } from "react";

export default function useCounter(initialValue) {
	const [count, setCount] = useState(initialValue);

	useEffect(() => {
		console.log(count);
	}, [count]);
	const increment = () => {
		setCount(count + 1);
	};

	return {
		count,
		increment,
	};
}
