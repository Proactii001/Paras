import React, { useEffect } from 'react';
import { Jumbotron, Button,Container } from 'reactstrap';

function Home()
{
    useEffect(()=>{
        document.title="Home | Front Side";
    },[]);

    return (
        <div>
        <section class="slider-section">
			<div class="tp-banner-container">
				<div class="tp-banner">
					<ul>
						<li data-transition="slidevertical" data-slotamount="1" data-masterspeed="500" data-thumb="upload/slider_03.jpg" data-saveperformance="off" data-title="Barberia">
					<img src="asstes/upload/slider_03.jpg"  alt="" data-bgposition="center bottom" data-bgfit="cover" data-bgrepeat="no-repeat"/>
							
                            
							<div class="tp-caption text-center randomrotateout tp-resizeme"
								data-x="center"
								data-y="320" 
								data-speed="1200" 
								data-start="500" 
								data-easing="Power3.easeInOut" 
								data-elementdelay="0.1" 
								data-endelementdelay="0.1" 
								data-endspeed="300" 
								><img src="asstes/upload/slider_logo_03.png" alt=""/> 
							</div>
							
                            <div class="tp-caption slider_03 text-center skewfromright randomrotateout tp-resizeme"
                                data-x="center"
                                data-y="385" 
                                data-speed="1400"
                                data-start="1000"
                                data-easing="Power3.easeInOut"
                                data-splitin="none"
                                data-splitout="none"
                                data-elementdelay="0.1"
                                data-endelementdelay="0.1"
                                data-endspeed="1000"
                                >Barberia
                            </div>
							
                            <div class="tp-caption slider_02 text-center skewfromright randomrotateout tp-resizeme"
                                data-x="center"
                                data-y="520" 
                                data-speed="1400"
                                data-start="1500"
                                data-easing="Power3.easeInOut"
                                data-splitin="none"
                                data-splitout="none"
                                data-elementdelay="0.1"
                                data-endelementdelay="0.1"
                                data-endspeed="1000"
                                >Most popular, creative, super responsive, retina ready<br /> high-quality HTML5 barber site template!
                            </div>
						</li>
						<li data-transition="slidevertical" data-slotamount="1" data-masterspeed="500" data-thumb="upload/slider_02.jpg"  data-saveperformance="off"  data-title="Hair Salon">
							<img src="asstes/upload/slider_02.jpg"  alt="fullslide1"  data-bgposition="center top" data-bgfit="cover" data-bgrepeat="no-repeat"/>
							
							<div class="tp-caption text-center randomrotateout tp-resizeme"
								data-x="210"
								data-y="200" 
								data-speed="800" 
								data-start="500" 
								data-easing="Power3.easeInOut" 
								data-elementdelay="0.1" 
								data-endelementdelay="0.1" 
								data-endspeed="300" 
								><img src="asstes/upload/slider_logo_02.png" alt=""/> 
							</div>
							
                            <div class="tp-caption slider_01 text-center skewfromright randomrotateout tp-resizeme"
                                data-x="115"
                                data-y="460" 
                                data-speed="1000"
                                data-start="1000"
                                data-easing="Power3.easeInOut"
                                data-splitin="none"
                                data-splitout="none"
                                data-elementdelay="0.1"
                                data-endelementdelay="0.1"
                                data-endspeed="1000"
                                >Achieve a style of your<br/>Dreams! Just Imagine
                            </div>
							
                            <div class="tp-caption slider_02 text-center skewfromright randomrotateout tp-resizeme"
								data-x="225"
                                data-y="600" 
                                data-speed="1200"
                                data-start="1500"
                                data-easing="Power3.easeInOut"
                                data-splitin="none"
                                data-splitout="none"
                                data-elementdelay="0.1"
                                data-endelementdelay="0.1"
                                data-endspeed="1000"
                                ><a href="booking.html" class="btn btn-default btn-slider">BOOK NOW</a>
                            </div>
						</li>
						<li data-transition="slidevertical" data-slotamount="1" data-masterspeed="500" data-thumb="upload/slider_01.jpg"  data-saveperformance="off" data-title="Barber">
							<img src="asstes/upload/slider_01.jpg"  alt="fullslide1"  data-bgposition="center top" data-bgfit="cover" data-bgrepeat="no-repeat"/>
							
							<div class="tp-caption text-center randomrotateout tp-resizeme"
								data-x="220"
								data-y="180" 
								data-speed="800" 
								data-start="500" 
								data-easing="Power3.easeInOut" 
								data-elementdelay="0.1" 
								data-endelementdelay="0.1" 
								data-endspeed="300" 
								><img src="asstes/upload/slider_logo_01.png" alt=""/> 
							</div>
							
                            <div class="tp-caption slider_01 text-center skewfromright randomrotateout tp-resizeme"
                                data-x="120"
                                data-y="460" 
                                data-speed="1000"
                                data-start="1000"
                                data-easing="Power3.easeInOut"
                                data-splitin="none"
                                data-splitout="none"
                                data-elementdelay="0.1"
                                data-endelementdelay="0.1"
                                data-endspeed="1000"
                                >Best Barber & Hair Shop<br/>Template for ever!
                            </div>
							
                            <div class="tp-caption slider_02 text-center skewfromright randomrotateout tp-resizeme"
                                data-x="68"
                                data-y="590" 
                                data-speed="1200"
                                data-start="1500"
                                data-easing="Power3.easeInOut"
                                data-splitin="none"
                                data-splitout="none"
                                data-elementdelay="0.1"
                                data-endelementdelay="0.1"
                                data-endspeed="1000"
                                >We care about your beauty, We offer you the best service!<br/> Get an appointment now and meet us!
                            </div>
						</li>
					</ul>
				</div>
			</div>
		</section>

		<section class="white-section nopadding white-bg">
			<div class="container">
				<div class="row">
					<div class="col-md-8 col-sm-12">
						<div class="module white-back static">
							<div class="module-title">
								<h4>Welcome to the Barberia</h4>
								<span class="module-separator"></span>
							</div>
							<p class="lead">The Barberia opened in the fall of 1989. We specialize in cutting mens hair and shaving their faces. Let's see all our awesome features below! Thanks for choose us!</p>

							<p>Lorem Ipsum, you need to be sure there isn't anything emb. All the Lorem Ipsum on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>

							<div class="row">
								<div class="col-md-4">
									<div class="info wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.3s">
										<p><img src="asstes/upload/first_icon_01.png" alt="" class="alignleft"/>The hair cutting and styling with 25 years of experience.</p>
									</div>
								</div>

								<div class="col-md-4">
									<div class="info wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.5s">
										<p><img src="asstes/upload/first_icon_02.png" alt="" class="alignleft"/>The beard cutting and styling with 15 years of experience.</p>
									</div>
								</div>
								
								<div class="col-md-4">
									<div class="info wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.7s">
										<p><img src="asstes/upload/first_icon_03.png" alt="" class="alignleft"/>We will have all the awards last 3 years. Special thanks all.</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					
				</div>
			</div>
		</section>

		<section class="white-section clearfix">
			<div class="container">
				<div class="row">
					<div class="col-md-6 col-sm-12 col-xs-12 wow fadeInUp">
						<div class="module">
							<div class="module-title">
								<h4>Beard & Hair Styles</h4>
								<span class="module-separator"></span>
							</div>

							<div class="mini-gallery clearfix">
								<ul>
									<li class="hovereffect">
										<img src="asstes/upload/mini_gallery_03.jpg" alt=""/>
										<div class="hovercontent">
											<div class="hoverbutton">
												<a data-title="Style #1" href="asstes/upload/mini_gallery_03.jpg" data-lightbox="roadtrip"><i class="fa fa-search"></i></a>
											</div>
										</div>
									</li>
									<li class="hovereffect">
										<img src="asstes/upload/mini_gallery_07.jpg" alt=""/>
										<div class="hovercontent">
											<div class="hoverbutton">
												<a data-title="Style #1" href="asstes/upload/mini_gallery_07.jpg" data-lightbox="roadtrip"><i class="fa fa-search"></i></a>
											</div>
										</div>
									</li>
									<li class="hovereffect">
										<img src="asstes/upload/mini_gallery_05.jpg" alt=""/>
										<div class="hovercontent">
											<div class="hoverbutton">
												<a data-title="Style #3" href="upload/mini_gallery_05.jpg" data-lightbox="roadtrip"><i class="fa fa-search"></i></a>
											</div>
										</div>
									</li>
									<li class="hovereffect">
										<img src="asstes/upload/mini_gallery_01.jpg" alt=""/>
										<div class="hovercontent">
											<div class="hoverbutton">
												<a data-title="Style #3" href="asstes/upload/mini_gallery_01.jpg" data-lightbox="roadtrip"><i class="fa fa-search"></i></a>
											</div>
										</div>
									</li>
									<li class="hovereffect">
										<img src="asstes/upload/mini_gallery_02.jpg" alt=""/>
										<div class="hovercontent">
											<div class="hoverbutton">
												<a data-title="Style #3" href="asstes/upload/mini_gallery_02.jpg" data-lightbox="roadtrip"><i class="fa fa-search"></i></a>
											</div>
										</div>
									</li>
									<li class="hovereffect">
										<img src="asstes/upload/mini_gallery_04.jpg" alt=""/>
										<div class="hovercontent">
											<div class="hoverbutton">
												<a data-title="Style #3" href="asstes/upload/mini_gallery_04.jpg" data-lightbox="roadtrip"><i class="fa fa-search"></i></a>
											</div>
										</div>
									</li>
									<li class="hovereffect">
										<img src="asstes/upload/mini_gallery_06.jpg" alt=""/>
										<div class="hovercontent">
											<div class="hoverbutton">
												<a data-title="Style #3" href="asstes/upload/mini_gallery_06.jpg" data-lightbox="roadtrip"><i class="fa fa-search"></i></a>
											</div>
										</div>
									</li>
									<li class="hovereffect">
										<img src="asstes/upload/mini_gallery_08.jpg" alt=""/>
										<div class="hovercontent">
											<div class="hoverbutton">
												<a data-title="Style #3" href="asstes/upload/mini_gallery_08.jpg" data-lightbox="roadtrip"><i class="fa fa-search"></i></a>
											</div>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div class="col-md-3 col-sm-6 col-xs-12 wow fadeInUp">
						<div class="module">
							<div class="module-title">
								<h4>Who We Are</h4>
								<span class="module-separator"></span>
							</div>

							<div class="divimage text-center">
								<div class="hovereffect">
									<img src="asstes/upload/about_01.jpg" alt="" class="img-responsive"/>
									<div class="hovercontent">
										<div class="hoverbutton">
											<a href="about.html"><i class="fa fa-link"></i></a>
										</div>
									</div>
								</div>
								<p>The <strong>Barberia</strong> opened in the fall of 1989. We specialize in cutting mens hair and shaving their faces.</p>
							</div>
						</div>
					</div>

					<div class="col-md-3 col-sm-6 col-xs-12 wow fadeInUp">
						<div class="module">
							<div class="module-title">
								<h4>Company Experience</h4>
								<span class="module-separator"></span>
							</div>

	                        <div class="skills">
	                            <p><i class="fa fa fa-mars"></i> For Man Beards</p>
	                            <div class="progress">
	                                <div class="progress-bar" role="progressbar" data-transitiongoal="96"><span>96</span></div>
	                            </div>
	                            <p><i class="fa fa fa-venus"></i> For Woman Hairs</p>
	                            <div class="progress">
	                                <div class="progress-bar" role="progressbar" data-transitiongoal="100"><span>100</span></div>
	                            </div>
	                            <p><i class="fa fa-bed"></i>  Massage Professionals</p>
	                            <div class="progress">
	                                <div class="progress-bar" role="progressbar" data-transitiongoal="86"><span>86</span></div>
	                            </div>
	                            <p><i class="fa fa fa-child"></i>  Compliance Children</p>
	                            <div class="progress">
	                                <div class="progress-bar" role="progressbar" data-transitiongoal="90"><span>90</span></div>
	                            </div>
	                        </div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section class="grey-section clearfix">
			<div class="container">
				<div class="bigger-title relative text-center">
					<span class="dark-hr"></span>
					<h4>Our Services</h4>
				</div>

				<div class="row text-center">
					<div class="col-md-4 col-sm-6 col-xs-12 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.3s">
						<div class="module white-back">
							<div class="module-title">
								<h4>Hair cutting and styling</h4>
								<span class="module-separator"></span>
							</div>

							<div class="divimage text-center">
								<div class="hovereffect">
									<img src="asstes/upload/service_01.jpg" alt="" class="img-responsive"/>
									<div class="hovercontent">
										<div class="hoverbutton">
											<a href="services.html"><i class="fa fa-link"></i></a>
										</div>
									</div>
								</div>
								<p>The Hair cutting and styling with 25 years of experience Barberie offers you unlimited service. Get more informations.</p>
							</div>
							<div class="absolute-buttons">
								<a href="services.html" title="" class="btn btn-primary">READ MORE</a>
							</div>
						</div>
					</div>

					<div class="col-md-4 col-sm-6 col-xs-12 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.5s">
						<div class="module white-back">
							<div class="module-title">
								<h4>Beard Cutting</h4>
								<span class="module-separator"></span>
							</div>

							<div class="divimage text-center">
								<div class="hovereffect">
									<img src="asstes/upload/service_02.jpg" alt="" class="img-responsive"/>
									<div class="hovercontent">
										<div class="hoverbutton">
											<a href="services.html"><i class="fa fa-link"></i></a>
										</div>
									</div>
								</div>
								<p>Beard Cutting with 25 years of experience Barberie offers you unlimited service, don't miss out.  Get more informations.</p>
							</div>
							<div class="absolute-buttons">
								<a href="services.html" title="" class="btn btn-primary">READ MORE</a>
							</div>
						</div>
					</div>

					<div class="col-md-4 col-sm-6 col-xs-12 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.7s">
						<div class="module white-back">
							<div class="module-title">
								<h4>Hair and beard coloring</h4>
								<span class="module-separator"></span>
							</div>

							<div class="divimage text-center">
								<div class="hovereffect">
									<img src="asstes/upload/service_03.jpg" alt="" class="img-responsive"/>
									<div class="hovercontent">
										<div class="hoverbutton">
											<a href="services.html"><i class="fa fa-link"></i></a>
										</div>
									</div>
								</div>
								<p>Hair and beard coloring with 25 years of experience Barberie offers you unlimited service.  Get more informations.</p>
							</div>
							<div class="absolute-buttons">
								<a href="services.html" title="" class="btn btn-primary">READ MORE</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

	    <section id="firstparallax" class="fullscreen custom-section" data-stellar-background-ratio="0.2" data-stellar-offset-parent="true">
			<div class="overlay"></div>
			<div class="container">
				<div class="bigger-title relative text-center">
					<span class="white-hr"></span>
					<h4>Our Opening Hours</h4>
				</div>

				<div class="row working-time text-center relative">
					<div class="col-md-2 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.3s">
						<div class="working-box">
							<h4>MON</h4>
							<p>09:00 - 19:00</p>
						</div>
					</div>

					<div class="col-md-2 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.4s">
						<div class="working-box">
							<h4>TUE</h4>
							<p>09:00 - 19:00</p>
						</div>
					</div>

					<div class="col-md-2 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.5s">
						<div class="working-box">
							<h4>WED</h4>
							<p>09:00 - 19:00</p>
						</div>
					</div>

					<div class="col-md-2 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.6s">
						<div class="working-box">
							<h4>THU</h4>
							<p>09:00 - 19:00</p>
						</div>
					</div>

					<div class="col-md-2 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.7s">
						<div class="working-box">
							<h4>FRI</h4>
							<p>09:00 - 19:00</p>
						</div>
					</div>

					<div class="col-md-2 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.8s">
						<div class="working-box closed">
							<h4>WEEKEND</h4>
							<p>CLOSED</p>
						</div>
					</div>
				</div>

				<br/>

				<div class="row text-center relative">
					<div class="col-md-12 col-sm-12 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="1.2s">
						<div class="button-wrapper">
							<a href="booking.html" class="btn btn-default">BOOK NOW</a>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section class="grey-section clearfix">
			<div class="container">
				<div class="bigger-title relative text-center">
					<span class="dark-hr-2"></span>
					<h4>Licensed Barbers</h4>
				</div>

				<div class="row text-center">
					<div class="col-md-3 col-sm-6 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.3s">
						<div class="module white-back">
							<div class="module-title">
								<h4>John DEO</h4>
								<span class="module-separator"></span>
							</div>

							<div class="divimage">
								<div class="hovereffect">
									<img src="asstes/upload/barber_01.png" alt="" class="img-responsive"/>
									<div class="hovercontent">
										<div class="hoverbutton fixright">
											<a href="#"><i class="fa fa-facebook"></i></a>
											<a href="#"><i class="fa fa-twitter"></i></a>
											<a href="#"><i class="fa fa-google-plus"></i></a>
										</div>
									</div>
								</div>
								<div class="availability">
									<h4>Availability</h4>
									<ul class="check2">
										<li>Tuesday 8 AM - 4 PM</li>
										<li>Wednesday 8 AM - 4 PM</li>
										<li>Thursday 8 AM - 4 PM</li>
										<li>Friday 8 AM - 4 PM</li>
										<li>Saturday 8 AM - 3 PM </li>
									</ul>
								</div>
							</div>
							<div class="absolute-buttons">
								<a href="booking.html" title="" class="btn btn-primary">Book Now</a>
							</div>
						</div>
					</div>

					<div class="col-md-3 col-sm-6 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.5s">
						<div class="module white-back">
							<div class="module-title">
								<h4>Mark Hopkins</h4>
								<span class="module-separator"></span>
							</div>

							<div class="divimage">
								<div class="hovereffect">
									<img src="asstes/upload/barber_02.png" alt="" class="img-responsive"/>
									<div class="hovercontent">
										<div class="hoverbutton fixright">
											<a href="#"><i class="fa fa-facebook"></i></a>
											<a href="#"><i class="fa fa-twitter"></i></a>
											<a href="#"><i class="fa fa-google-plus"></i></a>
										</div>
									</div>
								</div>
								<div class="availability">
									<h4>Availability</h4>
									<ul class="check2">
										<li>Tuesday 8 AM - 4 PM</li>
										<li>Wednesday 8 AM - 4 PM</li>
										<li>Thursday 8 AM - 4 PM</li>
										<li>Friday 8 AM - 4 PM</li>
										<li>Saturday 8 AM - 3 PM </li>
									</ul>
								</div>
							</div>
							<div class="absolute-buttons">
								<a href="booking.html" title="" class="btn btn-primary">Book Now</a>
							</div>
						</div>
					</div>

					<div class="col-md-3 col-sm-6 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.7s">
						<div class="module white-back">
							<div class="module-title">
								<h4>Steave ZEKORBER</h4>
								<span class="module-separator"></span>
							</div>

							<div class="divimage">
								<div class="hovereffect">
									<img src="asstes/upload/barber_03.png" alt="" class="img-responsive"/>
									<div class="hovercontent">
										<div class="hoverbutton fixright">
											<a href="#"><i class="fa fa-facebook"></i></a>
											<a href="#"><i class="fa fa-twitter"></i></a>
											<a href="#"><i class="fa fa-google-plus"></i></a>
										</div>
									</div>
								</div>
								<div class="availability">
									<h4>Availability</h4>
									<ul class="check2">
										<li>Tuesday 8 AM - 4 PM</li>
										<li>Wednesday 8 AM - 4 PM</li>
										<li>Thursday 8 AM - 4 PM</li>
										<li>Friday 8 AM - 4 PM</li>
										<li>Saturday 8 AM - 3 PM </li>
									</ul>
								</div>
							</div>
							<div class="absolute-buttons">
								<a href="booking.html" title="" class="btn btn-primary">Book Now</a>
							</div>
						</div>
					</div>

					<div class="col-md-3 col-sm-6 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.9s">
						<div class="module white-back">
							<div class="module-title">
								<h4>Tony ANGEL</h4>
								<span class="module-separator"></span>
							</div>

							<div class="divimage">
								<div class="hovereffect">
									<img src="asstes/upload/barber_04.png" alt="" class="img-responsive"/>
									<div class="hovercontent">
										<div class="hoverbutton fixright">
											<a href="#"><i class="fa fa-facebook"></i></a>
											<a href="#"><i class="fa fa-twitter"></i></a>
											<a href="#"><i class="fa fa-google-plus"></i></a>
										</div>
									</div>
								</div>
								<div class="availability">
									<h4>Availability</h4>
									<ul class="check2">
										<li>Tuesday 8 AM - 4 PM</li>
										<li>Wednesday 8 AM - 4 PM</li>
										<li>Thursday 8 AM - 4 PM</li>
										<li>Friday 8 AM - 4 PM</li>
										<li>Saturday 8 AM - 3 PM </li>
									</ul>
								</div>
							</div>
							<div class="absolute-buttons">
								<a href="booking.html" title="" class="btn btn-primary">Book Now</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

	    <section id="secondparallax" class="fullscreen custom-section" data-stellar-background-ratio="0.3" data-stellar-offset-parent="true">
			<div class="overlay"></div>
			<div class="container">
				<div class="bigger-title relative text-center">
					<h4>Happy Testimonials</h4>
				</div>

				<div id="owl-testimonial" class="relative text-center">
					<div class="testi-item">
						<img src="asstes/upload/testi_01.jpg" alt="" class="img-circle"/>
						<h4>John DEO</h4>
						<p class="lead">The Hair cutting and styling with 25 years of experience Barberie offers you unlimited service. Our barber education and training separates us from most of the other options that men have in Chicago..</p>
					</div>

					<div class="testi-item">
						<img src="asstes/upload/testi_02.jpg" alt="" class="img-circle"/>
						<h4>John DEO</h4>
						<p class="lead">The Hair cutting and styling with 25 years of experience Barberie offers you unlimited service. Our barber education and training separates us from most of the other options that men have in Chicago..</p>
					</div>
				</div>
			</div>
		</section>

		<section class="white-section clearfix">
			<div class="container-fluid">
				<div class="bigger-title relative text-center">
					<span class="dark-hr"></span>
					<h4>From the Blog</h4>
				</div>

				<div class="row-fluid text-center">
					<div class="col-md-3 col-sm-6 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.3s">
						<div class="module grey-back">
							<div class="module-title">
								<h4>Sexy, Minimal and Perfect</h4>
								<span class="module-separator"></span>
							</div>

							<div class="divimage text-center">
								<div class="hovereffect">
									<img src="asstes/upload/slider_01.jpg" alt="" class="img-responsive"/>
									<div class="hovercontent">
										<div class="hoverbutton">
											<a href="services.html"><i class="fa fa-link"></i></a>
										</div>
									</div>
								</div>
								<div class="meta">
									<ul class="list-inline list-unstyled">
										<li><a href="#"><i class="fa fa-comments-o"></i> 12 Comments</a></li>
										<li><a href="#"><i class="fa fa-pencil"></i> by Adam</a></li>
									</ul>
								</div>
								<p>Lorem ipsum amet, consectet ad elit sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam...</p>
							</div>
							<div class="absolute-buttons">
								<a href="blog-single.html" title="" class="btn btn-primary">READ MORE</a>
							</div>
						</div>
					</div>

					<div class="col-md-3 col-sm-6 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.5s">
						<div class="module grey-back">
							<div class="module-title">
								<h4>We Are Ready for Holiday</h4>
								<span class="module-separator"></span>
							</div>

							<div class="divimage text-center">
								<div class="hovereffect">
									<img src="asstes/upload/slider_03.jpg" alt="" class="img-responsive"/>
									<div class="hovercontent">
										<div class="hoverbutton">
											<a href="services.html"><i class="fa fa-link"></i></a>
										</div>
									</div>
								</div>
								<div class="meta">
									<ul class="list-inline list-unstyled">
										<li><a href="#"><i class="fa fa-comments-o"></i> 12 Comments</a></li>
										<li><a href="#"><i class="fa fa-pencil"></i> by Adam</a></li>
									</ul>
								</div>
								<p>Lorem ipsum amet, consectet ad elit sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam...</p>
							</div>
							<div class="absolute-buttons">
								<a href="blog-single.html" title="" class="btn btn-primary">READ MORE</a>
							</div>
						</div>
					</div>

					<div class="col-md-3 col-sm-6 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.7s">
						<div class="module grey-back">
							<div class="module-title">
								<h4>New Style of 2015</h4>
								<span class="module-separator"></span>
							</div>

							<div class="divimage text-center">
								<div class="hovereffect">
									<img src="asstes/upload/slider_02.jpg" alt="" class="img-responsive"/>
									<div class="hovercontent">
										<div class="hoverbutton">
											<a href="services.html"><i class="fa fa-link"></i></a>
										</div>
									</div>
								</div>
								<div class="meta">
									<ul class="list-inline list-unstyled">
										<li><a href="#"><i class="fa fa-comments-o"></i> 12 Comments</a></li>
										<li><a href="#"><i class="fa fa-pencil"></i> by Adam</a></li>
									</ul>
								</div>
								<p>Lorem ipsum amet, consectet ad elit sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam...</p>
							</div>
							<div class="absolute-buttons">
								<a href="blog-single.html" title="" class="btn btn-primary">READ MORE</a>
							</div>
						</div>
					</div>

					<div class="col-md-3 col-sm-6 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.9s">
						<div class="module grey-back">
							<div class="module-title">
								<h4>Best Template for Ever</h4>
								<span class="module-separator"></span>
							</div>

							<div class="divimage text-center">
								<div class="hovereffect">
									<img src="asstes/upload/slider_04.jpg" alt="" class="img-responsive"/>
									<div class="hovercontent">
										<div class="hoverbutton">
											<a href="services.html"><i class="fa fa-link"></i></a>
										</div>
									</div>
								</div>
								<div class="meta">
									<ul class="list-inline list-unstyled">
										<li><a href="#"><i class="fa fa-comments-o"></i> 12 Comments</a></li>
										<li><a href="#"><i class="fa fa-pencil"></i> by Adam</a></li>
									</ul>
								</div>
								<p>Lorem ipsum amet, consectet ad elit sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam...</p>
							</div>
							<div class="absolute-buttons">
								<a href="blog-single.html" title="" class="btn btn-primary">READ MORE</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

	    <section id="threeparallax" class="fullscreen custom-section" data-stellar-background-ratio="0.2" data-stellar-offset-parent="true">
			<div class="overlay"></div>
			<div class="container">
				<div class="text-center relative">
			         <div class="contact-details">
			           <h2>support@barberia.com</h2>
			           <h1>+90 1234-567-890</h1>
			           <h2>Envato INC 22 Elizabeth Str. Melbourne.<br/> Victoria 8777. Australia</h2>
			        </div>	
				</div>
			</div>
		</section>

		<section class="grey-section clearfix">
			<div class="container">
				<div class="bigger-title relative text-center">
					<span class="dark-hr-3"></span>
					<h4>From the Shop</h4>
				</div>

				<div class="row text-center">
					<div class="col-md-3 col-sm-6 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.3s">
						<div class="shop-module module white-back clearfix">
							<div class="divimage text-center">
								<div class="hovereffect">
									<img src="asstes/upload/shop_01.png" alt="" class="img-responsive"/>
									<div class="hovercontent">
										<div class="hoverbutton inlinebutton">
											<a href="shop-single.html"><i class="fa fa-link"></i></a>
											<a href="cart.html"><i class="fa fa-shopping-cart"></i></a>
										</div>
									</div>
								</div>
								<div class="shop-mini-title">
									<h4><a href="shop-single.html" title="">Shave Knives</a></h4>
									<div class="price-meta">
										<span class="price">$23.00</span>
										<span class="old">$311.12</span>
									</div>
			                        <div class="rating">
			                            <i class="fa fa-star"></i>
			                            <i class="fa fa-star"></i>
			                            <i class="fa fa-star"></i>
			                            <i class="fa fa-star"></i>
			                            <i class="fa fa-star-o"></i>
			                        </div>
								</div>
							</div>
							<div class="absolute-buttons">
								<a data-toggle="modal" data-tooltip="tooltip" data-target=".modalexample" data-placement="top" title="Click Here" href="#" class="btn btn-primary"><i class="fa fa-search"></i> <span>|</span> QUICK VIEW</a>
							</div>
						</div>
					</div>

					<div class="col-md-3 col-sm-6 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.5s">
						<div class="shop-module module white-back clearfix">
							<div class="divimage text-center">
								<div class="hovereffect">
									<img src="asstes/upload/shop_02.png" alt="" class="img-responsive"/>
									<div class="hovercontent">
										<div class="hoverbutton inlinebutton">
											<a href="services.html"><i class="fa fa-link"></i></a>
											<a href="cart.html"><i class="fa fa-shopping-cart"></i></a>
										</div>
									</div>
								</div>
								<div class="shop-mini-title">
									<h4><a href="shop-single.html" title="">Comb Scissors</a></h4>
									<div class="price-meta">
										<span class="price">$23.00</span>
										<span class="old">$311.12</span>
									</div>
			                        <div class="rating">
			                            <i class="fa fa-star"></i>
			                            <i class="fa fa-star"></i>
			                            <i class="fa fa-star"></i>
			                            <i class="fa fa-star"></i>
			                            <i class="fa fa-star"></i>
			                        </div>
								</div>
							</div>
							<div class="absolute-buttons">
								<a data-toggle="modal" data-tooltip="tooltip" data-target=".modalexample" data-placement="top" title="Click Here" href="#" class="btn btn-primary"><i class="fa fa-search"></i> <span>|</span> QUICK VIEW</a>
							</div>
						</div>
					</div>

					<div class="col-md-3 col-sm-6 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.7s">
						<div class="shop-module module white-back clearfix">
							<div class="divimage text-center">
								<div class="hovereffect">
									<img src="asstes/upload/shop_03.png" alt="" class="img-responsive"/>
									<div class="hovercontent">
										<div class="hoverbutton inlinebutton">
											<a href="services.html"><i class="fa fa-link"></i></a>
											<a href="cart.html"><i class="fa fa-shopping-cart"></i></a>
										</div>
									</div>
								</div>
								<div class="shop-mini-title">
									<h4><a href="shop-single.html" title="">Water Spray</a></h4>
									<div class="price-meta">
										<span class="price">$23.00</span>
										<span class="old">$311.12</span>
									</div>
			                        <div class="rating">
			                            <i class="fa fa-star"></i>
			                            <i class="fa fa-star"></i>
			                            <i class="fa fa-star"></i>
			                            <i class="fa fa-star"></i>
			                            <i class="fa fa-star-o"></i>
			                        </div>
								</div>
							</div>
							<div class="absolute-buttons">
								<a data-toggle="modal" data-tooltip="tooltip" data-target=".modalexample" data-placement="top" title="Click Here" href="#" class="btn btn-primary"><i class="fa fa-search"></i> <span>|</span> QUICK VIEW</a>
							</div>
						</div>
					</div>

					<div class="col-md-3 col-sm-6 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.9s">
						<div class="shop-module module white-back clearfix">
							<div class="divimage text-center">
								<div class="hovereffect">
									<img src="asstes/upload/shop_04.png" alt="" class="img-responsive"/>
									<div class="hovercontent">
										<div class="hoverbutton inlinebutton">
											<a href="services.html"><i class="fa fa-link"></i></a>
											<a href="cart.html"><i class="fa fa-shopping-cart"></i></a>
										</div>
									</div>
								</div>
								<div class="shop-mini-title">
									<h4><a href="shop-single.html" title="">Electric Shaving Machine</a></h4>
									<div class="price-meta">
										<span class="price">$23.00</span>
										<span class="old">$311.12</span>
									</div>
			                        <div class="rating">
			                            <i class="fa fa-star"></i>
			                            <i class="fa fa-star"></i>
			                            <i class="fa fa-star"></i>
			                            <i class="fa fa-star"></i>
			                            <i class="fa fa-star-o"></i>
			                        </div>
								</div>
							</div>
							<div class="absolute-buttons">
								<a data-toggle="modal" data-tooltip="tooltip" data-target=".modalexample" data-placement="top" title="Click Here" href="#" class="btn btn-primary"><i class="fa fa-search"></i> <span>|</span> QUICK VIEW</a>
							</div>
						</div>
					</div>
				</div>

				<br/>

				<div class="row text-center">
					<div class="col-md-12 col-sm-12 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="1.2s">
						<div class="button-wrapper">
							<a href="shop.html" class="btn btn-default">VIEW ALL ITEMS</a>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section class="white-section nopaddingobottom">
			<div class="container">
				<div class="row">
					<div class="col-md-5 col-sm-12">
						<img src="asstes/upload/award.png" alt="" class="img-responsive wow fadeIn"/>
					</div>
	                <div class="col-md-7 col-sm-12">
	                    <div class="taglinemessage wow fadeIn">
	                        <h2>Do you like our hairdresser?</h2>
		                    <p>Integer orci enim varius vel accumsan vel porttitor tellus. Vivamus odio. Donec metus libero semper quis suscipit ut aliquam metus. Phasellus ut lacus vel nisi donec molestie arcu quis neque Phasellus ut lacus vel nisi donec mole.</p>
		                    <a href="booking.html" class="btn btn-lg btn-primary">BOOK NOW</a>
	                    </div>
	                </div>
				</div>
			</div>
		</section>
    </div>
    );
}

export default Home;
