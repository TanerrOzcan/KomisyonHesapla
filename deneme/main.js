const chartData = {
    labels: ["Hizmet Bedeli Maliyeti", "KDV Maliyeti", "Kargo Maliyeti", "Komisyon Maliyeti", "Alış Maliyeti","KÂR"],
    data: [8.39, 8.62, 5.00, 35.91, 32.00,43.08],
  };
  
  const myChart = document.querySelector(".my-chart");
  const ul = document.querySelector(".programming-stats .details ul");
  
  new Chart(myChart, {
    type: "doughnut",
    data: {
      labels: chartData.labels,
      datasets: [
        {
          label: "Language Popularity",
          data: chartData.data,
        },
      ],
    },
    options: {
      borderWidth: 10,
      borderRadius: 2,
      hoverBorderWidth: 0,
      plugins: {
        legend: {
          display: false,
        },
      },
    },
  });
  
  const populateUl = () => {
    chartData.labels.forEach((l, i) => {
      let li = document.createElement("li");
      li.innerHTML = `${l}: <span class='percentage'>${chartData.data[i]}%</span>`;
      ul.appendChild(li);
    });
  };
  
  populateUl();

function calculateCommission() {
  // Burada komisyon hesaplama mantığınızı ekleyin
  
  // Sonuç kutusunun görünürlüğünü değiştir
  var resultsBox = document.getElementById('resultsBox');
  resultsBox.classList.toggle('hidden');
  resultsBox.classList.toggle('visible');
}