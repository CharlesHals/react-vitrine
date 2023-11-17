import React from 'react';
import Mouse from '../components/Mouse';
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';
import ContactForm from '../components/ContactForm';
import { CopyToClipboard } from "react-copy-to-clipboard"
import SocialNetwork from '../components/SocialNetwork';
import Buttons from '../components/Buttons';

const Contact = () => {
    return (
        <main>
            <Mouse />
            <div className="contact">
                <Navigation />
                <Logo />
                <ContactForm />
                <div className="contact-infos">
                    <div className="address">
                        <div className="content">
                            <h4>adresse</h4>
                            <p>12 Rue Laplace</p>
                            <p>64200 Biarritz</p>
                        </div>
                    </div>
                    <div className="phone">
                        <div className="content">
                            <h4>téléphone</h4>
                            <CopyToClipboard text="061454878" className="hover">
                                <p
                                    style={{ cursor: "pointer" }}
                                    className='clipboard'
                                    onClick={() => alert("Numéro de téléphone copié !")}
                                >
                                    06 14 54 87 88
                                </p>
                            </CopyToClipboard>
                        </div>
                    </div>
                    <div className="email">
                        <div className="content">
                            <h4>email</h4>
                            <CopyToClipboard text="fsagency@gmail.com" className="hover">
                                <p
                                    style={{ cursor: "pointer" }}
                                    className='clipboard'
                                    onClick={() => alert("email copié !")}
                                >
                                    fsagency@gmail.com
                                </p>
                            </CopyToClipboard>
                        </div>
                    </div>
                    <SocialNetwork />
                    <div className="credits">
                        <p>Charles Hals - 2023</p>
                    </div>
                </div>
                <Buttons left={"/projet-4"} />
            </div>
        </main>
    );
};

export default Contact;