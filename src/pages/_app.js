import Head from '../components/_head';
import Header from '../components/Header';
import Footer from '../components/Footer';

// -- Package CSS --
import "react-responsive-carousel/lib/styles/carousel.min.css";

// -- Custom CSS --
import '../App.scss';
import '../components/ImageCarousel.scss';

export default function App({ Component, pageProps }) {
    return (
        <>
            <Head />

            <Header />
            <Component {...pageProps} />
            <Footer />
        </>
    );
}