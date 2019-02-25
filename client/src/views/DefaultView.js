import React from "react";
import { NavLink } from "react-router-dom";
import Typography from "@material-ui/core/Typography";

export default class DefaultView extends React.Component {
	render() {
		return (
			<div>
				<div
					className="bg"
					style={{
						background:
							"radial-gradient(circle at 50% 200%, rgb(199, 139, 255), #1A237E)",
						position: "absolute",
						left: 0,
						right: 0,
						top: 0,
						bottom: 0
					}}
				/>
				<div
					className="center"
					style={{
						position: "absolute",
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "center",
						textAlign: "center",
						left: 0,
						right: 0,
						top: 0,
						bottom: 0
					}}
				>
					<Typography variant="h2">App Logo</Typography>
					<Typography
						variant="subtitle1"
						style={{ margin: 18, maxWidth: 600 }}
					>
						{
							"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
						}
					</Typography>
					<div>
						<NavLink
							to="/join"
							style={{
								display: "inline-block",
								background: "rgba(56, 51, 66, 0.5)",
								color: "rgb(242,242,242)",
								verticalAlign: "middle",
								textAlign: "center",
								height: 36,
								padding: "0 16px 0 16px",
								margin: 6,
								lineHeight: "36px",
								fontSize: 14,
								textTransform: "uppercase",
								userSelect: "none",
								borderRadius: 4
							}}
						>
							JOIN ROOM
						</NavLink>
						<NavLink
							to="/create"
							style={{
								display: "inline-block",
								background: "rgba(56, 51, 66, 0.5)",
								color: "rgb(242,242,242)",
								verticalAlign: "middle",
								textAlign: "center",
								height: 36,
								padding: "0 16px 0 16px",
								margin: 6,
								lineHeight: "36px",
								fontSize: 14,
								textTransform: "uppercase",
								userSelect: "none",
								borderRadius: 4
							}}
						>
							CREATE ROOM
						</NavLink>
					</div>
				</div>
			</div>
		);
	}
}
