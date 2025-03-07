import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaTiktok } from 'react-icons/fa';

const SocialMedia = () => {
    return (
        <section className="social4 cid-uBOQpcVPoH">
            <div className="container">
                <div className="media-container-row">
                    <div className="col-12">
                        <h3 className="mbr-section-title align-center mb-5 mbr-fonts-style display-2">
                            <strong>Следите за нами!</strong>
                        </h3>
                        <div className="social-list align-center">
                            <a className="iconfont-wrapper bg-facebook m-2" target="_blank" rel="noopener noreferrer" href="#">
                                <FaFacebook className="socicon" />
                            </a>
                            <a className="iconfont-wrapper bg-twitter m-2" target="_blank" rel="noopener noreferrer" href="#">
                                <FaTwitter className="socicon" />
                            </a>
                            <a className="iconfont-wrapper bg-instagram m-2" target="_blank" rel="noopener noreferrer" href="#">
                                <FaInstagram className="socicon" />
                            </a>
                            <a className="iconfont-wrapper bg-tiktok m-2" target="_blank" rel="noopener noreferrer" href="#">
                                <FaTiktok className="socicon" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SocialMedia;