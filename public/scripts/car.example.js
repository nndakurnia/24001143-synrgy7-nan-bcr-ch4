// Pastikan membuat sebuah abstract class bernama Component
// class Component {
//   // Component punya fungsi bernama render yang mana berfungsi untuk membangun string HTML yang akan di-inject melalui DOM
//   render() {
//     throw new Error("Method 'render' must be implemented.");
//   }
// }
/* 
  udah nyoba pake abstract class di atas tapi malah error
*/

// Karena Component adalah sebuah abstract class, maka harus ada implementasi dari kelas tersebut yang bernama Car.
class Car {
  static list = [];

  static init(cars) {
    // menginisialisasi car list dari sebuah array dari car objects
    this.list = cars.map((i) => new this(i));
  }

  constructor({
    id,
    plate,
    manufacture,
    model,
    image,
    rentPerDay,
    capacity,
    description,
    transmission,
    available,
    type,
    year,
    options,
    specs,
    availableAt,
  }) {
    this.id = id;
    this.plate = plate;
    this.manufacture = manufacture;
    this.model = model;
    this.image = image;
    this.rentPerDay = rentPerDay;
    this.capacity = capacity;
    this.description = description;
    this.transmission = transmission;
    this.available = available;
    this.type = type;
    this.year = year;
    this.options = options;
    this.specs = specs;
    this.availableAt = availableAt;
  }

  render() {
    return `
    <div class="flex flex-col gap-6 justify-between h-full border rounded-lg p-6">
    <div class="flex flex-col gap-4">
      <div class="flex max-h-[250px]">
        <img src="${this.image}" alt="car-images.png" class="object-cover" />
      </div>
      <div class="flex flex-col gap-2">
        <p class="text-preg">${this.manufacture} ${this.model}/${this.type}</p>
        <p class="text-title">Rp ${this.rentPerDay} / hari</p>
        <p class="text-plight">${this.description}</p>
      </div>
      <div class="flex flex-row gap-2">
        <img src="./images/icon_users.png" alt="icon_users" />
        <p class="text-plight">${this.capacity} orang</p>
      </div>
      <div class="flex flex-row gap-2">
        <img src="./images/icon_settings.png" alt="icon_settings" />
        <p class="text-plight">${this.transmission}</p>
      </div>
      <div class="flex flex-row gap-2">
        <img src="./images/icon_calendar.png" alt="icon_calendar" />
        <p class="text-plight">${this.year}</p>
      </div>
    </div>
    <button
      class="rounded-sm bg-button px-3 py-2 w-full text-button text-white"
    >
      Pilih Mobil
    </button>
  </div>
    `;
  }
}
