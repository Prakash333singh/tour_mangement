import { React, useRef, useEffect } from 'react';
import { Container, Row, Button } from 'reactstrap';
import { NavLink, Link } from 'react-router-dom';
import './header.css'
import logo from '../../assets/images/logo.png';

const nav_links = [
    {
        path: '/home',
        display: 'Home'
    },
    {
        path: '/about',
        display: 'About'
    },
    {
        path: '/tours',
        display: 'Tours'
    },
]

const Header = () => {
    const headerRef = useRef(null);


    useEffect(() => {
        const stickyHeaderFunc = () => {
            if (headerRef.current) { // Check if headerRef.current is not null
                const { body, documentElement } = document;

                if (body.scrollTop > 80 || documentElement.scrollTop > 80) {
                    headerRef.current.classList.add('sticky__header');
                } else {
                    headerRef.current.classList.remove('sticky__header');
                }
            }
        };

        window.addEventListener('scroll', stickyHeaderFunc);

        // Cleanup the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', stickyHeaderFunc);
        };
    }, [headerRef]);

    return (
        <header className='header' ref={headerRef}>
            <Container>
                <Row>
                    <div className='nav__wrapper d-flex align-items-center justify-content-between'>
                        {/* logo start*/}

                        <div className='logo'>
                            <img src={logo} alt="" />
                        </div>
                        {/* logo end*/}

                        {/* menu start*/}
                        <div className='navigation'>
                            <ul className="menu d-flex align-items-center gap-5">
                                {nav_links.map((item, index) => (
                                    <li className="nav__item" key={index}>
                                        <NavLink to={item.path} className={navClass => navClass.isActive ? "active__link" : ""}>{item.display}</NavLink>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* menu end*/}


                        <div className='nav__right d-flex align-items-center gap-4'>
                            <div className='nav__btns d-flex align-items-center gap-4'>
                                <Button className='btn secondary__btn'>
                                    <Link to="/login">Login</Link>
                                </Button>

                                <Button className='btn primary__btn'>
                                    <Link to="/register">Register</Link>
                                </Button>
                            </div>
                            <span className='mobile__menu'>
                                <i class="ri-menu-line"></i>
                            </span>

                        </div>

                    </div>
                </Row>
            </Container>
        </header>
    )
}

export default Header;
