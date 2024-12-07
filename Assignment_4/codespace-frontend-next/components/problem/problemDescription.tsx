// app/problems/[problemId]/ProblemDescription.tsx

import ProblemNavbar from "./problemNavbar";
import classes from './problemDescription.module.css';
import { Problem } from "@/app/utils/interface/problem";


export default function ProblemDescription({ problem }:{problem :Problem}) {
 
  const constraint=problem.constraints;
  const constraintArray=constraint;
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
        <h4>Problem Constraints:</h4>
        <ul>
          {constraintArray.map((constraint,index)=><li key={index}><strong >{constraint}</strong></li>)}
          
        </ul>
        <h4>Input Format:</h4>
        <p>{problem.inputFormat}</p>
        <h4>Output Format:</h4>
        <p>{problem.outputFormat}</p>   
        <h4>Example</h4>
        <ul>
        {problem.examples.map((example, index) => (
            <li key={index}>
              <strong>Input:</strong> {JSON.stringify(example.input, null, 2)}
              <br />
              <strong>Output:</strong> {example.output}
              <br />
              <strong>Explanation:</strong> {example.explanation}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}