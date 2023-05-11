import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
    return(
        <footer className="bg-black text-white pt-5 pb-70">
            <div className="container">
                <div className="row">
                <div className="col-lg-3 col-sm-3">
                    <Link to="/" className='fs-1 text-decoration-none text-white fw-bold'>Kk</Link>
                </div>
                <div className="col-lg-3 col-sm-3">
                    <div className="footer-widget mb-30 ml-30">
                    <h5 className='mb-4'>ABOUT US</h5>
                    <div className="footer-list">
                        <ul className='list-unstyled'>
                        <li className='pb-2'>
                            <Link to="/" className='text-light text-decoration-none'>About us</Link>
                        </li>
                        <li className='pb-2'>
                            <Link to="/" className='text-light text-decoration-none'>Store location</Link>
                        </li>
                        <li className='pb-2'>
                            <Link to="/" className='text-light text-decoration-none'>Contact</Link>
                        </li>
                        </ul>
                    </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-3">
                    <div className="footer-widget mb-30 ml-50">
                    <h5 className='mb-4'>USEFUL LINKS</h5>
                    <div className="footer-list">
                        <ul className='list-unstyled'>
                        <li className='pb-2'>
                            <Link to="/" className='text-light text-decoration-none'>Returns</Link>
                        </li>
                        <li className='pb-2'>
                            <Link to="/" className='text-light text-decoration-none'>Support Policy</Link>
                        </li>
                        <li className='pb-2'>
                            <Link to="/" className='text-light text-decoration-none'>FAQs</Link>
                        </li>
                        </ul>
                    </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-3">
                    <div className="footer-widget mb-30 ml-75">
                        <h5 className='mb-4'>FOLLOW US</h5>
                    <div className="footer-list">
                        <ul className='list-unstyled'>
                        <li className='pb-2'>
                            <Link to="//www.facebook.com" target="_blank" rel="noopener noreferrer" className='text-light text-decoration-none'>Facebook</Link>
                        </li>
                        <li className='pb-2'>
                            <Link to="//www.instagram.com" target="_blank" rel="noopener noreferrer" className='text-light text-decoration-none'>Instagram</Link>
                        </li>
                        <li className='pb-2'>
                            <Link to="//www.youtube.com" target="_blank" rel="noopener noreferrer" className='text-light text-decoration-none'>Youtube</Link>
                        </li>
                        </ul>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </footer>
    )
} 
export default Footer