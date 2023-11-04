{
  // interface -> Generic

  interface Developer<X, Y = null> {
    name: string;
    device: {
      brand: string;
      model: string;
      releaseYear: number;
    };
    smartWatch: X;
    bike?: Y;
  }

  interface smartWatch {
    brand: string;
    model: string;
    display: string;
  }

  const poorDeveloepr: Developer<smartWatch> = {
    name: "Poor Dev",
    device: {
      brand: "Asus",
      model: "X-225UR",
      releaseYear: 2023,
    },
    smartWatch: {
      brand: "Emilab",
      model: "kw66",
      display: "OLED",
    },
  };

  interface ZontesBike {
    model: string;
    engineCapacity: string;
    price: number;
  }

  const richkDeveloepr: Developer<
    smartWatch & {heartTrack: boolean; sleepTrack: boolean},
    ZontesBike
  > = {
    name: "Dev Rich",
    device: {
      brand: "Asus",
      model: "X-225UR",
      releaseYear: 2018,
    },
    smartWatch: {
      brand: "Apple Watch",
      model: "something",
      display: "Apple",
      heartTrack: true,
      sleepTrack: true,
    },
    bike: {
      model: "Zontes GK155",
      engineCapacity: "165CC",
      price: 420000,
    },
  };
}
