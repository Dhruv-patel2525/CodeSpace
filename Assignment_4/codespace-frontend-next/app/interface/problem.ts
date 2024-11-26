export  interface Problem {
    problemId: number;
    title: string;
    tags: string;
    difficulty: string;
    avgtime: number;
    submissions: number;
    description: string;
    inputFormat: string;
    outputFormat: string;
    constraints:string;
    examples: Example[];
  }

export interface Example {
    input: {
      nums: number[]; // Array of numbers in the input
    };
    output: number; // Expected output
    explanation: string; // Explanation of the result
  }