import React from 'react'
import { Jumbotron, Button,Container } from 'reactstrap';

function  Footer()
{
    return(
        <div>
            <footer class="footer">
	        <div class="container">
	            <div class="row">
	                <div class="col-lg-3 col-sm-6 col-xs-12">
	                    <div class="widget wow fadeIn">
	                        <div class="widget-title">
	                            <h6><a href="index.html"><img src="asstes/images/logo.png" alt=""/></a></h6>
	                        </div>
	                        <div class="text-widget">
	                            <p>                      
	                               Fusce non nulla quis leo lobortis porttitor. Quisque mi egestas nibh porttitor molestie. Nullam ut orci elit. Suspendisse tincidunt dapibus blandit. In nibh eu justo ultrices posuere.
	                               <a href="#" class="btn btn-primary">Read More</a>
	                            </p>
	                        </div>
	                    </div>
	                </div>

	                <div class="col-lg-3 col-sm-6 col-xs-12">
	                    <div class="widget wow fadeIn">
							<div class="module-title">
								<h4>Our Office's</h4>
								<span class="module-separator"></span>
							</div>
	                        <div class="list-widget check">
	                            <ul>
	                                <li><a href="#">Melbourne / AUSTRALIA </a></li>
	                                <li><a href="#">Istanbul AVM / TURKEY </a></li>
	                                <li><a href="#">Rotherdam / GERMANY </a></li>
	                                <li><a href="#">New York / U.S.A </a></li>
	                                <li><a href="#">Mecca / SUUDI ARABIA </a></li>
	                                <li><a href="#">Poland / HOLLAND </a></li>
	                            </ul>
	                        </div>
	                    </div>
	                </div>

					<div class="col-md-4 col-sm-6 col-xs-12 wow fadeInUp">
						<div class="widget wow fadeIn">
							<div class="module-title">
								<h4>Flickr Stream</h4>
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
												<a data-title="Style #3" href="asstes/upload/mini_gallery_05.jpg" data-lightbox="roadtrip"><i class="fa fa-search"></i></a>
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

	                <div class="col-lg-2 col-sm-6 col-xs-12">
	                    <div class="widget wow fadeIn">
							<div class="module-title">
								<h4>Site Links</h4>
								<span class="module-separator"></span>
							</div>
	                        <div class="list-widget check">
	                            <ul>
	                                <li><a href="index.html">Homepage</a></li>
	                                <li><a href="index.html">About Us</a></li>
	                                <li><a href="index.html">Get In Touch</a></li>
	                                <li><a href="index.html">Sitemap</a></li>
	                                <li><a href="index.html">Terms of Usage</a></li>
	                                <li><a href="index.html">Book Now</a></li>
	                            </ul>
	                        </div>
	                    </div>
	                </div>
	            </div>
	        </div>
	    </footer>

	    <div class="copyright">
	        <div class="container text-center">
	            <div class="copymessage">
	                <p>Proactii. Designed with <i class="fa fa-heart-o"></i> by Paras</p>
	            </div>
	        </div>
	    </div>
        </div>
		
    );
}

export default Footer;