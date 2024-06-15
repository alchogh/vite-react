import { useReducer } from "react";
import Button from "../components/Button";
import Panel from "../components/Panel";

const INCREMENT_COUNT = "increment";
const SET_VALUE_TO_ADD = "change_value_to_add";
const DECREMENT_COUNT = "decrement";
const ADD_VALUE_TO_COUNT = "add_value_to_count";

const reducer = (state, action) => {
	switch (action.type) {
		case INCREMENT_COUNT:
			return { ...state, count: state.count + 1 };
		case DECREMENT_COUNT:
			return { ...state, count: state.count - 1 };
		case SET_VALUE_TO_ADD:
			return {
				...state,
				valueToAdd: action.payload,
			};
		case ADD_VALUE_TO_COUNT:
			return {
				...state,
				count: state.count + state.valueToAdd,
				valueToAdd: 0,
			};
		default:
			throw new Error("unexpected actioni type : ", +action.type);
	}
};

export default function CounterPage({ initialValue }) {
	const [state, dispatch] = useReducer(reducer, {
		count: initialValue,
		valueToAdd: 0,
	});
	const increment = () => {
		dispatch({
			type: INCREMENT_COUNT,
		});
	};

	const decrement = () => {
		dispatch({
			type: DECREMENT_COUNT,
		});
	};

	const handleChange = (e) => {
		const value = parseInt(e.target.value) || 0;
		// setValueToAdd(value);
		dispatch({
			type: SET_VALUE_TO_ADD,
			payload: value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch({
			type: ADD_VALUE_TO_COUNT,
			payload: state.count + state.valueToAdd,
		});
	};
	console.log(state);
	return (
		<Panel className="m-3">
			<h2 className="text-lg">{state.count}</h2>
			<div className="flex flex-row">
				<Button onClick={increment}>increment</Button>
				<Button onClick={decrement}>decrement</Button>
			</div>
			<form onSubmit={handleSubmit}>
				<label>a lot</label>
				<input
					value={state.valueToAdd || ""}
					onChange={handleChange}
					type="number"
					className="p-1 m-3 bg-gray-50 border border-gray-300"
				/>
				<Button onClick={increment}>Add it</Button>
			</form>
		</Panel>
	);
}
