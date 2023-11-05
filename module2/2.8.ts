{
  // Promise

  type Todo = {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
  };

  const getTodo = async (): Promise<Todo> => {
    const res = await fetch("https://dummyjson.com/products/1");
    const data = await res.json();
    return data;
  };

  getTodo();

  type Something = {something: string};

  //simulate
  const createPromise = (): Promise<Something> => {
    return new Promise<Something>((resolve, reject) => {
      const data: Something = {something: "everything"};
      if (data) {
        resolve(data);
      } else {
        reject("failed to load data");
      }
    });
  };

  // calling create promise function
  const showData = async (): Promise<Something> => {
    const data: Something = await createPromise();
    return data;
  };

  showData();
}
