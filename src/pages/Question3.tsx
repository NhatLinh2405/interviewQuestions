import answer3 from "../assets/answerQuestion3.png";

export default function Question3() {
	return (
		<div className="wrap">
			<h2>Question 3</h2>
			<div className="content">
				<div className="imgContent">
					<img src={answer3} alt="" />
				</div>
				<div>
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
