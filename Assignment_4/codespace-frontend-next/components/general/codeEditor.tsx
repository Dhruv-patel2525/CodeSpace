'use client';
// app/problems/[problemId]/CodeEditorSection.tsx
import { useState, useEffect, useReducer } from 'react';
import dynamic from 'next/dynamic';
import classes from './CodeEditorSection.module.css';
import { languages } from 'monaco-editor';
import { Template } from '@/app/utils/interface/problem';

const MonacoEditor = dynamic(
  () => import('@monaco-editor/react'),
  { ssr: false }
);

// const templates=[
//   {
//     language:'java',
//     code:`/**
//  * Definition for binary tree
//  * class TreeNode {
//  *     int val;
//  *     TreeNode left;
//  *     TreeNode right;
//  *     TreeNode(int x) {
//  *      val = x;
//  *      left=null;
//  *      right=null;
//  *     }
//  * }
//  */
// public class Solution {
//     public int kthsmallest(TreeNode A, int B) {
//     }
// }
// `
//   },
//   {
//     language:"cpp",
//     code:`/**
//  * Definition for binary tree
//  * struct TreeNode {
//  *     int val;
//  *     TreeNode *left;
//  *     TreeNode *right;
//  *     TreeNode(int x) : val(x), left(NULL), right(NULL) {}
//  * };
//  */
// int Solution::kthsmallest(TreeNode* A, int B) {
// }
// `
//   },
//   {
//     language:'c',
//     code:`/**
//  * Definition for binary tree
//  * struct TreeNode {
//  *     int val;
//  *     struct TreeNode *left;
//  *     struct TreeNode *right;
//  * };
//  * 
//  * typedef struct TreeNode treenode;
//  * 
//  * treenode* treenode_new(int val) {
//  *     treenode* node = (treenode *) malloc(sizeof(treenode));
//  *     node->val = val;
//  *     node->left = NULL;
//  *     node->right = NULL;
//  *     return node;
//  * }
//  */
// /**
//  * @input A : Root pointer of the tree 
//  * @input B : Integer
//  * 
//  * @Output Integer
//  */
// int kthsmallest(treenode* A, int B) {
// }
// `
//   },
//   {
//     language:'python',
//     code:`# Definition for a  binary tree node
// # class TreeNode:
// #	def __init__(self, x):
// #		self.val = x
// #		self.left = None
// #		self.right = None

// class Solution:
// 	# @param A : root node of tree
// 	# @param B : integer
// 	# @return an integer
// 	def kthsmallest(self, A, B):`
//   }
// ]

interface editorState{
  language:string,
  code:string
}
interface editorDetails{
  problemId:number,
  templates:Template[]
}

function editorReducer(state:editorState,action:{type:string,payload:any})
{
  switch(action.type){
    case 'SET_LANGUAGE':
      const fetchTemplate=action.payload.templates.find((template:Template)=>template.language === action.payload.language);
      const templateCode=fetchTemplate?fetchTemplate.code:'';
      return {...state,code:templateCode,language:action.payload.language}
    case 'SET_CODE':
      return {...state,code:action.payload};
    default:
      return state;
  }
}

export default function CodeEditorSection({ problem }:{problem:editorDetails}) {

  const templateState=problem.templates.find(template => template.language==="java");
  // console.log(templateState);
  const initialState=templateState?{
    code:templateState.code,
    language:templateState.language }:
    {
      code:'',
      language:'java'
    }
  const [state,dispatch]=useReducer(editorReducer,initialState);

  // useEffect(() => {

  //   console.log(state.code);
  //   }, [problem.problemId]);

  const handleSubmit = () => {
    console.log(state.code);
    };
  const handleEditorChange = (value: string | undefined) => {
    dispatch({type:'SET_CODE',payload:value||''}); 
  };

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch({type:'SET_LANGUAGE',
       payload:{language:e.target.value , templates:problem.templates},});
  };


  return (
    <div className={`row  mx-2`}>

    <div className={`${classes.problemNavbar} d-flex justify-content-between align-items-center`}>
      <div className={classes.problemNavbarActive}>
        <span id="timer">05:00</span>
      </div>
      <div>Score: 400/400</div>
      <select value={state.language} onChange={handleLanguageChange}>
          <option value="java">Java 8</option>
          <option value="c">C</option>
          <option value="cpp">C++</option>
          <option value="python">Python</option>
        </select>
    </div>
      <MonacoEditor
       height="900px"
       
       language={state.language}
       theme= 'vs-dark'
       value={state.code}
      onChange={handleEditorChange}
      />
      <button onClick={handleSubmit} className="btn btn-primary mt-3">
        Submit Code
      </button>
    </div>
  );
}