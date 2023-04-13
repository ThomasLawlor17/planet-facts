import Nav from "./components/Nav";
import styled, { ThemeProvider } from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";
import PlanetImg from "./components/planets/PlanetImg";
import theme from "./styles/theme";
import GlobalStyle from "./styles/GlobalStyle";

const StyledMain = styled.main`
	padding: var(--nav-height) 5% 40px 5%;
	display: flex;
	flex-direction: column;
	aligin-items: center;
	justify-content: center;
	gap: 50px;

	h1 {
		margin: 0;
		text-align: center;
		padding-top: 45px;
	}

	div.planets {
		display: flex;
		max-width: 100%;
		overflow: scroll;
		justify-content: center;
		gap: 10px;

		&::-webkit-scrollbar {
			display: none;
		}

		a {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: space-between;
			gap: 10px;
			text-decoration: none;
			color: var(--white);
			h2 {
				font-size: 22px;
				margin: 0;
			}
		}

	}

	#mercury {
		width: 55px;
		height: 55px;
	}
	#venus {
		width: 77px;
		height: 77px;
	}
	#earth {
		width: 86px;
		height: 86px;
	}
	#mars {
		width: 64px;
		height: 64px;
	}
	#jupiter {
		width: 112px;
		height: 112px;
	}
	#saturn {
		width: 178px;
		height: 178px;
	}
	#uranus {
		width: 88px;
		height: 88px;
	}
	#neptune {
		width: 86px;
		height: 86px;
	}
	svg {
		position: relative;
		display: block;

		g {
			display: block;
			width: 100%;
		}
	}
	.content {
		display: none;
	}
	@media (max-width: 950px) {
		div.planets {
			display: none;
		}
		.content {
			display: flex;
			flex-direction: column;
			gap: 45px;
			align-items: center;
			text-align: center;
		}
	}

	@media (max-width: 769px) {
		padding: var(--nav-height-tablet) 24px;
	}

	@media (max-width: 550px) {
		padding: var(--nav-height-mobile) 24px;
	}
`;

function App() {
	const planets = [
		"mercury",
		"venus",
		"earth",
		"mars",
		"jupiter",
		"saturn",
		"uranus",
		"neptune",
	];

	return (
		<>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<Nav />
				<StyledMain>
					<h1>View the Solar System</h1>
					<div className="planets">
						{planets.map((planet, i) => (
							<Link to={`/${planet}`}>
								<img
									src={process.env.PUBLIC_URL + `/assets/planet-${planet}.svg`}
									alt={planet}
									id={planet}
								/>
								<h2>{planet}</h2>
							</Link>
						))}
					</div>
					<div className="content">
						<p>Select a planet from the nav to view more</p>
						<PlanetImg name='earth'/>
					</div>
				</StyledMain>
			</ThemeProvider>
		</>
	);
}

export default App;
