import React, { Component } from 'react';
import './About.css';
import HKN from './img/HKN2.jpg';
import Headshot from './img/Headshot.jpg';
import oldHeadshot from './img/oldHeadshot.jpg';
import Helpdesk from './img/Help Desk.JPG';
import Improv from './img/Improv.jpg';
import VN from './img/VNlogo.png';
import FICS from './img/fics.jpg';


class About extends Component{
    render(){
        return(
            <div id = "About" className="About">
                <h2>About Me</h2>
                <p><img src={oldHeadshot} alt="Logo" /></p>
                <p>I am a Computer Science student at the University of Florida graduating in Spring of 2021.
                    I have expereince in Java, C++, Python, Javascript, React, Unity, C#, ARM, and MATLAB.
                </p>
                <h2>Work Experience</h2>
                <h3>Florida Institute for Cybersecurity Research</h3>
                <img src={FICS} alt="Logo" />
                <p>As a programming intern, I designed and developed an SQL relational database based in MariaDB to store and query PCB images,
                    developed code in Python for users to access the PCB image database quickly and easily, and used the Python library PyQt 
                    to contribute to the development of PCB image annotation software.
                </p>
                <a href="https://fics.institute.ufl.edu/students/" target="_blank">View Website</a>
                <h3>UF Computing Help Desk September 2018 - March 2020</h3>
                <img src={Helpdesk} alt="Logo" />
                <p>As Supervisor at the UF Computing Help Desk, I managed a team of consultants to ensure Help Desk operations ran smoothly.
                    As a team, we provided technical suppor to University of Florida students and staff.
                </p>
                <a href="http://helpdesk.ufl.edu/" target="_blank">View Website</a>
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
                    As president, I oversaw twelve board members in their respective duties to ensure projects came to fruition.
                    and facilitated the transition to online events amidst the pandemic.
                    I also coordinated and performed at charity shows collecting donations for Alzheimer’s research.
                </p>
                <a href="https://www.theatrestrikeforce.com/" target="_blank">View Website</a>
                <h2>Research</h2>
                <h3>The VN Project</h3>
                <p><img src={VN} alt="Logo" /></p>
                <p>I worked under Dr. Angelos Barmpoutis in the VN project, which is an open-source web-based client-side develppment platform where I
                    used Javascript to develop various programs to run on the platform and discover the range of possibility of the software.
                </p>
            </div>
            

        );
    }
}

export default About;