import answer3 from "../assets/answerQuestion3.png";

export default function Question3() {
	function sumBetween(start: number, end: number): number {
		return ((end - start + 1) * (start + end)) / 2;
	}

	function calculate(start: number, end: number, double: boolean): number {
		let result = sumBetween(start, end);
		return double ? result * 2 : result;
	}

	return (
		<div className="wrap">
			<h2>Question 3</h2>
			<div className="content">
				<div className="imgContent-3">
					<img src={answer3} alt="answer3" />
				</div>
				<div className="ml-5">
					<p>In my opinion, I will optimize the code as follows.</p>
					<p>
						- Give meaningful variable and function names, can describe the function, and must
						follow naming conventions lowerCamelCase
					</p>
					<p>- Removing unnecessary variable declarations (const instead of var)</p>
					<p>
						- Keeping code simple and easy to understand, using only necessary logic and avoiding
						confusing or unclear operations.
					</p>
				</div>
			</div>
		</div>
	);
}
