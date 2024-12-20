'use client'
import { useEffect, useState } from 'react';
import classes from './page.module.css';
import Link from 'next/link';
import { Problem } from '../../utils/interface/problem';
import { useAuth } from '@/components/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import { fetchWithAuth } from '../../utils/api/api';
import ProtectedRoute from '@/components/Authetication/protectedRoute';


  


export default function Problems() {
    const [problemsAll,setProblemAll]=useState<Problem[]|[]>([]);
    const [error,setError]=useState<string | null>(null);
    const {state} = useAuth();
    const router=useRouter();
    useEffect(()=>{
        let isMounted=true;
        const loadProblems=async ()=>{
            try{
                const url=`${process.env.NEXT_PUBLIC_API_BASE_URL}/problem/`;
                fetchWithAuth(url,{})
                .then( response =>{
                  if(!response.ok){
                    throw new Error(`HTTP error! status: ${response.status}`);
                  }
                  return response.json();
                })
                .then(data => setProblemAll(data))
                .catch(error => {
                  setError(error.message)
                })
            }
            catch(err)
            {
                setError("Failed to load problems");
                console.log(err);
            }
        }
        loadProblems();
        return ()=>{
            isMounted=false;
        }
    },[state.isAuthenticated]);
    if(error)
    {
        return <p>{error}</p>
    }
    return (
        <>
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
        </>
    );
}