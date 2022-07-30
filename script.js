async function runCode(code) {
    const req = await fetch("https://emkc.org/api/v2/piston/execute", {
        method: "post",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({
            language: "cpp",
            version: "*",
            files: [
                {
                    content: code
                }
            ]
        })
    });
    const res = await req.json();
    const output = res.compile.output === ""
        ? res.run.output
        : `${res.compile.output}\n${res.run.output}`;
    console.log(output);
    return output;
}

document.getElementById("runCode").addEventListener("click", async (e) => {
    const resultEl = document.getElementById("result");
    resultEl.removeAttribute("hidden");
    resultEl.value = "Running...";
    const code = document.querySelector(".code").innerText;
    const result = await runCode(code);
    resultEl.value = result;
});

function quiz1Result(event) {

    // const input = document.querySelector('input[type="radio"]:checked');
    const inputValue = document.querySelector('#quiz1Choices input[type="radio"]:checked').value;
    // document.getElementById(inputValue).style.backgroundColor = "none";
    // document.getElementById("quiz1choice2").style.backgroundColor = "none";

    // document.querySelector('input[id="radio"]')   
    document.querySelectorAll("#quiz1Choices label").forEach(i => i.style.backgroundColor = "");

    console.log(inputValue);
    if (inputValue == "quiz1choice2") {

        document.getElementById("quiz1choice2").style.backgroundColor = "green";
    }
    else if (inputValue == "") {
        console.log(inputValue);
    }
    else {
        document.getElementById(inputValue).style.backgroundColor = "red";
        document.getElementById("quiz1choice2").style.backgroundColor = "green";
    }
}

function quiz2Result(event) {

    // const input = document.querySelector('input[type="radio"]:checked');
    const inputValue = document.querySelector('#quiz2Choices input[type="radio"]:checked').value;
    // document.getElementById(inputValue).style.backgroundColor = "none";
    // document.getElementById("quiz1choice2").style.backgroundColor = "none";

    // document.querySelector('input[id="radio"]')   
    document.querySelectorAll("#quiz2Choices label").forEach(i => i.style.backgroundColor = "");

    console.log(inputValue);
    if (inputValue == "quiz2choice1") {

        document.getElementById("quiz2choice1").style.backgroundColor = "green";
    }
    else if (inputValue == "") {
        console.log(inputValue);
    }
    else {
        document.getElementById(inputValue).style.backgroundColor = "red";
        document.getElementById("quiz2choice1").style.backgroundColor = "green";
    }
}


document.getElementById("quiz1Submit").addEventListener("click", quiz1Result);
document.getElementById("quiz2Submit").addEventListener("click", quiz2Result);