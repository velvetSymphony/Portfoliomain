let visits = document.querySelector("#visits");
fetch("https://sch5qsrg1m.execute-api.ap-southeast-2.amazonaws.com/Prod/visits")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    visits.innerText = `Number of site visits: ${data}`;
  });
