import React, { Component } from 'react';
import './About.css';
import HKN from './img/HKN2.jpg';
import Headshot from './img/HKN_Headshot2.jpg';
import Helpdesk from './img/Help Desk.JPG';
import Improv from './img/Improv.jpg';
import VN from './img/VNlogo.png';
import Camp from './img/Camp.jpg';


class About extends Component{
    render(){
        return(
            <div id = "About" className="About">
                <h2>About Me</h2>
                <p><img src={Headshot} alt="Logo" /></p>
                <p>I am a Computer Science Student at the University of Florida Graduating in Spring of 2021.
                    I have expereince in Java, C++, Javascript, React, Unity, C#, Assembly, and MATLAB.
                </p>
                <h2>Work Experience</h2>
                <h3>UF Computing Help Desk</h3>
                <img src={Helpdesk} alt="Logo" />
                <p>At the UF Computing Help Desk, I collaborate with coworkers to solve complex computing issues for UF Students, Faculty, and Staff.
                    I was recently promoted to Supervisor, where I will be overseeing the entire Help Desk, ensuring everything runs smoothly and 
                    that clients recieve the help that they deserve.
                </p>
                <a href="http://helpdesk.ufl.edu/" target="_blank">View Website</a>
                <h3>Temple Beth Emet Summer Camp</h3>
                <img src={Camp} alt="Logo" />
                <p>As a Senior Counselor for the Temple Beth Emet Summer Camp, I was in charge of overseeing children ages 3-15, making sure 
                    that everyone was safe through events and fieldtrips. I also was in charge of leading the morning activites with a group of 300 kids and 
                    leading an improv teambuilding elective.
                </p>
                <a href="https://www.templebethemet.org/camp" target="_blank">View Website</a>
                <h2>Involvement</h2>
                <h3>Eta Kappa Nu Honors Society</h3>
                <img src={HKN} alt="Logo" />
                <p>Eta Kappa Nu is the Honors Society for Electrical Engineering, Computer Enginering, and Computer Science students.
                    As the Computer Science Curriculum Chair, I am currently collaborating with UF Professors and Staff to improve the department and have it function better for the students.
                    In the Honor Society, I have attended workshops to expand my understanding of Electrical and Computer engineering concepts, and have 
                    worked in the community teaching Digital Logic concepts to Elementary Schools.
                </p>
                <a href="https://hkn.ece.ufl.edu/" target="_blank">View Website</a>
                <h3>Theatre Strike Force Improv Comedy</h3>
                <img src={Improv} alt="Logo" />
                <p>Theatre Strike Force is Gainesville's Premier Improv Comedy Troupe.
                    Previously as President I worked with the board to plan events and run the club. Currently, as Vice President I am
                    reaching out to local organizations to expand our impact and teach improv skills. We also hold an annual 12 hour
                    comedy marathon where we raised money for the Alzheimer’s research group Hilarity for Charity.
                </p>
                <a href="https://www.theatrestrikeforce.com/" target="_blank">View Website</a>
                <h2>Research</h2>
                <h3>The VN Project</h3>
                <p><img src={VN} alt="Logo" /></p>
                <p>I worked under Dr. Angelos Barmpoutis in the VN project, which is an open-source web-based client-side operating system where I
                    used Javascript to develop various programs to run on the platform and discover the range of possibility of the software.
                </p>
            </div>
            

        );
    }
}

export default About;