
import Button from '../components/Button'
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import Head from 'next/head'
import GitHubCorner from '../components/GitHubCorner'
import Hamburger from '../components/Hamburger'

import logo from '../assets/logo.svg'
import image1 from '../assets/image1.svg'
import image2 from '../assets/image2.svg'
import image3 from '../assets/image3.svg'
import image4 from '../assets/image4.svg'
import image5 from '../assets/image5.svg'
import image6 from '../assets/image6.svg'
import f from '../assets/f.svg'
import t from '../assets/t.svg'
import i from '../assets/i.svg'
import user1 from '../assets/user1.png'
import user2 from '../assets/user2.png'

import { FiArrowRight } from 'react-icons/fi';
import { 
  Container,
  Header,
  HeaderContent, 
  Nav,
  Content,
  ContainerDescription,
  Description,
  AboutUs,
  FeaturesContairner,
  FeaturesHeader,
  FeaturesDescription,
  CardFetures,
  CardDescription,
  TestimonialsContainer,
  CardTestimonials,
  Footer,
  TopFooter,
  ButtonsFooter,
  Info,
  Endress,
  About,
  Help,
  SocialMedia,
  TitleLogo,
  EndressDescription,
  LogoSocialMedia,
} from '../styles/pages/Home'

export default function Home() {

  
  return (
    <Container>
      <GitHubCorner projectUrl="https://google.com" />

      <Head>
        <title>DataWarehouse</title>
        <link rel="shortcut icon" href={logo} />
      </Head>

      <Header>
        <HeaderContent>
          <img src={logo}/>
          <Nav>
            <a href="">About</a>
            <a href="">Help</a>
            <a href="">Features</a>
            <a href="">Signup</a>
          </Nav>
          <Button colorBtn="#ffff">
            Request Demo
            <FiArrowRight size={23}/>
          </Button>
          <Hamburger>
            <a href="">About</a>
            <a href="">Help</a>
            <a href="">Features</a>
            <a href="">Signup</a>
          </Hamburger>
        </HeaderContent>
      </Header>

      

      <Content>
        <ContainerDescription backgroundImage={image1}>
          <Description>
            <h1>Save your data storage here.</h1>
            <p>
              Data Warehouse is a data storage area that has been tested for security,
               so you can store your data here safely but not be afraid of being stolen by others.
            </p>
            <Button colorBtn="#9C69E2" >Learn More</Button>
          </Description>
        </ContainerDescription>

        <AboutUs>
          <img src={image2} alt=""/>
          <div>
            <h1>We are a high-level data storage bank</h1>
            <p>
              The place to store various data that you can access at any time through 
              the internet and where you can carry it. This very flexible storage area 
              has a high level of security. To enter into your own data you must enter 
              the password that you created when you registered in this Data Warehouse.
            </p>
          </div>
        </AboutUs>
      
        <FeaturesContairner>
          <FeaturesHeader>
            <h2>Features</h2>
            <p>
              Some of the features and advantages that we provide for those of
            </p>
            <p>
              you who store data in this Data Warehouse.
            </p>
          </FeaturesHeader>

          <FeaturesDescription>
            <CardFetures>
              <img src={image3}/>
              <CardDescription>
                <h3>Search Data</h3>
                <p>
                  Don’t worry if your data is very large,
                  the Data Warehoue provides a search engine, which is useful for
                  making it easier to find data effectively saving time.
                </p>
                <a href="">
                  Learn more
                  <FiArrowRight size={18}/>
                </a>
              </CardDescription>
            </CardFetures>
            <CardFetures>
              <img src={image4}/>
              <CardDescription>
                <h3>24 Hours access</h3>
                <p>
                  Access is given 24 hours a full morning to night and meet
                   again in the morning, giving you comfort when you need data when urgent.
                </p>
                <a href="">
                  Learn more
                  <FiArrowRight size={18}/>
                </a>
              </CardDescription>
            </CardFetures>
            <CardFetures>
              <img src={image5}/>
              <CardDescription>
                <h3>Print Out</h3>
                <p>
                  Print out service gives you convenience if someday
                   you need print data, just edit it all and just print it.
                </p>
                <a href="">
                  Learn more
                  <FiArrowRight size={15}/>
                </a>
              </CardDescription>
            </CardFetures>
            <CardFetures>
              <img src={image6}/>
              <CardDescription>
                <h3>Security Code</h3>
                <p>
                  Data Security is one of our best facilities. Allows for your files to be
                   safer. The file can be secured with a code or password that you created, 
                   so only you can open the file.
                </p>
                <a href="">
                  Learn more
                  <FiArrowRight size={18}/>
                </a>
              </CardDescription>
            </CardFetures> 
          </FeaturesDescription>
        </FeaturesContairner>

        <TestimonialsContainer>
          <h2>Testimonials</h2>
          <Carousel
            autoPlay={3000}
            infinite
            stopAutoPlayOnHover
            slidesPerPage={1}
            animationSpeed={3000}
          >
            <CardTestimonials>
            <img src={user1}/>
            <div>
              <strong>Jany Doe</strong>
              <span>UX Engineer</span>
              <p>Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor</p>
            </div>
          </CardTestimonials>
          <CardTestimonials>
            <img src={user2}/>
            <div>
              <strong>John Fang</strong>
              <span>wordfaang.com</span>
              <p>Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.</p>
            </div>
          </CardTestimonials>
          </Carousel>
          
        </TestimonialsContainer>

        <Footer>
          <TopFooter>
            <div>
              <h3>Try for free!</h3>
              <span>Get limited 1 week free try our features!</span>
            </div>
            <ButtonsFooter>
              <Button colorBtn="#F063B8">
                Learn more
              </Button>
              <Button colorBtn="#ffff">
                Request Demo
                <FiArrowRight size={23}/>
              </Button>
            </ButtonsFooter>
            
          </TopFooter>

          <Info>
            <Endress>
              <TitleLogo>
                <img src={logo}/>
                <h3>DataWarehouse</h3>
              </TitleLogo>
              <EndressDescription>
                <div>
                  <span>Warehouse Society, 234</span>
                  <span>Bahagia Ave Street PRBW 29281</span>
                </div>
                <div>
                  <span>info@warehouse.project</span>
                  <span>1-232-3434 (Main)</span>
                </div>
              </EndressDescription>
            </Endress>
            <About>
              <strong>About</strong>              
              <a href="/">Profile</a>
              <a href="/">Features</a>
              <a href="/">Careers</a>
              <a href="/">DW News</a>
            </About>
            <Help>
              <strong>Help</strong>              
              <a href="/">Support</a>
              <a href="/">Sign up</a>
              <a href="/">Guide</a>
              <a href="/">Reports</a>
            </Help>
            <SocialMedia>
              <strong>Social Media</strong>
              <LogoSocialMedia>
                <img src={f} />
                <img src={t} />
                <img src={i} />
              </LogoSocialMedia>
            </SocialMedia>
          </Info>
        </Footer>

      </Content>
      
    </Container>
  )
}
