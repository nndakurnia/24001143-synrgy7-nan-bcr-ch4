class App {
  constructor() {
    this.filterByDriver = document.getElementById("driver");
    this.filterByDate = document.getElementById("date");
    this.filterByTime = document.getElementById("time");
    this.filterByCapacity = document.getElementById("number");
    this.btnSearch = document.getElementById("btn-search");
    this.carlist = document.getElementById("list-cars");
    this.countCars = document.getElementById("count-cars");

    this.init(); // Panggil init di sini
  }

  async init() {
    // Register click listener
    this.btnSearch.onclick = () => {
      let driverValue = this.filterByDriver.value == "true";
      let dateValue = this.filterByDate.value;
      let newDate = new Date(dateValue);
      let timeValue = this.filterByTime.value;
      let capacityValue = this.filterByCapacity.value;

      if (!driverValue) {
        alert("Mohon isikan tipe driver!");
        return;
      } else if (!dateValue) {
        alert("Mohon isikan tanggal booking!");
        return;
      } else if (newDate.getDate() < this.dateNow()) {
        alert("Mohon memilih tanggal yang akan datang!");
        return;
      } else if (!timeValue) {
        alert("Mohon masukkan waktu jemput!");
        return;
      } else {
        this.getCarByFilter(
          driverValue,
          newDate.toLocaleDateString(),
          parseInt(timeValue),
          parseInt(capacityValue)
        );
      }
    };
  }

  run = () => {
    this.carlist.innerHTML = ""; // Clear container list
    Car.list.forEach((car) => {
      const node = document.createElement("div");
      node.innerHTML = car.render();
      this.carlist.appendChild(node);
    });
  }

  async load() {
    const cars = await Binar.listCars();
    Car.init(cars);
    this.run();
  }

  async getCarByFilter(avail, date, time, capacity) {
    this.carlist.innerHTML = ""; // Clear container list
    let data = await Binar.listCars(
      (car) =>
        car.available === avail &&
        new Date(car.availableAt).toLocaleDateString() >= date &&
        new Date(car.availableAt).getHours() >= time &&
        (!capacity? car.capacity > 0 : car.capacity >= capacity)
    );
    console.log("data", data);
    Car.init(data);
    this.countCars.innerHTML = `<p class="text-title">Total ${data.length} mobil tersedia</p>`;
    this.run();
  }

  dateNow() {
    let today = new Date().getDate();
    return today;
  }
}
