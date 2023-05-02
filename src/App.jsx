


function App() {

  let jsCodeV = document.getElementById("jsID")===null?"":document.getElementById("jsID").value;

  function onChangeGetResult() {
    const htmlCode = document.getElementById("htmlID").value;
    const cssCode = document.getElementById("cssID").value;
    // const jsCode = document.getElementById("jsID").value;

    const myCode = htmlCode + "<style>" + cssCode + "</style>" + "<script>" + jsCodeV + "</script>";

    const output = document.getElementById("output").contentWindow.document;

    output.open();
    output.write(myCode);
    output.close();
  }

  function getResults() {

    const htmlCode = document.getElementById("htmlID").value;
    const cssCode = document.getElementById("cssID").value;
    const jsCode = document.getElementById("jsID").value;

    const myCode = htmlCode + "<style>" + cssCode + "</style>" + "<script>" + jsCode + "</script>";

    const output = document.getElementById("output").contentWindow.document;

    output.open();
    output.write(myCode);
    output.close();
  }

  function SaveAsText() {
    const htmlCode = document.getElementById("htmlID").value;
    const cssCode = document.getElementById("cssID").value;
    const jsCode = document.getElementById("jsID").value;
    // const myCode = htmlCode + "<style>" + cssCode + "</style>" + "<script>" + jsCode + "</script>";
    // const output = document.getElementById("output").contentWindow.document.body.innerHTML;
    const myCode = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Your Title</title>
        <style>
          ${cssCode}
        </style>
      </head>
      <body>
        ${htmlCode}

        <script>
          
          ${jsCode}
        
        </script>
      </body>
    </html>
    `;

    let fileName = 'HTMLCSSJS.html';
    let link = document.createElement('a');
    let mimeType = 'text/plain';
    link.setAttribute('download', fileName);
    link.setAttribute('href', 'data:' + mimeType + ';charset=utf-8,' + encodeURIComponent(myCode));
    link.click();
  }

  function SaveAsHTML() {
    const htmlCode = document.getElementById("htmlID").value;

    const myCode = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Your Title</title>
      </head>
      <body>
        ${htmlCode}

      </body>
    </html>
    `;

    let fileName = 'index.html';
    let link = document.createElement('a');
    let mimeType = 'text/plain';
    link.setAttribute('download', fileName);
    link.setAttribute('href', 'data:' + mimeType + ';charset=utf-8,' + encodeURIComponent(myCode));
    link.click();
  }

  function SaveAsCSS() {
    const cssCode = document.getElementById("cssID").value;
    let fileName = 'index.css';
    let link = document.createElement('a');
    let mimeType = 'text/plain';
    link.setAttribute('download', fileName);
    link.setAttribute('href', 'data:' + mimeType + ';charset=utf-8,' + encodeURIComponent(cssCode));
    link.click();
  }

  function SaveAsJS() {
    console.log("AM start");
    const jsCode = document.getElementById("jsID").value;
    let fileName = 'index.js';
    let link = document.createElement('a');
    let mimeType = 'text/plain';
    link.setAttribute('download', fileName);
    link.setAttribute('href', 'data:' + mimeType + ';charset=utf-8,' + encodeURIComponent(jsCode));
    link.click();
  }

  return (
    <div className='flex flex-col px-10'>
      <div className='flex justify-between gap-2 flex-wrap'>
        <div className='flex flex-col gap-2'>
          <button onClick={() => SaveAsHTML()}
            className='bg-gray-800 text-white font-bold hover:bg-purple-700 duration-200 ease-in-out py-2 my-2 flex-1'
          >Save The HTML</button>
          <textarea id="htmlID" placeholder='Enter HTML Code' spellCheck="false"
            rows={"10"} cols={"50"} className='bg-gray-300 p-2' onChange={() => onChangeGetResult()} />

        </div>
        <div className='flex flex-col gap-2'>
          <button onClick={() => SaveAsCSS()}
            className='bg-gray-800 text-white font-bold hover:bg-purple-700 duration-200 ease-in-out py-2 my-2 flex-1'
          >Save The CSS</button>
          <textarea id="cssID" placeholder='Enter CSS Code' spellCheck="false"
            rows={"10"} cols={"50"} className='bg-gray-300 p-2' onChange={() => onChangeGetResult()} />
        </div>
        <div className='flex flex-col gap-2'>
          <button onClick={() => SaveAsJS()}
            className='bg-gray-800 text-white font-bold hover:bg-purple-700 duration-200 ease-in-out py-2 my-2 flex-1'
          >Save The JS</button>
          <textarea id="jsID" placeholder='Enter JS Code' spellCheck="false"
            rows={"10"} cols={"50"} className='bg-gray-300 p-2' />
        </div>
      </div>

      <div className='flex gap-5'>
        <button onClick={() => getResults()}
          className='bg-gray-800 text-white font-bold hover:bg-purple-700 duration-200 ease-in-out py-2 my-2 flex-1'
        >Get Results</button>
        <button onClick={() => SaveAsText()}
          className='bg-gray-800 text-white font-bold hover:bg-purple-700 duration-200 ease-in-out py-2 my-2 flex-1'
        >Save The File</button>
      </div>

      <iframe id='output' className='min-h-[400px]'></iframe>
    </div>
  )
}

export default App
