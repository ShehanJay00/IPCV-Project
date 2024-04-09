import Navbar from "../components/Navbar.js";
import Hero from "../components/Hero.js";
import ContactImg from "../assets/NewContact.jpg"
import Footer from "../components/footer.js";
import ContactForm from "../components/ContactForm.js";


function Contact(){
    return(
        <>
        <Navbar />
        <Hero
        cName   = "hero-mid"
        heroImg = {ContactImg}
        title   = ""
        text    = ""
        buttonText = "Get Advise"
        url     = "/"
        btnClass= "hide"
        />
        <ContactForm />
        <Footer />
        </>
    )
}

export default Contact;