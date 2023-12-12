import logo from "./logo.svg";
import "./Footer.css";

function Footer() {
	return (
		<footer id="My_Footer">
			<section className="Footer_Content">
				<div className="Footer_Content_PAM_creds">
					{/* <img src={pam_logo} className="App-logo" alt="logo" /> */}
					<p>&copy; Phedias A.M. All Rights Reserved</p>
					<div>
						<a href="https://github.com/papontem">GitHub</a>
						&nbsp;
						<a href="https://www.linkedin.com/in/papontem/">LinkedIn</a>
					</div>
				</div>
				
				<div className="Footer_Content_React_creds">
					<img src={logo} className="App-logo" alt="logo" />
					<div>
						<a
							className="App-link"
							href="https://reactjs.org"
							rel="noopener noreferrer">
							Learn React
						</a>
					</div>
				</div>
			</section>
		</footer>
	);
}

export default Footer;
