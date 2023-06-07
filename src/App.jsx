import bgImage from './images/bg-black-waves.jpg';
import './App.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { Container, Row, Col } from 'react-bootstrap';
import { useSpring, animated, config } from '@react-spring/web';
import {
  Chart as ChartJS,
  CategoryScale,
  RadialLinearScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  ArcElement,
  LineElement,
  Filler
} from 'chart.js';
import { Bar, Doughnut, Radar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  RadialLinearScale,
  Filler
);

const EqColors = ['#eb1f28', '#213a73', '#fec813', '#242424', '#53b7e7'];

export const options = {
  plugins: {
    title: {
      display: true,
      text: 'Chart.js Bar Chart - Stacked',
    },
  },
  responsive: true,
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};

const labels = ['2021-2025'];

export const radarChartData = {
  labels: ['Thing 1', 'Thing 2', 'Thing 3', 'Thing 4', 'Thing 5', 'Thing 6'],
  datasets: [
    {
      label: '# of Votes',
      data: [2, 9, 3, 5, 2, 3],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1,
    },
  ],
};

export const data = {
  labels,
  datasets: [{
    "label": "2021",
    "data": [3531],
    "backgroundColor": EqColors[0]
  },
  {
    "label": "2022",
    "data": [5203],
    "backgroundColor": EqColors[1]
  },
  {
    "label": "2023",
    "data": [7330, 9924, 13238],
    "backgroundColor": EqColors[2]
  },
  {
    "label": "2024",
    "data": [9924],
    "backgroundColor": EqColors[3]
  },
  {
    "label": "2024",
    "data": [13238],
    "backgroundColor": EqColors[4]
  }]
};

export const doughnutChartData = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const dataServiceProviders = {
  labels: ['Telecommunications', 'Cloud & IT Services', 'Hyperscale Providers', 'Content & Digital Media'],
  datasets: [{
    "label": "2021",
    "data": [2237, 1321, 711, 391],
    "backgroundColor": EqColors[0]
  },
  {
    "label": "2022",
    "data": [3404, 2052, 1133, 608],
    "backgroundColor": EqColors[1]
  },
  {
    "label": "2023",
    "data": [4811, 2916, 1625, 858],
    "backgroundColor": EqColors[2]
  },
  {
    "label": "2024",
    "data": [6108, 3672, 2034, 1057],
    "backgroundColor": EqColors[3]
  },
  {
    "label": "2025",
    "data": [7609, 4533, 2478, 1277],
    "backgroundColor": EqColors[4]
  }]
};


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
        <Parallax pages={4} speed={0.5}>


          {/* ------------ Slide 1 ------------ */}
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
                        <h1 className="hero-text-xxl text-yellow" style={{ lineHeight: 1 }}>GXI</h1>
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
                      <i class="bi bi-airplane-engines" style={{ fontSize: '5rem' }}></i>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.5}>
            <Container>
              <Row>
                <Col>
                  <div className="d-flex bd-highlight mb-3 justify-content-center text-white" style={{ height: '100vh' }}>
                    <div className="align-self-end bd-highlight text-center mb-5 zoom-in-out-box">
                      <p className='lead'>Scoll Down</p>
                      <i className="bi bi-chevron-double-down" style={{ fontSize: '3rem', lineHeight: 1 }}></i>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </ParallaxLayer>

          {/* ------------ Slide 2 ------------ */}
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
                        <h2 className="mb-4" style={{ fontSize: '8rem', color: '#242424', lineHeight: 1 }}>Your Ecosystem Is Now Your Infrastructure.</h2>
                        <p className="hero-text-p">Tapping into a vast ecosystem of suppliers and industry partners is
                          essential to accelerate a digital-first strategy, while prioritizing sustainability. And digitizing business means navigating change to compete and thrive—demanding faster transformation and adaptable digital
                          infrastructure now more than ever before.</p>
                      </animated.div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </ParallaxLayer>


          {/* ------------ Slide 3 ------------ */}
          <ParallaxLayer
            offset={2}
            style={{ backgroundColor: 'white' }}
          >
          </ParallaxLayer>
          <ParallaxLayer offset={2} speed={0.5}>
            <Container>
              <Row>
                <Col xs={12}>
                  <h2 className="mb-4 text-yellow" style={{ paddingTop: '4rem' }}>Global Forecast: Industry</h2>
                  <p className="mb-4 lead">The digital economy continues to accelerate globally past economic and supply chain disruption. Global interconnection bandwidth is forecast to grow at a 40% five-year CAGR reaching 27,762 Tbps, which is equivalent to 110 zettabytes of data exchanged annually.</p>
                </Col>
                <Col md={6}>
                  <animated.div style={{ ...headingAnimation }}>
                    <div style={{ height: 600 }}>
                      <Bar options={options} data={data} width={'200'} height={400} />
                    </div>
                  </animated.div>
                </Col>
                <Col md={6}>
                  <animated.div style={{ ...headingAnimation }}>
                    <div style={{ height: 600 }}>
                      <Bar options={options} data={dataServiceProviders} width={'800'} height={800} />
                    </div>
                  </animated.div>
                </Col>
              </Row>
            </Container>
          </ParallaxLayer>


          {/* ------------ Slide 4 ------------ */}
          <ParallaxLayer
            offset={3}
            style={{ backgroundColor: 'rgba(0,0,0,0.1)' }}
          >
          </ParallaxLayer>
          <ParallaxLayer offset={3} speed={0.5}>
            <Container>
              <Row>
                <Col xs={12} className="mb-4">
                  <h2 className="mb-4" style={{ paddingTop: '4rem' }}>Global Forecast: Industry</h2>
                  <p className="mb-4 lead">The digital economy continues to accelerate globally past economic and supply chain disruption. Global interconnection bandwidth is forecast to grow at a 40% five-year CAGR reaching 27,762 Tbps, which is equivalent to 110 zettabytes of data exchanged annually.</p>
                </Col>
                <Col md={6}>
                  <animated.div style={{ ...headingAnimation }}>
                    <div style={{ height: 600 }}>
                      <Doughnut data={doughnutChartData} />
                    </div>
                  </animated.div>
                </Col>
                <Col md={6}>
                  <animated.div style={{ ...headingAnimation }}>
                    <div style={{ height: 600 }}>
                      <Radar data={radarChartData} />
                    </div>
                  </animated.div>
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
