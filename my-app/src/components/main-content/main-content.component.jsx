import React from "react";
import './main-content.styles.scss';
import image1 from '../../assets/PopupAutomationImage.jpg';

const MainContent = () => {

    const text1 = "Get a fully robust cross-platform l OS' and all Mobile Devices) testing framework up and running for your business. One code base for all, so to speak. Utilizes Sau ss Labs, sends email alerts, controllable via Jenkins, housed 100% off-site ";
    const text2 = "Uses Page Object Design Model, which can easily be accomodated to fit, as a top layer, all Behavioral Driven Frameworks (Cucumber, Robot, etc).";
    const text3 = "Allows for scheduleable, configurable, discrete test runs in a multitude of device, OS, browser, and run-type test matrix combinations.";

    return (
        <div class="display-container">
                <div class="display-content-project-name">POP UP AUTOMATION</div>
            <div class="display-content-content-container-grid">
                <div class="display-content-image-container">
                    <img class="display-content-large-image" src={image1} />
                </div>
                <div class="display-content-content-container">
                    <div class="display-content-long-description">
                        {text1}
                    </div>
                    <div class="display-content-long-description">
                        {text2}
                    </div>
                    <div class="display-content-long-description">
                        {text3}
                    </div>
                    <div class="display-content-project-url-container">
                        <a href="" class="display-content-project-url">https://github.com/drocpdp/test_framework_template</a>
                    </div>
                    <div class="display-content-project-keywords">
                        AWS EC2, Python3, Selenium, Appium, Sauce Labs, Jenkins
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainContent;
