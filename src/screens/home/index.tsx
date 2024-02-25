import React from "react";
import Contacts from "../../components/contacts/Contacts";
import Footer from "../../components/footer/Footer";
import Home from "../../components/home/Home";
import Nav from "../../components/nav/Nav";
import Services from "../../components/services/Services";

export const HomeScreen = () => {
    return (
        <>
            <Nav />
            <Home />
            <main>
                <Services />
                <Contacts />
            </main>
        </>
    );
}