import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation";
import { Question1, Question2, Question3 } from "./pages";

export default function App() {
	return (
		<>
			<Navigation />
			<div className="container">
				<Routes>
					<Route path="/" element={<Question1 />} />
					<Route path="question2" element={<Question2 />} />
					<Route path="question3" element={<Question3 />} />
				</Routes>
			</div>
		</>
	);
}
