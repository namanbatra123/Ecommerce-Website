import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Banner() {
    return (
        <div className="relative">
            <Carousel
                autoPlay
                infiniteLoop
                showStatus={false}
                showIndicators={false}
                showThumbs={false}
                interval={9000}
            >
                <div>
                    <img loading="lazy" src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Coupons/Carnival_Sep23/GW/D94404715_pc_tall_Hero_3000x1200._CB596414900_.jpg" alt="" />
                </div>
                <div>
                    <img loading="lazy" src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/tiyesum/Honor90/GW/14updated/D94283131_Tall_Hero_3000x1200._CB577823303_.jpg" alt="" />
                </div>
                <div>
                    <img loading="lazy" src="https://m.media-amazon.com/images/I/61513JknSNL._SX3000_.jpg" alt="" />
                </div>
                <div>
                    <img loading="lazy" src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Wireless/OnePlus/Nord/GW/NordCE3_Ziti/Sept5/D90458496_WLD_OnePlus_Ziti_NewLaunch_Tall_hero_3000x1200._CB596097923_.jpg" alt="" />
                </div>
                <div>
                    <img loading="lazy" src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/AmazonPay/Travel/MonsoonOffers/PC_Hero_3000x1200_BAU._CB577990361_.jpg" alt="" />
                </div>
            </Carousel>

            <div className="absolute w-full  h-36 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-10 " />

        </div>
    )
}

export default Banner