import React from "react";
import ServiceItem from "./ServicesItem";
import PriceItem from "./PriceItem";
import SolutionItem from "./SolutionItem";
import gear from '../images/controlpanel.png'

function Body() {


    return(
        <div className="row">
            <HeroSection />
            <ServicesRow />
            <PriceRow />
            <SolutionRow />
        </div>
    )
}


function HeroSection() {


    return(
        <div className="col-12">
            <div className="row d-flex align-items-center justify-content-center hero">
                <div className="col-6 text-center">
                    <h3>24/7 Real Person</h3>
                    <h2>Customer Support</h2>
                    <h3>For all our clients</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis dolorem voluptatibus dolor similique fugit iste. Quae impedit inventore itaque nisi, quis vel obcaecati ab dolorum nostrum ipsum modi. Officia, fuga?</p>
                    <button>Try Now</button>
                </div>
            </div>

        </div>
    )
}

function ServicesRow() {


    return(
        <div className="col-12 serviceRow">
            <div className="row">
                <ServiceItem media={gear} titleOne="Control" titleTwo="panel" ptag="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum magni illo minima." />
                <ServiceItem media="https://mvalenciaiii.github.io/airbox/media/multi-domain.png" titleOne="Multi-Domain" titleTwo="Hosting" ptag="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum magni illo minima."/>
                <ServiceItem media="https://mvalenciaiii.github.io/airbox/media/ftp.png" titleOne="FTP" titleTwo="Service" ptag="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum magni illo minima."/>
                <ServiceItem media="https://mvalenciaiii.github.io/airbox/media/direct.png" titleOne="Direct" titleTwo="Support" ptag="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum magni illo minima."/>

            </div>
        </div>
    )
}

function PriceRow() {

    return(
        <div className="col-12">
            <div className="row">
                <PriceItem titleHost="Mini Hosting" price="10.99" diskText={4} bandwidth={20} />
                <PriceItem titleHost="User Hosting" price="12.99" diskText={8} bandwidth={40} />
                <PriceItem titleHost=" Pro Hosting" price="16.99" diskText={10} bandwidth={60} />
                <PriceItem titleHost="Maxi Hosting" price="20.99" diskText={20} bandwidth={100} />

            </div>
        </div>
    )
}

const fakeData = [
    {
        title: "hosting",
        descOne: "SharedHosting",
        descTwo: "Shared Cloud Hosting",
        descThree: "Reseller Hosting"
    }
]


function SolutionRow() {

    const dataMap = fakeData.map(
        (currentItem) => {
            return <SolutionItem
            title={currentItem.title} 
            bulletOne={currentItem.descOne} bulletTwo={currentItem.descTwo} />
        }
    )

    return(
        <div className="col-12 solutionBackground">
            <div className="row">
                {/* <SolutionItem title="{currentItem.descOne}" bulletOne="{currentItem.descTwo}" bulletTwo="Shared Cloud Hosting" bulletThree="Reseller Hosting" text="" /> */}
                <SolutionItem title="Server Solutions" bulletOne="Dedicated Servers" bulletTwo="Dynamic Cloud Server" bulletThree="Virtual Servers" text="" />
                <SolutionItem title=" Email Solutions" bulletOne="Instant Mail" bulletTwo="1&1 MailXchange" bulletThree="Microsoft Exchange" text="" />
                <SolutionItem title="More Products" bulletOne="ListLocal" bulletTwo="Microsoft Sharepoint" bulletThree="eShops" text="" />
                {dataMap}
            </div>  
        </div>
    )
}


export default Body;