import answer2 from "../assets/answerQuestion2.png";
export default function Question2() {
	class Stack<T> {
		private items: T[] = [];

		push(item: T) {
			this.items.push(item);
		}

		pop() {
			return this.items.pop();
		}

		find(callback: (item: T) => boolean) {
			return this.items.find(callback);
		}

		size = (): number => this.items.length;

		isEmpty = (): boolean => !this.items.length;
	}

	const stack = new Stack<number>();
	stack.push(1);
	stack.push(2);
	stack.push(3);

	return (
		<div className="wrap">
			<h2>Question 2</h2>
			<div className="content">
				<div className="imgContent-2">
					<img src={answer2} alt="answer2" />
				</div>
				<table className="ml-5">
					<tbody>
						<tr>
							<th>Method</th>
							<th>Result</th>
						</tr>
						<tr>
							<td>stack.push(1)</td>
							<td>Stack: [1]</td>
						</tr>
						<tr>
							<td>stack.push(2)</td>
							<td>Stack: [1, 2]</td>
						</tr>
						<tr>
							<td>stack.push(3)</td>
							<td>Stack: [1, 2, 3]</td>
						</tr>
						<tr>
							<td>stack.size()</td>
							<td>3</td>
						</tr>
						<tr>
							<td>stack.pop()</td>
							<td>3; Stack: [1, 2]</td>
						</tr>
						<tr>
							<td>stack.isEmpty()</td>
							<td>false</td>
						</tr>
						<tr>
							<td>stack.find(i ={">"} i === 2)</td>
							<td>2</td>
						</tr>
						<tr>
							<td>stack.find(i ={">"} i === 4)</td>
							<td>undefined</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}
