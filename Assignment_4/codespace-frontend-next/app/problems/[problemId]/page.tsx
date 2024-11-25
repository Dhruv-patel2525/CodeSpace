"use client"
import { useParams, usePathname, useRouter } from 'next/navigation';import classes from './page.module.css';
import ProblemDescription from '@/components/problem/problemDescription';
import CodeEditorSection from '@/components/general/codeEditor';


const problemsAll = [
    {
        problemId: 1,
        title: "Gas Station",
        tags: "Greedy Algorithm",
        difficulty: "Medium",
        avgtime: "56 Mins",
        submissions: "60,946",
        description:"123"
    },
    // ... other problems ...
];

export default function ProblemDetails() {
  const params = useParams();
  const problemId = params.problemId as string;
  
   const problem = problemsAll.find(p => p.problemId === Number(problemId));


    if (!problem) {
        return <div>Problem Not found.</div>;
    }

    return (
        <div className="container-fluid">
       <div className="row">
        <div className="col-md-6">
          <ProblemDescription problem={problem} />
        </div>
        <div className="col-md-6">
          <CodeEditorSection problemId={problem.problemId} />
        </div>
      </div>
    </div>
       
    );
}





{/* <div className={classes.contain}>
<div className="row">
    <div className="col-md-6">
        <div className={`row ${classes.problemNavbar}`}>
            <div className={`col ${classes.problemNavbarActive} mx-2`}><button type="button" className="btn">Description</button></div>
            <div className={`col ${classes.navbarHover} mx-2`}><button type="button" className="btn">Discussion</button></div>
            <div className={`col ${classes.navbarHover} mx-2`}><button type="button" className="btn">Submission</button></div>
            <div className={`col ${classes.navbarHover} mx-2`}><button type="button" className="btn">Hint</button></div>
        </div>
        <div className="col p-3">
            <h2 className={classes.probTitle}>{problem.title}</h2>
            <p className="text-muted">Programming • {problem.tags}</p>
            <span className="badge badge-success">{problem.difficulty}</span><span>52.5% Success</span>
            <p><strong>Problem Description:</strong></p>
            <p>Given an array of size N, find the majority element. The majority element is the element that appears more than floor(N/2) times.</p>
            <p>You may assume that the array is non-empty and the majority element always exists.</p>

            <h4>Problem Constraints:</h4>
            <ul>
                <li>1 ≤ |A| ≤ 10<sup>6</sup></li>
                <li>1 ≤ A<sub>i</sub> ≤ 10<sup>9</sup></li>
            </ul>
            <h4>Input Format:</h4>
            <p>The first argument is an integer array A.</p>
            <h4>Output Format:</h4>
            <p>Return the majority element.</p>   
            <h4>Example Output</h4>
            <p>2</p>
            <h4>Example Explanation</h4>
            <p> 2 occurs 2 times</p>
        </div>
    </div>
    <div className="col-md-6">
        <div className={`row ${classes.problemNavbar} mx-2`}>
            <div className={`col-3 ${classes.problemNavbarActive}`}><span id="timer">05:00</span> </div>
            <div className="col-3">Score: 400/400</div>
            <div className="col-4 btn-group">
                <button type="button" className="btn btn-light dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Java 8
                </button>
                <div className="dropdown-menu dropdown-menu-right">
                  <button className="dropdown-item" type="button">Java 8</button>
                  <button className="dropdown-item" type="button">C</button>
                  <button className="dropdown-item" type="button">C++</button>
                  <button className="dropdown-item" type="button">Python</button>
                </div>
            </div>
        </div>
        <div id="monaco-editor" className={classes.codeEditorContainer}></div>
    </div>
</div>
</div> */}