import React from "react";
import { ProfileArea, PlaylistView, MediaPlayer } from "./components";
import "./App.css";

import openSocket from "socket.io-client";

class App extends React.Component {
	constructor() {
		super();

		this.state = {
			user: {},
			room: {},
			loading: true
		};

		this.socket = openSocket(
			process.env.NODE_ENV === "development"
				? window.location.hostname + ":8080"
				: null
		);
	}

	componentDidMount() {
		this.socket.emit("join", { roomid: "5c1c129c8134305cf00f2cfd" });

		this.socket.on("fullsync", data => {
			console.log("fullsync", data);

			this.setState({ room: data, loading: false });
		});
	}

	render() {
		return (
			<div className="App">
				<header className="app-header">
					<ProfileArea />
				</header>
				{this.state.loading ? (
					<div className="content">Joining Room...</div>
				) : (
					<div className="content">
						<MediaPlayer
							className="player-container"
							width={640}
							height={360}
							socket={this.socket}
							room={this.state.room}
						/>
						<PlaylistView
							items={this.state.room.media}
							style={{ paddingTop: 16 }}
						/>
					</div>
				)}
			</div>
		);
	}
}

export default App;
