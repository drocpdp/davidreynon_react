import React from "react";
import './project-cards.styles.scss';

import image1 from '../../assets/pytwitserviceImage.jpg';

const ProjectCards = () => {
    return (

        <div class="project-cards">
            <div class="project-card">
                <div class="project-title">Project 1</div>
                <div class="project-image">
                    <img class="project-cards-image" src={image1} alt="not found image" />
                </div>
                <div class="project-short-description">
                    A Python Bot/Service. Programatically scan Twitter feed. Custom search, alerts, automatic Retweet.
                </div>
                ---
                <div class="project-keywords">
                    Python3, Twitter, Tweepy, Amazon AWS, Jenkins
                </div>
                <br/>
            </div>
            <div class="project-card">
                <div class="project-title">Project 1</div>
                <div class="project-image">
                    <img class="project-cards-image" src={image1} alt="not found image" />
                </div>
                <div class="project-short-description">
                    A Python Bot/Service. Programatically scan Twitter feed. Custom search, alerts, automatic Retweet.
                </div>
                ---
                <div class="project-keywords">
                    Python3, Twitter, Tweepy, Amazon AWS, Jenkins
                </div>
                <br/>
            </div>
            <div class="project-card">
                <div class="project-title">Project 1</div>
                <div class="project-image">
                    <img class="project-cards-image" src={image1} alt="not found image" />
                </div>
                <div class="project-short-description">
                    A Python Bot/Service. Programatically scan Twitter feed. Custom search, alerts, automatic Retweet.
                </div>
                ---
                <div class="project-keywords">
                    Python3, Twitter, Tweepy, Amazon AWS, Jenkins
                </div>
                <br/>
            </div>
            <div class="project-card">
                <div class="project-title">Project 1</div>
                <div class="project-image">
                    <img class="project-cards-image" src={image1} alt="not found image" />
                </div>
                <div class="project-short-description">
                    A Python Bot/Service. Programatically scan Twitter feed. Custom search, alerts, automatic Retweet.
                </div>
                ---
                <div class="project-keywords">
                    Python3, Twitter, Tweepy, Amazon AWS, Jenkins
                </div>
                <br/>
            </div>
            <div class="project-card">
                <div class="project-title">Project 1</div>
                <div class="project-image">
                    <img class="project-cards-image" src={image1} alt="not found image" />
                </div>
                <div class="project-short-description">
                    A Python Bot/Service. Programatically scan Twitter feed. Custom search, alerts, automatic Retweet.
                </div>
                ---
                <div class="project-keywords">
                    Python3, Twitter, Tweepy, Amazon AWS, Jenkins
                </div>
                <br/>
            </div>                                                        
        </div>
        
    )
};

export default ProjectCards;