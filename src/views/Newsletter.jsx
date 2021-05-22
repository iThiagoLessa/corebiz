import React from "react";

const Newsletter = props => {
    return(
        <section className="newsletter-area">
            <header>
                <h2>Participe de nossas news com promoções e novidades!</h2>
            </header>
            <form>
                <input type="text" name="name" placeholder="Digite seu nome" required />
                <input type="email" name="email" placeholder="Digite seu email" required />
                <button>Eu quero!</button>
            </form>
        </section>
    )
}

export default Newsletter;