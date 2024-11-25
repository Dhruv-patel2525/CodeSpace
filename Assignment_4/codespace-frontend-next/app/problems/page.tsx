'use client'
import { useEffect, useState } from 'react';
import classes from './page.module.css';
import Link from 'next/link';
import { fetchALLProblems } from '../api/problemApi';
const problemsAll=[
    {
        problemId:1,
        title:"Gas Station",
        tags:"Greedy Algorithm",
        difficulty:"Medium",
        avgtime:"56 Mins",
        submissions:"60,946",
    },
    {
        problemId:2,
        title:"Majority Element",
        tags:"Greedy Algorithm",
        difficulty:"Medium",
        avgtime:"56 Mins",
        submissions:"60,946"
    },
    {
        problemId:3,
        title:"Distribute Candy",
        tags:"Greedy Algorithm",
        difficulty:"Medium",
        avgtime:"56 Mins",
        submissions:"60,946"
    },
    {
        problemId:4,
        title:"Longest Increasing Subsequence",
        tags:"Dynamic Programming",
        difficulty:"Hard",
        avgtime:"56 Mins",
        submissions:"60,946"
    },
    {
        problemId:5,
        title:"Unique Binary Search Trees",
        tags:"Dynamic Programming",
        difficulty:"Easy",
        avgtime:"56 Mins",
        submissions:"60,946"
    }
]


export default function Problems() {
    const [problem,setProblem]=useState([]);
    const [error,setError]=useState<string | null>(null);
    useEffect(()=>{
        let isMounted=true;
        const loadProblems=async ()=>{
            try{
                console.log("try");
                const data=await fetchALLProblems();
                console.log(data);
                setProblem(data);
            }
            catch(err)
            {
                setError("Failed to load problems");
                console.log(err);
            }
        }
        console.log("outside");
        loadProblems();
        return ()=>{
            isMounted=false;
        }
    },[]);
    if(error)
    {
        return <p>{error}</p>
    }
    return (
        <div className="container my-4">
            <div className={`row ${classes.tableFilters} align-items-center`}>
                <div className="col-md-6">
                    <input type="text" className="form-control" placeholder="Search for problems or keywords" />
                </div>
            </div>

            <table className="table">
                <thead className="thead-light">
                    <tr>
                        <th></th>
                        <th>Topic</th>
                        <th>Difficulty</th>
                        <th className={classes.avgtime}>Avg Time</th>
                        <th className={classes.submission}>Submissions</th>
                    </tr>
                </thead>
                <tbody>
                    {problemsAll.map((problem, index) => (
                        <tr key={index} className={classes.problemStatement}>
                            <td className={classes.problemTitle}>
                                <Link href={`/problems/${problem.problemId}`}>{problem.title}</Link>
                            </td>
                            <td><span className={`badge ${classes.badgeSecondary}`}>{problem.tags}</span></td>
                            <td>
                                <span className={`badge ${classes[`badge${problem.difficulty}`]}`}>
                                    {problem.difficulty}
                                </span>
                            </td>
                            <td className={classes.avgtime}>{problem.avgtime}</td>
                            <td className={classes.submission}>{problem.submissions}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}