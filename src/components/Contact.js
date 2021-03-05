import React, { useEffect } from 'react';


function Contact()
{
	useEffect(()=>{
        document.title="Home | Front Side";
    },[]);

    return(
        <div>
            	    
		<section class="header-section relative">
			<header class="header container">
				
				<nav class="navbar yamm navbar-default">
					<div class="navbar-header">
						
			            <div class="logo">
				            <a class="navbar-brand" href="index.html"><img src="images/logo.png" alt=""/></a>
			            </div>
					</div>

					<div id="navbar" class="navbar-collapse collapse">
						<ul class="nav navbar-nav navbar-right">
							<li class="dropdown yamm-fw"><a href="#" data-toggle="dropdown" class="active dropdown-toggle">Home</a>
								<ul class="dropdown-menu menu-bg">
									<li>
						                <div class="yamm-content">
						                    <div class="row">
												<div class="col-sm-3">
													<ul class="check">
							                        <li><a href="index.html">Default Version</a></li>
							                        <li><a href="index-boxed.html">Boxed Version</a></li>
							                        <li><a href="barbers.html">All Barbers</a></li>
							                        <li><a href="barbers-alt.html">All Barbers Alt</a></li>
							                        <li><a href="barber-single.html">Single Barber</a></li>
							                        <li><a href="pricing.html">Plans & Pricing</a></li>
							                        <li><a href="services.html">Our Services</a></li>
							                        </ul>
						                     	</div>
												<div class="col-sm-3">
													<ul class="check">
							                        <li><a href="about.html">About Barbers</a></li>
							                        <li><a href="booking.html">Book Now</a></li>
							                        <li><a href="company-info.html">Company Timeline</a></li>
							                        <li><a href="hair-beard.html">Hair & Beard Styles</a></li>
							                        <li><a href="clients.html">Testimonials</a></li>
							                        <li><a href="contact.html">Contact Us</a></li>
							                        <li><a href="faqs.html">Friendly Questions</a></li>
							                        </ul>
							                    </div>
												<div class="col-sm-3">
													<ul class="check">
							                        <li><a href="sitemap.html">Sitemap</a></li>
							                        <li><a href="404.html">Not Found</a></li>
							                        <li><a href="shortcodes.html">Shortcodes</a></li>
							                        <li><a href="typography.html">Typography</a></li>
							                        <li><a href="coming-soon.html">Coming Soon</a></li>
							                        <li><a href="login.html">Customer Login</a></li>
							                        <li><a href="http://templatevisual.com/demo/largeria/index.html">Other Demos <span class="label label-warning">Hot</span></a></li>
							                        </ul>
							                    </div>
											</div>
										</div>
									</li>
								</ul>
							</li>
							<li><a href="barbers.html">Barbers</a></li>
							<li><a href="services.html">Services</a></li>
							<li class="dropdown">
								<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Shop</a>
								<ul class="dropdown-menu" role="menu">
									<li><a href="shop.html">Shop Catalog</a></li>
									<li><a href="shop-sidebar.html">Shop Sidebar</a></li>
									<li><a href="shop-single.html">Shop Single</a></li>
									<li><a href="shop-single-alt.html">Shop Single Alt</a></li>
									<li><a href="checkout.html">Checkout</a></li>
									<li><a href="cart.html">Shopping Cart</a></li>
								</ul>
							</li>
							<li class="dropdown">
								<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Gallery</a>
								<ul class="dropdown-menu" role="menu">
									<li><a href="gallery-masonry.html">Masonry Style</a></li>
									<li><a href="gallery-fullwidth.html">Fullwidth Grid</a></li>
									<li><a href="gallery2.html">2 Columns</a></li>
									<li><a href="gallery3.html">3 Columns</a></li>
									<li><a href="gallery4.html">4 Columns</a></li>
									<li><a href="gallery-single.html">Single Gallery</a></li>
								</ul>
							</li>
							<li class="dropdown">
								<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Blog</a>
								<ul class="dropdown-menu" role="menu">
									<li><a href="blog.html">Default Blog</a></li>
									<li><a href="blog2.html">2 Columns</a></li>
									<li><a href="blog3.html">3 Columns</a></li>
									<li><a href="blog-single.html">Blog Single</a></li>
								</ul>
							</li>
							<li class="active"><a href="contact.html">Contact</a></li>
							<li><a href="booking.html">Book Now <span class="label label-warning">Hot</span></a></li>
			            </ul>
					</div>
				</nav>
			</header>
		</section>

		<section class="page-title-section text-center">
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<p class="lead">Let's contact with us & get in touch</p>
						<h1 class="page-title">Contact</h1>
						<hr class="customhr"/>
					</div>	
				</div>
			</div>
		</section>

		<section class="post-section white-section nopadding clearfix">
			<div class="container-fluid">
				<div class="row text-left">
					<div class="nopadding col-md-6 col-sm-6 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s">
						<div class="module white-back nopadding">
							<img src="asstes/upload/contact.jpg" alt="" class="img-responsive"/>
						</div>
					</div>

					<div class="nopadding col-md-6 col-sm-6 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.5s">
						<div class="taglinemessage module white-back barberalt">
	                        <h2>Contact Form</h2>

	                        <p class="lead"> Fusce non nulla quis leo lobortis porttitor. Quisque mi egestas nibh porttitor molestie. Nullam ut orci elit. Suspendisse tincidunt dapibus blandit. In nibh eu justo ultrices posuere. </p>

					            <div class="contact_form comment-form-wrap wow fadeIn rcw-form">
					                <div id="message"></div>
					                <form id="contactform" class="row" action="http://templatevisual.com/demo/largeria/barberia/contact.php" name="contactform" method="post">
					                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
					                        <input type="text" name="name" id="name" class="form-control" placeholder="Name"/> 
					                    </div>
					                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
					                        <input type="text" name="email" id="email" class="form-control" placeholder="Email"/> 
					                    </div>
					                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
					                        <input type="text" name="name" id="phone" class="form-control" placeholder="Phone"/> 
					                    </div>
					                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
					                        <input type="text" name="subject" id="subject" class="form-control" placeholder="Subject"/> 
					                    </div>
					                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
					                        <textarea class="form-control" name="comments" id="comments" rows="6" placeholder="Message Below"></textarea>
					                        <div class="pull-left">
					                            <p>* Note: Your email will be kept safe and sound</p>
					                        </div>
					                        <div class="pull-right">
					                            <button type="submit" value="SEND" id="submit" class="btn btn-primary"> SEND MAIL</button>
					                        </div>
					                    </div>
					                </form> 
					            </div>
			

						</div>
					</div>
				</div>
			</div>
		</section>

		<div id="map" class="wow slideInUp"></div>
        </div>
    );
}

export default Contact;