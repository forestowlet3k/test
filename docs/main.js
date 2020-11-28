var testValue = 294;
document.write("<p>JavaScript テスス<br>テストだよ</p>" + testValue);

//csvローダー
const outputElement = document.getElementById('output_csv');

function getCsvData(dataPath) {
 const request = new XMLHttpRequest();
 request.addEventListener('load', (event) => {
  const response = event.target.responseText;
  outputElement.innerHTML = response;
  console.log("load");
 });
 request.open('GET', dataPath, true);
 request.send();
 
 console.log("end");
}

getCsvData('test.csv');
