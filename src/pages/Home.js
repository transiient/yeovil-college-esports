import React, { useEffect, useLayoutEffect } from 'react';
import PT from 'prop-types';
import { Element, Link as SLink } from 'react-scroll';
import classnames from 'classnames';

import LinkButton from '../components/LinkButton';
import ImageCarousel from '../components/ImageCarousel';

import '../App.scss';
import cn from './Home.module.scss';

// Data
import SubjectUnits from '../data/subjectUnits.json';

// Images
import IMAGE_COURSE from '../assets/images/jefferson-santos-9SoCnyQmkzI-unsplash.jpg';
import IMAGE_SUBJECT from '../assets/images/florian-olivo-Mf23RF8xArY-unsplash.jpg';
import IMAGE_COLLEGE from '../assets/images/OCT-10-YCOLL-114-1024x683.jpg';
// -- Deck
import IMAGE_DECK_01 from '../assets/images/two-white-hyperx-ram-stick-2582928.jpg';
import IMAGE_DECK_02 from '../assets/images/two-white-hyperx-ram-stick-2582928.jpg';
import IMAGE_DECK_03 from '../assets/images/two-white-hyperx-ram-stick-2582928.jpg';
import IMAGE_DECK_04 from '../assets/images/two-white-hyperx-ram-stick-2582928.jpg';
import IMAGE_DECK_05 from '../assets/images/two-white-hyperx-ram-stick-2582928.jpg';
import IMAGE_DECK_06 from '../assets/images/two-white-hyperx-ram-stick-2582928.jpg';

function elementEntryEdge(el) {
    var rect = el.getBoundingClientRect();

    console.log(
        rect.top,
        rect.right,
        rect.bottom,
        rect.left
    );

    if (rect.top >= 0 && rect.top < rect.bottom)
        return "top";
    else if (rect.top >= 0 && rect.top > rect.bottom)
        return "bottom";
    else
        return false;
}

function ScrollIndicator() {
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

// todo: separate file
function SubjectTile(props) {
    const propTypes = {
        colour: PT.string.isRequired,
        heading: PT.string.isRequired,
        description: PT.string.isRequired,
        relevantUnits: PT.arrayOf(PT.string)
    };

    const getColour = (colourProp) => {
        //? The weird regex just capitalizes the first letter of colourProp
        return cn["fru" + colourProp.replace(/^\w/, c => c.toUpperCase())];
    };

    return (
        <li className={classnames(cn.subjectTile, getColour(props.colour))}><div className={cn.fruContainer}>
            <div className={cn.fruInterest}>
                <h4>
                    {props.heading}
                </h4>
                <p>
                    {props.description}
                </p>
            </div>
            <div className={cn.fruUnits}>
                <h4>
                    Relevant Units
                </h4>
                <ul>
                    {
                        props.relevantUnits.map(unitName => <li key={unitName}><p>{unitName}</p></li>)
                    }
                </ul>
            </div>
        </div></li>
    );
}

export default function Home() {
    useEffect(() => {
        function toPx(n) {
            return `${n}px`;
        }

        function handleScrollIndicator(e) {
            if (window.scrollY > 64) {
                document.getElementById('scroll-indicator')
                    .classList.add(cn.hidden);
            } else {
                document.getElementById('scroll-indicator')
                    .classList.remove(cn.hidden);
            }
        }

        // function handleScrollDeltaAnimation(e) {
        //     const els = Array.from(document.getElementsByClassName(cn.heroImageWrapper));

        //     els.forEach(el => {
        //         const st = el.offsetTop - window.scrollY;
        //         const c = 64;
        //         const d = -40;

        //         //? ignore "style does not exist". It does exist.
        //         if (st > 0) {
        //             el.style.marginTop = toPx(-(c / st) * d);
        //             el.style.marginBottom = toPx((c / st) * d);
        //         }
        //     });
        // }

        function handleScroll(e) {
            handleScrollIndicator(e);
            // handleScrollDeltaAnimation(e);
        }

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []); // [] = run once on load

    return (
        <div className="page pageHome">
            <Element id="section-home" name="section-home">
                <div className={cn.IMGbg1}><div className={classnames(cn.landingWrapper, cn.bgOverlayBlack)}>
                    <div className={cn.landingContent}>
                        <h1>Esports at Yeovil College</h1>
                        <h3>Enrol Now to Study from September 2020</h3>

                        <LinkButton
                            classNames={cn.linkButton}
                            newtab
                            href="http://yeovil.ac.uk/our-courses/?coursess=esports"
                            colour="blue">
                            Enrol Now
                        </LinkButton>
                    </div>

                    <ScrollIndicator />
                </div></div>
            </Element>

            <Element id="section-course" name="section-course">
                <div className={classnames(cn.heroWrapper, cn.heroImageLeft)}><div className={cn.heroContainer}>
                    <div className={cn.heroImageWrapper}>
                        <img
                            src={IMAGE_COURSE}
                            alt="People looking cheerful while examining work on a desk" />

                        <LinkButton
                            classNames={cn.linkButton}
                            newtab
                            href="http://yeovil.ac.uk/our-courses/?coursess=esports"
                            colour="blue">
                            Enrol - Save your place
                        </LinkButton>
                    </div>

                    <div className={cn.sectionHeader}>
                        <h2>The Course</h2>
                        <p className="extraLineSpacing">
                            Explore coaching, health and psychology, video production, and live broadcasting in the Esports BTEC National at <b className="blue">Yeovil&nbsp;College</b>. {/* todo: multi-line */}
                        </p>
                    </div>

                    <div className={cn.contentWrapper}>
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
            </Element>

            <Element id="section-subject" name="section-subject">
                <div className={classnames(cn.heroWrapper, cn.heroImageRight, cn.heroDark)}><div className={classnames(cn.heroContainer, cn.noBottomPadding)}>
                    <div className={cn.heroImageWrapper}>
                        <img src={IMAGE_SUBJECT} alt="People looking cheerful while examining work on a desk" />
                    </div>

                    <div className={cn.sectionHeader}>
                        <h2>The Subject</h2>
                        <p className="extraLineSpacing">
                            Esports isn't just about gaming - it's the passion and work behind the teams. The business and technological skills empowering those behind the keyboard.
                        </p>
                    </div>

                    <div className={cn.contentWrapper}>
                        <p>
                            See what's involved in Esports below. Hover or tap to see relevant course units.
                        </p>

                        <ul className={cn.flexRelevantUnits}>
                            {SubjectUnits.map(unit => <SubjectTile key={unit.heading} {...unit} />)}
                        </ul>
                    </div>
                </div></div>
            </Element>

            <Element id="section-deck" name="section-deck">
                <div className={cn.IMGbg2}><div className={classnames(cn.sectionWrapper, cn.bgOverlayBlack)}><div className={cn.sectionContainer}>
                    <div className={cn.sectionHeader}>
                        <h2 className="teal">The Deck</h2>
                        <h3>A state-of-the-art computer suite for students</h3>
                    </div>

                    <div className={classnames(cn.contentWrapper, cn.noTopMargin)}>
                        <div className={cn.imageContainer}>
                            <ImageCarousel
                                classNames={cn.imageCarousel}
                                images={[
                                    { source: IMAGE_DECK_01, altText: "a" },
                                    { source: IMAGE_DECK_02, altText: "b" },
                                    { source: IMAGE_DECK_03, altText: "c" },
                                    { source: IMAGE_DECK_04, altText: "d" },
                                    { source: IMAGE_DECK_05, altText: "e" },
                                    { source: IMAGE_DECK_06, altText: "f" }
                                ]}
                            />
                        </div>

                        <p className="white">
                            Our brand-new computer lab, <b className="teal">The Deck</b>, is host to 12 state-of-the-art computer systems, specifically built for developing and playing games
                        </p>

                        <LinkButton
                            classNames={cn.linkButton}
                            newtab
                            href="https://www.yeovil.ac.uk/student-life/your-space/"
                            colour="blue">
                            Explore our Campus
                        </LinkButton>
                    </div>
                </div></div></div>
            </Element>

            <Element id="section-college" name="section-college">
                <div className={classnames(cn.sectionWrapper)}><div className={cn.sectionContainer}>
                    <div className={cn.sectionHeader}>
                        <h2>The College</h2>
                        <h3>Helping young people achieve their potential</h3>
                    </div>

                    <div className={classnames(cn.contentWrapper, cn.noTopMargin)}>
                        <div className={cn.imageContainer}>
                            <img src={IMAGE_COLLEGE} alt="Yeovil College main reception" />
                        </div>

                        <p>
                            We offer a <b className="blue">digital-first approach</b> to learning, making our college the best option for the BTEC National in Esports. An advanced computer lab, various campus facilities, and opportunities for extra-curricular learning allow all students to achieve their potential and succeed in their future career.
                        </p>

                        <LinkButton classNames={cn.linkButton} newtab href="https://www.yeovil.ac.uk/student-life/your-space/" colour="blue">Why Yeovil College?</LinkButton>
                    </div>
                </div></div>
            </Element>

            <Element id="section-enrol" name="section-enrol">
                <div className={cn.IMGbg3}><div className={classnames(cn.sectionWrapper, cn.bgOverlayBlue)}><div className={cn.sectionContainer}>
                    <div className={cn.sectionHeader}>
                        <h2 className="white">Ready?</h2>
                        <p className="grey extraLineSpacing">Think you’ve got what it takes? We’d love to have you.</p>
                    </div>

                    <div className={classnames(cn.contentWrapper, cn.noTopMargin)}>
                        <p className="white">
                            Become a coach or wellbeing specialist and guide a team to victory, or shape a team into a business with your analysis and entrepreneurship skills. Find out more about the course or enrol now.
                        </p>

                        <div className={cn.buttonContainer}>
                            <LinkButton
                                classNames={classnames(cn.linkButton, "colourWhite")}
                                newtab
                                href="https://www.yeovil.ac.uk/student-life/your-space/"
                                colour="white">
                                Enrol Now
                            </LinkButton>
                            <LinkButton
                                classNames={classnames(cn.linkButton, "colourWhite")}
                                newtab
                                href="https://www.yeovil.ac.uk/student-life/your-space/"
                                colour="white">
                                More Info
                            </LinkButton>
                        </div>
                    </div>
                </div></div></div>
            </Element>
        </div>
    );
}
