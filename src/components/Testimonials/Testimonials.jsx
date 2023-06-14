//Testimonials.jsx

import React, { useEffect, useState } from 'react';
import Fact from '../Fact/Fact';
import styles from "./Testimonials.module.css";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import angshuman from "./../../assets/testimonial/angshuman-bhattacharjee.jpg"
import ankita from "./../../assets/testimonial/ankita-thakur.jpg"
import dipali from "./../../assets/testimonial/dipali.jpg"
import hemanath from "./../../assets/testimonial/hemanath.jpg"
import shahin from "./../../assets/testimonial/mohammad-shahin.jpg"
import nitin from "./../../assets/testimonial/nitin-dhankani.jpg"
import payal from "./../../assets/testimonial/payal-jain.jpg"
import rohit from "./../../assets/testimonial/rohit.jpg"
import sangeeta from "./../../assets/testimonial/sangeeta-waskar.jpg"
import shweta from "./../../assets/testimonial/shweta-bhatia.jpg"
import sunil from "./../../assets/testimonial/sunil-chugh.jpg"
import fourStar from "./../../assets/icons/4.5-star.png"
import fiveStar from "./../../assets/icons/5-star.png"
import harish from "./../../assets/testimonial/harish.jpeg"
import sakti from "./../../assets/testimonial/sakti.jpeg"
import vinod from "./../../assets/testimonial/vinod.jpeg"
import anil from "./../../assets/testimonial/anil.jpeg"
import imad from "./../../assets/testimonial/imad.jpeg"
import venkatesh from "./../../assets/testimonial/venkatesh.jpeg"
import madhu from "./../../assets/testimonial/madhu.jpeg"
import avinash from "./../../assets/testimonial/avinash.jpeg"
import ambedkar from "./../../assets/testimonial/ambedkar.jpeg"
import preeti from "./../../assets/testimonial/preeti.jpeg"
import 'animate.css'
import { Testimonial } from '../Testimonial/Testimonial';
import quote from './../../assets/quote.png'
import Facts from '../Facts/Facts';

const Testimonials = () => {
    const reviews = [
        {
            id: 1,
            name: "Ankita Thakur",
            image: ankita,
            location: "Pune",
            description: "Attending the Future & Options trading event of Growcial Bulls Academy was an excellent decision for me  .<br /> The event provided a comprehensive overview of trading strategies and techniques specific to futures and options markets. The speaker, Mr. Vikas Chaudhary was knowledgeable and engaging, and I was able to gain valuable insights into the markets and trading strategies. I left the event feeling more confident in my ability to navigate these markets and make informed trading decisions. Overall, I highly recommend this event to anyone looking to improve their understanding of futures and options trading.",
            rating: fiveStar
        },
        {
            id: 2,
            name: "Payal Jain",
            image: payal,
            location: "Kolhapur",
            description: "Generally I never give reviews good or bad until n unless I see significant effort taken by the trainer n making impact on my profits. <br /> Vikkash Sir's Time Cycle is totally new concept,n to my surprise I started making profits from very first day..As I'm a working woman I cannot sit before the screen all time,n Vikkash Sir's Time Cycle theory is awesome n helpful as it provides accurate time when to enter in market which helps in making consistent profits.. Thanku Sir ..",
            rating: fourStar
        },
        {
            id: 3,
            name: "Sunil Chugh",
            image: sunil,
            location: 'Chandigarh',
            description: "Its was great learning and specially its totally a new concept which normally traders don't look at the other axis of the chart i.e time. <br /> Great and Superb👍",
            rating: fiveStar
        },
        {
            id: 4,
            name: "Sangita Waskar",
            image: sangeeta,
            location: "Pune",
            description: "It's been always cheerful and enriched experience whenever I interact with you about the market strategies. Your valuable suggestions  always helped newcomer like me to learn many things in share trading like times cycle, Gyan levels, daily analysis, so also your technical support in all issues.<br /> Thanks for sharing and encouraging me to gain knowledge in trading 👍",
            rating: fourStar
        },
        {
            id: 5,
            name: "Mohammad Shahin",
            image: shahin,
            location: "Bangalore",
            description: "1. provide Accurate levels and trend time cycles  2. Good mentorship program  3. some thing different from other mentors.<br />",
            rating: fiveStar
        },
        {
            id: 6,
            name: "Dipali",
            image: dipali,
            location: "Jaipur",
            description: "I am blessed to have u as my mentor you always guide me in right directions your time cycle strategy helped me in alot and its something new which no one will tech us.. you are always there to teach us on one one basis this is something that everyone need ..<br /> Thanks for always giving me your support nd encouraging me that i can do it. ",
            rating: fourStar
        },
        {
            id: 7,
            name: "Shweta Bhatia",
            image: shweta,
            location: "Kanpur",
            description: "I enrolled myself into the Growcial course and till now this is the best course for Stock Market. I had tried many other courses but this course helped me to technically analyse the data and charts.<br /> Along with that, the live sessions were awesome and it even helped me to easily understand the various concepts of the Stock market which should be known. It even helped me analyse my results and the practice sessions were a lot helpful. Now I have started my Stock market journey yet again but this time with a lot of knowledge which will help me in right trading. There were many courses which I tried earlier but they focused just on learning. This course is a lot different as it focused on analysis and practical data through which I was able to analyse the results. If you want to start with the Stock Market, I would strongly recommend this course to you.",
            rating: fiveStar
        },
        {
            id: 8,
            name: "Nitin Dhankani",
            image: nitin,
            location: "Mumbai",
            description: "Thank you so much sir for making my trading journey easy and joyful And just because of you we can take out the levels r&s and make good profit. <br /> Love to work with you . Thank you so much for being my teacher",
            rating: fourStar
        },
        {
            id: 9,
            name: "Hemanth",
            image: hemanath,
            location: "Karnataka",
            description: "You are a true mentor sir. You always hold my hand and always tells me to contact whenever I have a doubt, even in the live market. There are many mentors i have seen, who just care about money and once the money is credited, they don't even care about the person. You stand away from them and you are a very good person with high level of patience and a responsible one. You give your best and support all the time, irrespective of the fee.<br /> Im happy to be met a true mentor( you ) and i feel anyone can excel in their lives, if he/she finds a mentor like you.",
            rating: fiveStar
        },
        {
            id: 10,
            image: angshuman,
            name: "Angshuman Bhattacharjee",
            location: "West Bengal",
            description: "Growciallbull really helped me grow. My old biases about the markets were changed. I found a new way to play directional strategies. Never knew technicals+Gann would yield such great results. The accuracy is great. <br /> Thank you Vikash Bhai. 🙏",
            rating: fourStar
        },
        {
            id: 11,
            name: "Rohit",
            image: rohit,
            location: "Delhi",
            description: "Thank you sir for giving best knowledge of stock Market by time cycle concept by value of time getting result some topic in courses are rarely may seen or may not be  in any courses. <br /> thanks for giving valuable knowledge and support like a big bro",
            rating: fiveStar
        },
        {
            id: 12,
            name: "harish",
            image: harish,
            location: "Bangalore",
            description: "Excellent Growcialbull Academy Thanks to Vikash, who is always there to answer any questions I have and who trains me from the ground up to an expert level.<br /> I am learning these concepts and becoming a better trader",
            rating: fiveStar
        },
        {
            id: 13,
            name: "Shakti Patel",
            image: sakti,
            location: "Pune",
            description: "FNO Strategies in Stocks Consistent 5% to 20% ROI per month I am BLESSED to meet Vikas Chaudhary in my LIFE journey.<br /> He has rewired me, enabling me to be a consistent and disciplined professional trader",
            rating: fiveStar
        },
        {
            id: 14,
            name: "Vinod Kumar",
            image: vinod,
            location: "Mumbai",
            description: "Vikash Chaudhary sir has change my thinking of trading and increase level of trading in option specially in bank nifty. I m continue learning from him since one year I stopped doing losses after joining him .<br />Thank you sir for all you teach me in a best way ",
            rating: fiveStar
        },
        {
            id: 15,
            name: "Anil Kumar",
            image: anil,
            location: "Hyderabad",
            description: " I am very glad to say that this course provides me a good platform to work in stock market as a trader by providing good knowledge in time cycle analysis,<br /> vikas chaudary live  updates are very helpful while trading.",
            rating: fiveStar
        },
        {
            id: 16,
            name: "Imad Sheikh",
            image: imad,
            location: "Gujrat",
            description: "Growcial bull academy was an excellent 👍 decision for me It proved to be life changing for me, I am very happy that I am also a member of Growcial Bull.<br /> ",
            rating: fiveStar
        },
        {
            id: 17,
            name: "Venkatesh Sanaboyana",
            image: venkatesh,
            location: "Karnataka",
            description: "In my 4 years of trading journey with many mentors I m never been confident and consistent until i joined the alpha plan of growcial bull academy  Mainly the mentor vi kash chaudhary sir  he is supportive and his knowledge in stock market and his teachings makes us a simple view on stock market trading with marking of important time zones with his date cycle functions .<br /> Definitely any one who is willing to have a keen career on stock market I recommend to take support from sir Because this changed my view on trading and my trading life style ",
            rating: fiveStar
        },
        {
            id: 18,
            name: "Madhu Arveti",
            image: madhu,
            location: "Andhra Pradesh",
            description: "I iam madhu.arveti i am from Andhra Pradesh i am working in  Growcial bull past one & half month it's a good platform and good strategy to earn money this is a best platform when I am working with this strategy's every time i earned money here. <br /> tq vikas bhai for giving good platform with best strategy thanks alot👏 ",
            rating: fiveStar
        }
        , {
            id: 19,
            name: "Avinash Tanwar",
            image: avinash,
            location: "Delhi",
            description: "Nice content and good teacher. I have learned so much about Trading . And here u get different knowledge from others in trading market . <br />It's a great journey for me .🙌🏻 ",
            rating: fiveStar
        }
        , {
            id: 20,
            name: "Ambedkar Yeleti ",
            image: ambedkar,
            location: "Andhra Pradesh",
            description: "Ambedkar Yeleti is my name from Andhra Pradesh, and I lost a lot of money in the stock market (without realizing it, I had provided my credentials to someone else, and within a day, I had lost 8 lakh). At precisely that moment, Mr. Vikas from Growcial introduced himself and advised me on what to do and what not to do in the stock market. He suggested that I watch the stock market for at least a month after finishing the classes and then try to enter it with a very small investment. He advised me to start trading with a some quantity of money and my own experience without depending on anyone else.<br /> Strive to position yourself as a buyer and keep a close eye on the market every day.Thank you, vikas from Growcial, for sharing your knowledge of the trade market with me. ",
            rating: fiveStar
        }
        , {
            id: 21,
            name: "Preeti Mahto",
            image: preeti,
            location: "Delhi",
            description: "Growcial Bull is very good platform for beginners. The mentor Vikash Chaudhary is professional He explain each and every thing in a simple way. This course provides market strategies and technics for future and option market. They provides all the market details, with accurate levels and trend time cycle in live broadcast on daily basis. Their time cycle concept is very unique.  Thanku so much for giving valuable  knowledge of Stock market  By Time Cycle Concept. ",
            rating: fiveStar
        }

    ]

    const [full, setFull] = useState(false);

    // const showFull = () => {
    //     setFull(true)
    // }

    // const description = showFull ? 

    return (
        <div className='bg-transparent bg-[length:140%] lg:bg-[length:74%] xl:bg-[length:53%]' id={styles.container}>
            <Facts />

            <div className='relative' id="testimonials">
                <img src={quote} className='absolute top-[50%] bottom-0 m-auto h-[63px] left-[15%] invisible lg:visible' alt="" />
                <div id={`${styles.testimonials}`} className='pt-[68px] testimonial lg:px-[260px] bg-[length:90%] bg-[center_2rem] lg:bg-[center_top] lg:bg-[length:32%]'>
                    <h1 className='text-[22px] lg:text-[40px] font-bold text-center text-[#8383FF] drop-shadow-[0_0_6px] uppercase'>Testimonials</h1>


                    <OwlCarousel className='owl-theme z-0' dots={false} nav loop items={1} animateIn="animate__animated animate__bounceInRight" animateOut="animate__animated animate__slideOutLeft" autoplay>
                        {reviews.map(item => <Testimonial key={item.id} item={item} />)}
                    </OwlCarousel>
                </div>
                <img src={quote} className='absolute top-[10%] bottom-0 m-auto h-[63px] right-[15%] rotate-180 invisible lg:visible' alt="" />
            </div>
        </div >
    );
};

export default Testimonials;

