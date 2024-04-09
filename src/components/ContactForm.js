import "./ContactFormStyles.css";

function ContactForm(){
    return(
        <div className="form-container">
            <h1>DROP A MESSAGE TO US!</h1>
            <form>
                <input placeholder="Your Name"/>
                <input placeholder="E-Mail Address"/>
                <input placeholder="Subject"/>
                <textarea placeholder="Add the Message Here!" rows={4}></textarea>
                <button>SEND YOUR MESSAGE</button>

            </form> 
        </div>
    )
}
export default ContactForm;