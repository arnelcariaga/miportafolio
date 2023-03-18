import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import anime from "animejs";
import BSNavbar from './BSNavbar';
import Header from './Header';
import Footer from './Footer';

export default function HomeLayout({ children }) {
    const animation = React.useRef(null);
    const devTxtRef = React.useRef()

    React.useEffect(() => {
        devTxtRef.current.innerHTML = devTxtRef.current.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
        
        animation.current = anime({
            targets: ".navbar-brand",
            duration: 3000,
            scale: {
              value: [5, 1]
            }
          });

        animation.current = anime({
            targets: ".web-txt",
            translateY: {
                value: [-150, 0],
                duration: 3000
            },
        });

        animation.current = anime({
            targets: ".mobile-txt",
            translateX: {
                value: [-150, 0],
                duration: 3000
            },
        });

        animation.current = anime.timeline({ loop: true })
            .add({
                targets: '.dev-txt .letter',
                opacity: [0, 1],
                easing: "easeInOutQuad",
                delay: (el, i) => 150 * (i + 1),
            }).add({
                targets: '.dev-txt',
                opacity: 0,
                easing: "easeOutExpo",
                delay: 3000,
            });

    }, [animation, devTxtRef]);

    return (
        <Container fluid>
            <Row>
                <Col md={12}>
                    <BSNavbar />
                </Col>
            </Row>

            <Row className='vh-100 justify-content-center align-items-center'>
                <Col md={10} className="gy-5">
                    <Header devTxtRef={devTxtRef} />
                </Col>
            </Row>

            <Row>
                <Col md={12}>
                    {children}
                </Col>

                <Col md={12}>
                    <Footer />
                </Col>
            </Row>
        </Container>
    )
}
