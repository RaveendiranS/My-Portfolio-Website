import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skill',
  imports: [CommonModule],
  templateUrl: './skill.html',
  styleUrl: './skill.css'
})
export class Skill{
  skills = [
    { skillname: "C Programming" , skillLoc: "", SkillContent: "Solid understanding of C programming fundamentals, developed through dedicated learning and practice. While I haven’t applied this skill in professional projects, I’ve successfully cleared multiple company assessments that demonstrate my proficiency and problem-solving ability in C." },
    { skillname: "Java Programming", skillLoc: "../Skill/Infosys Certified Java Programmer.png", SkillContent: "" },
    { skillname: "C# Programming", skillLoc: "../Skill/Infosys Certified L2 Junior Microsoft .NET Programmer.png", SkillContent: "" },
    { skillname: "HTML", skillLoc: "../Skill/HTML.png", SkillContent: "" },
    { skillname: "CSS", skillLoc: "../Skill/CSS.png", SkillContent: "" },
    { skillname: "JavaScript", skillLoc: "../Skill/JavaScript.png", SkillContent: "" },
    { skillname: "TypeScript", skillLoc: "", SkillContent: "Practical knowledge of TypeScript, gained through developing my portfolio project using Angular." },
    { skillname: "Angular", skillLoc: "../Skill/Angular.png", SkillContent: "" },
    { skillname: "ASP.NET", skillLoc: "", SkillContent: "Practical expertise in ASP.NET, applied in real projects at Infosys Limited to deliver scalable, high-performance solutions." },
    { skillname: "ADO.NET", skillLoc: "", SkillContent: "Practical expertise in ADO.NET, applied in real projects at Infosys Limited to deliver scalable, high-performance solutions." },
    { skillname: "MVC", skillLoc: "", SkillContent: "Practical expertise in MVC, applied in real projects at Infosys Limited to deliver scalable, high-performance solutions." },
    { skillname: "Web API", skillLoc: "", SkillContent: "Practical expertise in Web API, applied in real projects at Infosys Limited to deliver scalable, high-performance solutions." },
    { skillname: "SQL", skillLoc: "../Skill/Infosys Certified Database and SQL Professional.png", SkillContent: "" },
    { skillname: "Azure ADF", skillLoc: "", SkillContent: "Practical expertise in Azure ADF, applied in real projects at Infosys Limited to deliver scalable, high-performance solutions." },
    { skillname: "Azure Logic Apps", skillLoc: "", SkillContent: "Practical expertise in Azure Logic Apps, applied in real projects at Infosys Limited to deliver scalable, high-performance solutions." },
    { skillname: "Azure DevOps", skillLoc: "", SkillContent: "Fundamental understanding of Azure DevOps, acquired through project-related learning at Infosys Limited." },
    { skillname: "SSIS", skillLoc: "../Skill/Infosys Certified Microsoft SSIS Developer.png", SkillContent: "" },
    { skillname: "SSRS", skillLoc: "", SkillContent: "Practical expertise in SSRS, applied in real projects at Infosys Limited to deliver scalable, high-performance solutions." },
    { skillname: "PowerBI", skillLoc: "", SkillContent: "Practical expertise in PowerBI, applied in real projects at Infosys Limited to deliver scalable, high-performance solutions." },
    { skillname: "IIS", skillLoc: "", SkillContent: "Practical expertise in IIS, applied in real projects at Infosys Limited to deliver scalable, high-performance solutions." }
  ]
}
