// app/problems/[problemId]/ProblemDescription.tsx

import ProblemNavbar from "./problemNavbar";
import classes from './problemDescription.module.css';
interface Problem{
    problemId:number,
    title:string,
    tags:string,
    difficulty:string,
    avgtime:string,
    submissions:string,
    description:string,
}

export default function ProblemDescription({ problem }:{problem :Problem}) {
  return (
    <>
      <ProblemNavbar />
      <div className="p-3">
        <h2 className="prob-title">{problem.title}</h2>
        <p className="text-muted">Programming • {problem.tags}</p>
        <span className={`badge ${classes['badge-medium']}`}>{problem.difficulty}</span>
        <span>52.5% Success</span>
        <p><strong>Problem Description:</strong></p>
        <p>{problem.description}</p>
        {/* Add other problem details here */}
      </div>
    </>
  );
}