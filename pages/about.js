import { QueryCache, useQuery } from "react-query";
import { useEffect, useState } from "react";
const fetchProducts = async () => {
    const response = await fetch("https://dummyjson.com/products");
    return response.json();
};

function QueryFetch() {

    const queryCache = new QueryCache();

    useEffect(() => {

        console.log("Component mounted!");
        console.log( new Date().getTime());
        return () => {

            console.log("Component unmounted!");
            console.log( new Date().getTime());
            queryCache.remove('products')
        };
    }, []);

    const [response, setResponse] = useState(null);

    const {data, error, isLoading, isSuccess} = useQuery("products", fetchProducts,{
        // Veriler sadece 1 kere çekilir ve tekrar silinmez
        cacheTime: 0,

        // Fetch sırasında hata olursa 3 kere daha deneme hakkı verir
        retry: 3,

        // Her hatalı denemede 500 milisaniye beklenir
        retryDelay: 500,

        // Fetch başarılı olduğunda, veriler güncellenir
        onSuccess: (newResponse) => {
            setResponse(newResponse);
            console.log(newResponse.products);
        },

        // Fetch başarısız olduğunda, hata mesajı konsola görüntülenir
        onError: (error) => {
            console.error(error);
        },

        // 45000 milisaniye (45 saniye) sonra, veriler eski sayılır ve tekrar fetch yapılır
        staleTime: 45000,
    });




    return (
      <div>
          {isLoading && <div>{"loading"}</div>}
          {error && <div>{'error'}</div>}
          {response !== null && (<div>

              <ul>
                  {response.products.map(item => {return (<li key={item.id}>
                      {item.title}
                  </li>)} )}
              </ul>


          </div>) }
      </div>
    );
}

export default QueryFetch;