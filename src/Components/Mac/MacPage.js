import React, { Component } from 'react';
import $ from 'jquery';
import MiniNav from './MiniNav';
import './Mac.css';

class MacPage extends Component {

	componentDidMount() {
		$(window).scroll(function(e) {
			if( $(this).scrollTop() > 60) {
				$('.mac-mini-nav').addClass('sticky');
				$('#grey-border').addClass('grey-border');
			} else {
				$('.mac-mini-nav').removeClass('sticky');
				$('#grey-border').removeClass('grey-border');
			}
		});
	}

	render() {

		return (
			<div className="MacPage">
				<div className="container">
					<MiniNav />
					<div className="mac-statement">
						<h3>MacBook Air</h3>
						<h1>Make big things happen.</h1>
						<h1>All day long.</h1>
						<p className="para">Starting at $999</p>
						<img className="mac-img" src="https://s1.postimg.org/8j3o22wdyn/macbook1.png" />
						<p className="mac-desc">
						MacBook Air lasts up to an incredible 12 hours between charges.
						So from your morning coffee till your evening commute, you can work
						unplugged. When it’s time to kick back and relax, you can get up to
						12 hours of iTunes movie playback. And with up to 30 days of
						standby time, you can go away for weeks and pick up right where you
						left off.*
						</p>
					</div>
				</div>

				<section className="thin-light">
					<h1 className="thin-light-title">Thin. Light. Powerful.</h1>
					<h1>And ready for anything</h1>
					<img src="https://s1.postimg.org/8kl9ie7y27/Screen_Shot_2017-10-15_at_4.35.16_PM.png"/>
					<p className="mac-desc mac-desc__width">Whatever the task, fifth-generation Intel Core i5 and i7 processors
					 with Intel HD Graphics 6000 are up to it. From editing photos to
					 browsing the web, everything happens ultrafast. And all that power is
					 encased in an incredibly thin 0.68-inch unibody design that weighs
					 only 2.96 pounds.
					 </p>
				</section>

				<section>
					<img src="https://s1.postimg.org/1juptz7cnj/Screen_Shot_2017-10-15_at_4.56.19_PM.png"/>
					<div className="wifi-sect">
						<h2>802.11ac Wi-Fi.</h2>
						<h2>Effortless wireless.</h2>
						<p className="wifi-desc mac-desc__width">Instantly connect to an 802.11ac base station — including AirPort
						Extreme or AirPort Time Capsule — and experience wireless performance
						 up to 3x faster than the previous Wi-Fi generation. 802.11ac also
						 delivers expanded range, so you can work more freely than ever.
						 </p>
					</div>
				</section>

				<section className="ssd-bg">
					<div className="ssd-container">
						<h1 className="ssd-title">All systems go with SSD storage.</h1>
						<p className="ssd-desc-width">The SSD storage in MacBook Air is up to 17x faster than a 5400-rpm
						notebook hard drive. So everything you do is snappy and responsive.
						MacBook Air even wakes up fast, thanks to SSD storage and
						fifth-generation Intel Core processors.
						</p>
						<button className="btn btn-white">Buy Now</button>
					</div>
				</section>
			</div>
		);
	}
}

export default MacPage;
