import Navbar from "./components/Navbar";
import Details from "./components/Details";
import Preview from "./components/Preview";
import Footer from "./components/Footer";
import Education from "./components/Education";
import { useState, useRef } from "react";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export default function App() {
    // Ref for the element to capture
    const pdfRef = useRef();

    // Function to download the PDF
    const handleDownloadPDF = () => {
        const input = pdfRef.current; // Use the ref instead of id
        if (input) {
            html2canvas(input).then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF();
                pdf.addImage(imgData, 'PNG', 0, 0);
                pdf.save('downloaded-file.pdf'); // Specify the name of the downloaded PDF file
            }).catch((error) => {
                console.error("Error capturing the PDF content:", error);
            });
        } else {
            console.error("Element to capture is not found.");
        }
    };

    // Personal Information State
    const [personal, setPersonal] = useState({
        name: "",
        email: "",
        phone: "",
        home: "",
        profile: ""
    });

    const handlePersonalChange = (e) => {
        const { name, value } = e.target;
        setPersonal(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // Education Information State
    const [ed, setEd] = useState([{
        college: "",
        address: "",
        degree: "",
        years: "",
        description: ""
    }]);

    const handleEdChange = (index, e) => {
        const { name, value } = e.target;
        setEd(prev => {
            const newEd = [...prev];
            newEd[index] = {
                ...newEd[index],
                [name]: value
            };
            return newEd;
        });
    };

    const addNewEd = () => {
        setEd(prev => [
            ...prev,
            {
                college: "",
                address: "",
                degree: "",
                years: "",
                description: ""
            }
        ]);
    };

    // Experience Information State
    const [exp, setExp] = useState([{
        org: "",
        orgAdd: "",
        role: "",
        yearsAct: "",
        roleDesc: ""
    }]);

    const handleExpChange = (index, e) => {
        const { name, value } = e.target;
        setExp(prev => {
            const expList = [...prev];
            expList[index] = {
                ...expList[index],
                [name]: value
            };
            return expList;
        });
    };

    const addNewExp = () => {
        setExp(prev => [
            ...prev,
            {
                org: "",
                orgAdd: "",
                role: "",
                yearsAct: "",
                roleDesc: ""
            }
        ]);
    };

    // Skills Information State
    const [skills, setSkills] = useState([""]);

    const handleSkillChange = (index, e) => {
        const { value } = e.target;
        setSkills(prev => {
            const skillsList = [...prev];
            skillsList[index] = value;
            return skillsList;
        });
    };

    const addNewSkill = () => {
        setSkills(prev => [
            ...prev,
            ""
        ]);
    };

    return (
        <>
            <Navbar />
            <Details person={personal} onChangeFunction={handlePersonalChange} />

            {/* Education */}
            {ed.map((ed, index) => (
                <Education
                    key={index}
                    education={ed}
                    onChangeFunction={(e) => handleEdChange(index, e)}
                />
            ))}
            <button className='submit-btn' onClick={addNewEd}>Add Education</button>
            <hr />

            {/* Experience */}
            {exp.map((exp, index) => (
                <Experience
                    key={index}
                    experience={exp}
                    onChangeExperience={(e) => handleExpChange(index, e)}
                />
            ))}
            <button className='submit-btn' onClick={addNewExp}>Add Experience</button>
            <hr />

            {/* Skills */}
            {skills.map((skill, index) => (
                <Skills
                    key={index}
                    index={index}
                    skills={skill}
                    onChangeSkills={(e) => handleSkillChange(index, e)}
                />
            ))}
            <button className='submit-btn' onClick={addNewSkill}>Add Skill</button>
            <hr />

            {/* PDF Content and Download Button */}
            <div ref={pdfRef}> {/* Use ref to capture this element */}
                <Preview personalDetails={personal} educationDetails={ed} experienceDetails={exp} skillsDetails={skills} />
            </div>

            <button className='submit-btn' onClick={handleDownloadPDF}>Download PDF</button>

        </>
    );
}
