import React, { useState } from 'react';
import './faqs.scss'


////////Already built a faq component before so i literally just copied and pasted

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const accordionItems = [
        {
            title: "I've never purchased an NFT before, tell me where to start?",
            content:
                "The first thing you should do is download MetaMask, a browser plugin that will act as your interface to the Ethereum Network. You'll also want some ETH, which can be purchased via a fiat on-ramp such as Coinbase or PayPal. From there, you'll send the ETH to your MetaMask address and will be able to use any DeFi service that connects to MetaMask!",
        },
        {
            title: 'How Many NFT can be Minted per person?',
            content: '20 NFTs per person',
        },
        {
            title: 'What is the NFT Token?',
            content: 'This DAPP is powered by Niyitoken(NTK).',
        },
        {
            title: "I'm worried about all the attention I will get with using DripMint!",
            content: 'Buckle in. Its only the beginning!!!.',
        },
    ];

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div id="section7" >
            <div className="section_seven_container">
                <h7>FAQ</h7>
            </div>
            <div className="accordion">
                {accordionItems.map((item, index) => (
                    <div key={index} className="accordion-item">
                        <div
                            className="accordion-title"
                            onClick={() => toggleAccordion(index)}
                        >
                            <span>{item.title}</span>
                            <span>{activeIndex === index ? '-' : '+'}</span>
                        </div>
                        <div
                            className={`accordion-content ${
                                activeIndex === index ? 'show' : ''
                            }`}
                        >
                            <p>{item.content}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;
