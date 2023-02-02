import { NavLink } from "react-router-dom";

export default function Navigation() {
	const navlinks = [
		{
			name: "1",
			link: "/question1",
		},
		{
			name: "2",
			link: "/question2",
		},
		{
			name: "3",
			link: "/question3",
		},
	];
	return (
		<div className="navbar">
			{navlinks.map((nav) => (
				<NavLink
					to={nav.link}
					key={nav.name}
					className={({ isActive }) => (isActive ? "isActive" : "text-black")}
				>
					<span>Question {nav.name}</span>
				</NavLink>
			))}
		</div>
	);
}
