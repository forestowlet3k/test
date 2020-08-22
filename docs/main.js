var testValue = 294;
document.write("<p>JavaScript テスス<br>テストだよ</p>" + testValue);

//csvローダー
const outputElement = document.getElementById('output_csv');

function getCsvData(dataPath) {
 const request = new XMLHttpRequest();
 request.addEventListener('load', (event) => {
  const response = event.target.responseText;
  console.log(response);
  outputElement.innerHTML = response;
 });
 request.open('GET', dataPath, true);
 request.send();
}

getCsvData('test.csv');
