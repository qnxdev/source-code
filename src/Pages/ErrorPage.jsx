import React from 'react';
import Footer from "../Components/Header&Footer/Footer";
import Header from "../Components/Header&Footer/Header";

export default function ErrorPage() {
    
    return (
        <div className="ErrorPage">
            <Header data={{instanceID: "ErrorPage"}}/>
            <div className="ErrorContainer">
            <h1>! 404</h1>
            <h2>Page Not Found.</h2>
            </div>
            <Footer data={{instanceID: "ErrorPage"}}/>
            <style jsx>{`
                .ErrorPage {
                    text-align: center;
                }
                .ErrorContainer{
                    padding: 10vh 0;
                }
                .ErrorPage h2{
                    color: #89211e !important;
                    font-size: 2rem;
                    font-weight: 200;
                }
                .ErrorPage h1{
                    color: #89211e !important;
                    font-size: 5rem;
                }
            `}</style>
        </div>
    )
}