import React, { useEffect } from 'react';
import { Element, Link as SLink } from 'react-scroll';
import ImageCarousel from '../components/ImageCarousel';
import classnames from 'classnames';

import LinkButton from '../components/LinkButton';

import '../App.scss';
import cn from './Home.module.scss';

// Images
import IMAGE_COURSE from '../assets/images/jefferson-santos-9SoCnyQmkzI-unsplash.jpg';
import IMAGE_SUBJECT from '../assets/images/florian-olivo-Mf23RF8xArY-unsplash.jpg';
// -- Deck
import IMAGE_DECK_01 from '../assets/images/two-white-hyperx-ram-stick-2582928.jpg';
import IMAGE_DECK_02 from '../assets/images/constant-loubier-7lzIyp2Ork4-unsplash.jpg';
import IMAGE_DECK_03 from '../assets/images/two-white-hyperx-ram-stick-2582928.jpg';
import IMAGE_DECK_04 from '../assets/images/constant-loubier-7lzIyp2Ork4-unsplash.jpg';
import IMAGE_DECK_05 from '../assets/images/two-white-hyperx-ram-stick-2582928.jpg';
import IMAGE_DECK_06 from '../assets/images/constant-loubier-7lzIyp2Ork4-unsplash.jpg';


function ScrollIndicator(props) {
    return (
        <div className={cn.scrollIndicator} id="scroll-indicator">
            <SLink
                to={"section-course"}
                spy={true}
                smooth={true}
                offset={-128}
                duration={600}>
                <i className="material-icons">arrow_downward</i>
            </SLink>
        </div>
    );
}

export default function Home(props) {
    useEffect(() => {
        function handleScroll(e) {
            if (window.scrollY > 64) {
                document.getElementById('scroll-indicator')
                    .classList.add(cn.hidden);
            } else {
                document.getElementById('scroll-indicator')
                    .classList.remove(cn.hidden);
            }
        }

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="page pageHome">
            <Element id="section-home" name="section-home"><div className="sectionHome">
                <div className={cn.IMGbg1}><div className={classnames(cn.fullpage, cn.fullpagePadBottom, cn.bgOverlayBlack)}>
                    <div className={cn.containerCenter}>
                        <h1>eSports at Yeovil College</h1>
                        <h3>Enrol Now - Study begins September 2020</h3>

                        <LinkButton className={cn.linkButton} type="external" newtab href="http://yeovil.ac.uk/our-courses/?coursess=esports" colour="blue">Enrol Now</LinkButton>
                    </div>

                    <ScrollIndicator />
                </div></div>
            </div></Element>

            <Element id="section-course" name="section-course"><div className="sectionCourse">
                <div className={classnames(cn.hero, cn.heroImageLeft)}><div className={cn.heroInnerWrapper}>
                    <div className={classnames(cn.heroImage, cn.heroImageWithButton)}>
                        <img src={IMAGE_COURSE} alt="People looking cheerful while examining work on a desk" />

                        <LinkButton className={classnames(cn.linkButton, cn.linkButtonExpandsOverImage)}
                            type="external"
                            newtab
                            href="http://yeovil.ac.uk/our-courses/?coursess=esports"
                            colour="blue">
                            Enrol - Save your place
                        </LinkButton>
                    </div>

                    <div className={cn.sectionHeader}>
                        <h2>The Course</h2>
                        <p className="extraLineSpacing">
                            Explore coaching, health and psychology, video production, and live broadcasting in the eSports BTEC National at <b className="blue">Yeovil&nbsp;College</b>. {/* todo: multi-line */}
                        </p>
                    </div>

                    <div className={cn.heroContentWrapper}>
                        <p>
                            The course includes a wide range of Esports units, spanning from enterprise and entrepreneurship, to video production and games design. Here’s some of the units you could explore on this course.
                        </p>

                        <ul className={cn.listGrid}>
                            <li>Video production</li>
                            <li>Livestreaming and broadcasting</li>
                            <li>Skills, strategies and analytics</li>
                            <li>Esports coaching</li>
                            <li>Esports enterprise and entrepreneurship</li>
                            <li>Health and wellbeing</li>
                            <li>Games design</li>
                            <li>Computer networking</li>
                        </ul>
                    </div>
                </div></div>
            </div></Element>

            <Element id="section-subject" name="section-subject"><div className="sectionSubject">
                <div className={classnames(cn.hero, cn.heroImageRight, cn.heroBlack)}><div className={cn.heroInnerWrapper}>
                    <div className={classnames(cn.heroImage)}>
                        <img src={IMAGE_SUBJECT} alt="People looking cheerful while examining work on a desk" />
                    </div>

                    <div className={cn.sectionHeader}>
                        <h2>The Subject</h2>
                        <p className="extraLineSpacing">
                            Esports isn't just about gaming - it's the passion and work behind the teams. The business and technological skills empowering those behind the keyboard.
                        </p>
                    </div>

                    <div className={cn.heroContentWrapper}>
                        <p>
                            See what's involved in Esports below. Hover or tap to see relevant course units.
                        </p>

                        <ul className={cn.flexRelevantUnits}>
                            <li className={cn.fruGreen}>
                                <h4 className={cn.fruInterest}>Strategy</h4>
                                <p className={cn.fruInterest}>
                                    Various gaming and coaching strategies will take your team to the finals, securing your victory
                                </p>
                                <h4 className={cn.fruUnits}>Relevant Units</h4>
                                <ul className={cn.fruUnits}>
                                    <li>Unit One</li>
                                    <li>Unit Two Longer Name</li>
                                </ul>
                            </li>
                            <li className={cn.fruLilac}>
                                <h4 className={cn.fruInterest}>Tactics</h4>
                                <p className={cn.fruInterest}>
                                    Great leadership and support skills will pin your team to the top of the leaderboard and make you undefeatable
                                </p>
                                <h4 className={cn.fruUnits}>Relevant Units</h4>
                                <ul className={cn.fruUnits}>
                                    <li>Unit One</li>
                                    <li>Unit Two Longer Name</li>
                                </ul>
                            </li>
                            <li className={cn.fruOrange}>
                                <h4 className={cn.fruInterest}>Considerations</h4>
                                <p className={cn.fruInterest}>
                                    Learning what game designers consider when creating games can encourage you to think out-of-the-box during play
                                </p>
                                <h4 className={cn.fruUnits}>Relevant Units</h4>
                                <ul className={cn.fruUnits}>
                                    <li>Unit One</li>
                                    <li>Unit Two Longer Name</li>
                                </ul>
                            </li>
                            <li className={cn.fruBlue}>
                                <h4 className={cn.fruInterest}>Production</h4>
                                <p className={cn.fruInterest}>
                                    Video production, livestreaming, and other media production skills will enable you to stand out in the modern world
                                </p>
                                <h4 className={cn.fruUnits}>Relevant Units</h4>
                                <ul className={cn.fruUnits}>
                                    <li>Unit One</li>
                                    <li>Unit Two Longer Name</li>
                                </ul>
                            </li>
                            <li className={cn.fruBrown}>
                                <h4 className={cn.fruInterest}>Business</h4>
                                <p className={cn.fruInterest}>
                                    Your business and entrepreneurship skills will allow you to create a profitable business out of your team
                                </p>
                                <h4 className={cn.fruUnits}>Relevant Units</h4>
                                <ul className={cn.fruUnits}>
                                    <li>Unit One</li>
                                    <li>Unit Two Longer Name</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div></div>
            </div></Element>

            <Element id="section-deck" name="section-deck"><div className="sectionDeck">
                <div className={cn.IMGbg2}><div className={classnames(cn.fullpage, cn.stretchy, cn.bgOverlayBlack)}>
                    <div className={cn.sectionHeader}>
                        <h2 className="teal">The Deck</h2>
                        <h3>A state-of-the-art computer suite for students</h3>
                    </div>

                    <div className={cn.contentWrapper}>
                        <ImageCarousel
                            cssClass={cn.imageCarouselWrapper}
                            images={[
                                { source: IMAGE_DECK_01, altText: "a" },
                                { source: IMAGE_DECK_02, altText: "b" },
                                { source: IMAGE_DECK_03, altText: "c" },
                                { source: IMAGE_DECK_04, altText: "d" },
                                { source: IMAGE_DECK_05, altText: "e" },
                                { source: IMAGE_DECK_06, altText: "f" }
                            ]}
                        />

                        <p>
                            Our brand-new computer lab, <b className="teal">The Deck</b>, is host to 12 state-of-the-art computer systems, specifically built for developing and playing games
                        </p>

                        <LinkButton className={cn.linkButton} type="external" newtab href="https://www.yeovil.ac.uk/student-life/your-space/" colour="blue">Explore our Campus</LinkButton>
                    </div>
                </div></div>
            </div></Element>

            <Element id="section-college" name="section-college"><div className="sectionCollege">
                <div className={classnames(cn.hero, cn.heroImageCenter)}>
                    <div className={cn.sectionHeader}>
                        <h2>The College</h2>
                        <h3>Helping young people achieve their potential</h3>
                    </div>

                    <div className={cn.heroContentWrapper}>
                        {/* Image */}

                        <p>
                            We offer a <b className="blue">digital-first approach</b> to learning, making our college the best option for the BTEC National in Esports. An advanced computer lab, various campus facilities, and opportunities for extra-curricular learning allow all students to achieve their potential and succeed in their future career.
                        </p>

                        <LinkButton className={cn.linkButton} type="external" newtab href="https://www.yeovil.ac.uk/student-life/your-space/" colour="blue">Why Yeovil College?</LinkButton>
                    </div>
                </div>
            </div></Element>

            <Element id="section-enrol" name="section-enrol"><div className="sectionEnrol">
                <div className={cn.IMGbg3}><div className={classnames(cn.hero, cn.heroImageBackground, cn.textWhite, cn.bgOverlayBlue)}>
                    <div className={cn.sectionHeader}>
                        <h2>Ready?</h2>
                    </div>

                    <div className={classnames(cn.heroContentWrapper, cn.noTopMargin)}>
                        <p>
                            Think you’ve got what it takes? We’d love to have you. Become a coach or wellbeing specialist and guide a team to victory, or shape a team into a business with your analysis and entrepreneurship skills. Find out more about the course or enrol now.
                        </p>

                        <div className={cn.buttons}>
                            <LinkButton className={classnames(cn.linkButton, "colourWhite")} type="external" newtab href="https://www.yeovil.ac.uk/student-life/your-space/" colour="white">Enrol Now</LinkButton>
                            <LinkButton className={classnames(cn.linkButton, "colourWhite")} type="external" newtab href="https://www.yeovil.ac.uk/student-life/your-space/" colour="white">More Info</LinkButton>
                        </div>
                    </div>
                </div></div>
            </div></Element>
        </div>
    );
}
