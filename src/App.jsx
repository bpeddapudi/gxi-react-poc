import bgImage from './images/bg-black-waves.jpg';
import './App.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { Container, Row, Col } from 'react-bootstrap';
import { useSpring, animated } from '@react-spring/web';

function App() {
  const headingAnimation = useSpring({
    from: { scale: 2 },
    to: { scale: 1 },
  })

  return (
    <div className="App">
      <div className="parallax">
        {/* 
          offset: to define which page
          factor: 1 = 1 page 
         */}
        <Parallax pages={2} speed={0.5}>
          <ParallaxLayer
            offset={0}
            factor={1}
            style={{
              backgroundImage: `url(${bgImage})`,
              backgroundSize: 'cover'
            }}
          >
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.5}>
            <Container>
              <Row>
                <Col>
                  <div className="d-flex bd-highlight mb-3 justify-content-center text-white" style={{ height: '100vh' }}>
                    <div className="align-self-center p-2 bd-highlight text-center ">
                      <animated.div style={{ ...headingAnimation }}>
                        <h1 style={{ fontSize: '24rem', color: '#fec813', lineHeight: 1 }}>GXI</h1>
                        <h3>Global Interconnection Index 2023</h3>
                        <p className="lead">Measuring the Growth of the Global Digital Economy Volume 6 </p>
                      </animated.div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={2}>
            <Container>
              <Row>
                <Col>
                  <div className="d-flex bd-highlight mb-3 justify-content-end text-white" style={{ height: '100vh' }}>
                    <div className="align-self-end p-2 bd-highlight text-center ">
                      <i class="bi bi-airplane-engines" style={{fontSize: '7rem'}}></i>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </ParallaxLayer>

          <ParallaxLayer
            offset={1}
            style={{ backgroundColor: '#ed1c24' }}
          >
          </ParallaxLayer>
          <ParallaxLayer offset={1} speed={0.5}>
            <Container>
              <Row>
                <Col md={10}>
                  <div className="d-flex bd-highlight mb-3 justify-content-center text-white" style={{ height: '100vh' }}>
                    <div className="align-self-center p-2 bd-highlight">
                      <animated.div style={{ ...headingAnimation }}>
                        <h2 style={{ fontSize: '8rem', color: '#242424', lineHeight: 1 }}>Your Ecosystem Is Now Your Infrastructure.</h2>
                        <p className="lead">Tapping into a vast ecosystem of suppliers and industry partners is
                          essential to accelerate a digital-first strategy, while prioritizing sustainability. And digitizing business means navigating change to compete and thrive—demanding faster transformation and adaptable digital
                          infrastructure now more than ever before.</p>
                      </animated.div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </ParallaxLayer>

        </Parallax>
      </div>
      <div>
      </div>
    </div>
  );
}

export default App;
