"use client"
import { useParams, usePathname, useRouter } from 'next/navigation';
import classes from './page.module.css';
import ProblemDescription from '@/components/problem/problemDescription';
import CodeEditorSection from '@/components/general/codeEditor';
import { useEffect, useState } from 'react';
import { Problem } from '@/app/utils/interface/problem';
import ProtectedRoute from '@/components/Authetication/protectedRoute';
import { fetchWithAuth } from '@/app/utils/api/api';

export default function ProblemDetails() {
  const params = useParams();
  const problemId = params.problemId as string;
  const [problem,setProblem]=useState<Problem | null>(null)
  const [error,setError]=useState<string | null>(null);
  useEffect(()=>{
    let isMounted=true;

    const loadProblemById = async (problemId:string)=>{
       
        const url=`${process.env.NEXT_PUBLIC_API_BASE_URL}/problem/${problemId}`;
        fetchWithAuth(url,{})
        .then( response =>{
          if(!response.ok){
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then(data => setProblem(data))
        .catch(error => {
          setError(error.message)
        })
    }
    loadProblemById(problemId);
    return ()=>{
        isMounted=false;
    }
  },[]);


    if (!problem) {
        return <div>Problem Not found.</div>;
    }
    const editorDetails={
      problemId:problem.problemId,
      templates:problem.templates,
    }
    return (
      <>
        <div className="container-fluid">
       <div className="row">
        <div className="col-md-6">
          <ProblemDescription problem={problem} />
        </div>
        <div className="col-md-6">
          <CodeEditorSection problem={editorDetails} />
        </div>
      </div>
    </div>
    </>
       
    );
}



