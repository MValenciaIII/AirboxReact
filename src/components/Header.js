import React from "react";


function Header() {


    return(
        <div className="row headerBackground py-4 align-items-center">
            <Logo />
            <NavBar />
        </div>
    )
}

function Logo() {

    return(
        <div className="col-6 logoCol ">
            <div className="row d-flex align-items-center">
                <div className="col-4">
                    <img className="img-fluid headerImg" src="https://mvalenciaiii.github.io/airbox/media/logo.png" alt="" />
                </div>
                <div className="col-8 ">
                    <div className="row airbox">
                        <div className="col-12 ">
                            <h3>airBOX</h3>
                        </div>
                    </div>
                    <div className="row hostingPro">
                        <div className="col-12">
                            <h4>Hosting Provider</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function NavBar() {


    return(
        <div className="col-6 d-flex justify-content-center">
            <ul className="list-group list-group-horizontal nav">
                <li className="me-3"><a href="#">Home</a></li>
                <li className="me-3"><a href="#">Web Hosting</a></li>
                <li className="me-3"><a href="#">Reseller Hosting</a></li>
                <li className="me-3"><a href="#">Services</a></li>
                <li className="me-3"><a href="#">Blog</a></li>
                <li className="me-3"><a href="#">Contact</a></li>
            </ul>
        </div>
    )
}

export default Header;