import React from 'react'
import { PrivilegesContainer } from './styled';
import { useState } from 'react';

const Privileges = () => {
    const [activeFilterTab, setActiveFilterTab] = useState(1);
    return (
        <div>
            <PrivilegesContainer>
                <div>
                    <div className="filter_tabs_container">
                        <div className="filter_tabs_row">
                            {['BRONZE', 'SILVER', 'GOLD', 'ULTIMATE BLACK'].map((tier, index) => (
                                <div
                                    key={index}
                                    className={`filter_tab ${activeFilterTab === index + 1 ? "active" : ""}`}
                                    onClick={() => setActiveFilterTab(index + 1)}
                                >
                                    {tier}
                                    <span className="tier_icon">
                                        <img src={MEMBERSHIP_TIERS[index].icon} alt={tier} />
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="membership_display">
                        {MEMBERSHIP_TIERS
                            .filter((tier, index) => activeFilterTab === index + 1)
                            .map((tier) => (
                                <div key={tier.id} className="membership_card">
                                    {/* Welcome GN Coin */}
                                    <div className="benefit_section">
                                        <div className="benefit_header">
                                            <div className="benefit_icon">
                                                <img src="/images/vip-zone/Img - Welcome GN Coin Icon.svg" alt="Welcome GN Coin" />
                                            </div>
                                            <span className="benefit_title">Welcome GN Coin</span>
                                        </div>
                                        <div className="benefit_description">
                                            ได้รับ {tier.welcomeCoin} GN Coin เมื่อเปลี่ยนระดับสมาชิก
                                        </div>
                                    </div>

                                    {/* Benefits */}
                                    <div className="benefit_section">
                                        <div className="benefit_header">
                                            <div className="benefit_icon">
                                                <img src="/images/vip-zone/Img - Guarantee Weekly Coupon Icon.svg" alt="Weekly Coupon" />
                                            </div>
                                            <span className="benefit_title">การรับส่วนลดของส่วนลดทุกสัปดาห์</span>
                                        </div>
                                        {tier.benefits.map((benefit, index) => (
                                            <div key={index} className="benefit_item">
                                                {benefit.description}
                                            </div>
                                        ))}
                                    </div>

                                    {/* GN Coin Bonus */}
                                    <div className="benefit_section">
                                        <div className="benefit_header">
                                            <div className="benefit_icon">
                                                <img src="/images/vip-zone/Img - Additional GN Coins Icon.svg" alt="Additional GN Coins" />
                                            </div>
                                            <span className="benefit_title">รับ GN Coin เพิ่มทุกการใช้จ่าย</span>
                                        </div>
                                        <div className="benefit_description">
                                            รับเพิ่ม Coin {tier.coinBonus.value}% ทุกการใช้จ่ายสูงสุด {tier.coinBonus.max} บาท
                                        </div>
                                    </div>

                                    {/* Extra Benefit */}
                                    <div className="benefit_section">
                                        <div className="benefit_header">
                                            <div className="benefit_icon">
                                                <img src="/images/vip-zone/Img - Other Privilege Icon.svg" alt="Other Benefits" />
                                            </div>
                                            <div className='benefit_title_container'>
                                                <span className="benefit_title">สิทธิพิเศษอื่นๆ</span>
                                                <div className='follow_announcement'>ติดตามประกาศ</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </PrivilegesContainer>
        </div>
    )
}

const MEMBERSHIP_TIERS = [
    {
        id: 1,
        tier: 'BRONZE',
        icon: '/images/vip-zone/lock icon.svg',
        welcomeCoin: 500,
        benefits: [
            { type: 'discount', value: 10, min: 1000, description: 'ส่วนลด 10% สูงสุด 1000 บาท เมื่อซื้อผ่านแอปเกมออนไลน์' },
            { type: 'discount', value: 3, min: 1000, description: 'ส่วนลด 3% สูงสุด 1000 บาท ทุกช่องทางการชำระเงิน' }
        ],
        coinBonus: { value: 100, max: 100 },
    },
    {
        id: 2,
        tier: 'SILVER',
        icon: '/images/vip-zone/lock icon.svg',
        welcomeCoin: 25,
        benefits: [
            { type: 'discount', value: 9, min: 150, description: 'ส่วนลด 9% สูงสุด 150 บาทเมื่อซื้อผ่านแอปเกมออนไลน์' },
            { type: 'discount', value: 2, min: 150, description: 'ส่วนลด 2% สูงสุด 150 บาท ทุกช่องทางการชำระเงิน' }
        ],
        coinBonus: { value: 20, max: 100 },
    },
    {
        id: 3,
        tier: 'GOLD',
        icon: '/images/vip-zone/lock icon.svg',
        welcomeCoin: 50,
        benefits: [
            { type: 'discount', value: 10, min: 300, description: 'ส่วนลด 10% สูงสุด 300 บาท เมื่อซื้อผ่านแอปเกมออนไลน์' },
            { type: 'discount', value: 3, min: 300, description: 'ส่วนลด 3% สูงสุด 300 บาท ทุกช่องทางการชำระเงิน' }
        ],
        coinBonus: { value: 50, max: 100 },
    },
    {
        id: 4,
        tier: 'ULTIMATE BLACK',
        icon: '/images/vip-zone/lock icon.svg',
        welcomeCoin: 500,
        benefits: [
            { type: 'discount', value: 10, min: 1000, description: 'ส่วนลด 10% สูงสุด 1000 บาท เมื่อซื้อผ่านแอปเกมออนไลน์' },
            { type: 'discount', value: 3, min: 1000, description: 'ส่วนลด 3% สูงสุด 1000 บาท ทุกช่องทางการชำระเงิน' }
        ],
        coinBonus: { value: 100, max: 100 },
    }
];

export default Privileges