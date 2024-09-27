    // Monaco Editor Setup
    require.config({ paths: { 'vs': 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.20.0/min/vs' }});
    window.MonacoEnvironment = { getWorkerUrl: () => proxy };

    let proxy = URL.createObjectURL(new Blob([`
        self.MonacoEnvironment = {
            baseUrl: 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.20.0/min/'
        };
        importScripts('https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.20.0/min/vs/base/worker/workerMain.js');
    `], { type: 'text/javascript' }));

    require(['vs/editor/editor.main'], function() {
        var editor = monaco.editor.create(document.getElementById('monaco-editor'), {
            value: `/**\n * Definition for binary tree\n * class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode(int x) { val = x; left=null; right=null; }\n * }\n */\npublic class Solution {\n    public int solve(TreeNode A, int B) {\n        // Write your code here\n    }\n}`,
            language: 'java',  
            theme: 'vs-dark',  
            automaticLayout: true,
        });
    });

    function startTimer(duration, display) {
        var timer = duration, minutes, seconds;
        setInterval(function () {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            display.textContent = minutes + ":" + seconds;

            if (--timer < 0) {
                timer = duration;
            }
        }, 1000);
    }

    window.onload = function () {
        var timeLeft = 60 * 5, 
            display = document.querySelector('#timer');
        startTimer(timeLeft, display);
    };
