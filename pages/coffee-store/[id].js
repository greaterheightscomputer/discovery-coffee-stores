// import Link from 'next/link';
// import { useRouter } from 'next/router';

// const CoffeeStore = () => {
//   const router = useRouter();
//   console.log('router: ', router);
//   return (
//     <div>
//       Coffee Store Page {router.query.id}
//       <Link href="/coffee-store/32343434">
//         <a>Go to page dynamic</a>
//       </Link>
//     </div>
//   );
// };
// export default CoffeeStore;

//Implement Get Static Props and Get Static Paths
// import Link from 'next/link';
// import { useRouter } from 'next/router';
// import coffeeStore from '../../data/coffee-stores.json';

// //get external data from an api function
// export function getStaticProps(staticProps) {
//   const params = staticProps.params;
//   console.log('id: ', params.id);
//   return {
//     props: {
//       coffeeStore: coffeeStore.find((coffeeStore) => {
//         return coffeeStore.id.toString() === params.id; //dynamic id from the url
//       }),
//     },
//   };
// }

// //telling next.js about all the static route or paths avaliable in the app
// export function getStaticPaths() {
//   return {
//     paths: [
//       { params: { id: '0' } },
//       { params: { id: '1' } },
//       { params: { id: '300' } },
//     ],
//     // fallback: false, //return 404 page for any route or path not found
//     fallback: true,
//   };
// }

// const CoffeeStore = (props) => {
//   const router = useRouter();
//   // console.log('router: ', router);
//   // console.log('pros: ', props);

//   if (router.isFallback) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       Coffee Store Page {router.query.id}
//       <Link href="/">
//         <a>Go to page dynamic</a>
//       </Link>
//       <p>{props.coffeeStore.address}</p>
//       <p>{props.coffeeStore.name}</p>
//       <p>{props.coffeeStore.neighbourhood}</p>
//     </div>
//   );
// };
// export default CoffeeStore;

// // Refactor Coffee Store Page
// import Head from 'next/head';
// import Image from 'next/image';
// import Link from 'next/link';
// import { useRouter } from 'next/router';
// import coffeeStores from '../../data/coffee-stores.json';
// import styles from '../../styles/coffee-store.module.css';
// import cls from 'classnames';

// export function getStaticProps(staticProps) {
//   const params = staticProps.params;

//   return {
//     props: {
//       coffeeStore: coffeeStores.find((coffeeStore) => {
//         return coffeeStore.id.toString() === params.id;
//       }),
//     },
//   };
// }

// export function getStaticPaths() {
//   const paths = coffeeStores.map((coffeeStore) => {
//     return {
//       params: {
//         id: coffeeStore.id.toString(),
//       },
//     };
//   });

//   return {
//     paths,
//     fallback: true,
//   };
// }

// const CoffeeStore = (props) => {
//   const router = useRouter();
//   const { name, address, neighbourhood, imgUrl } = props.coffeeStore;

//   if (router.isFallback) {
//     return <div>Loading...</div>;
//   }

//   const handleUpvoteButton = () => {
//     console.log('handle upvote');
//   };

//   return (
//     <div className={styles.layout}>
//       <Head>
//         <title>{name}</title>
//       </Head>

//       <div className={styles.container}>
//         <div className={styles.col1}>
//           <div className={styles.backToHomeLink}>
//             <Link href="/">
//               <a>Back to Home</a>
//             </Link>
//           </div>
//           <div className={styles.nameWrapper}>
//             <h1 className={styles.name}>{name}</h1>
//           </div>
//           <Image
//             src={imgUrl}
//             alt={name}
//             width={600}
//             height={360}
//             className={styles.storeImg}
//           />
//         </div>

//         <div className={cls('glass', styles.col2)}>
//           <div className={styles.iconWrapper}>
//             <Image
//               src="/static/icons/places.svg"
//               width="24"
//               height="24"
//               alt=""
//             />
//             <p className={styles.text}>{address}</p>
//           </div>
//           <div className={styles.iconWrapper}>
//             <Image
//               src="/static/icons/nearMe.svg"
//               width="24"
//               height="24"
//               alt=""
//             />
//             <p className={styles.text}>{neighbourhood}</p>
//           </div>
//           <div className={styles.iconWrapper}>
//             <Image src="/static/icons/star.svg" width="24" height="24" alt="" />
//             <p className={styles.text}>1</p>
//           </div>

//           <button className={styles.upvoteButton} onClick={handleUpvoteButton}>
//             Up Vote!
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default CoffeeStore;

//Using dynamic api data from Foursquare Place Api inplace of dummy data
// import Head from 'next/head';
// import Image from 'next/image';
// import Link from 'next/link';
// import { useRouter } from 'next/router';
// import styles from '../../styles/coffee-store.module.css';
// import cls from 'classnames';
// import { fetchCoffeeStores } from '../lib/coffee-stores';

// export async function getStaticProps(staticProps) {
//   const params = staticProps.params;

//   const coffeeStores = await fetchCoffeeStores();

//   const findCoffeeStoreById = coffeeStores.find((coffeeStore) => {
//     return coffeeStore.fsq_id === params.id;
//   });
//   return {
//     props: {
//       coffeeStore: findCoffeeStoreById ? findCoffeeStoreById : {},
//     },
//   };
// }

// export async function getStaticPaths() {
//   const coffeeStores = await fetchCoffeeStores();
//   const paths = coffeeStores.map((coffeeStore) => {
//     return {
//       params: {
//         id: coffeeStore.fsq_id,
//       },
//     };
//   });

//   return {
//     paths,
//     fallback: true,
//   };
// }

// const CoffeeStore = (props) => {
//   const router = useRouter();
//   const { name, location, imgUrl } = props.coffeeStore;

//   if (router.isFallback) {
//     return <div>Loading...</div>;
//   }

//   const handleUpvoteButton = () => {
//     console.log('handle upvote');
//   };

//   return (
//     <div className={styles.layout}>
//       <Head>
//         <title>{name}</title>
//       </Head>

//       <div className={styles.container}>
//         <div className={styles.col1}>
//           <div className={styles.backToHomeLink}>
//             <Link href="/">
//               <a>
//                 <Image
//                   src="/static/icons/arrow.svg"
//                   width="15"
//                   height="15"
//                   alt=""
//                 />
//                 Back to Home
//               </a>
//             </Link>
//           </div>
//           <div className={styles.nameWrapper}>
//             <h1 className={styles.name}>{name}</h1>
//           </div>
//           <Image
//             src={
//               imgUrl ||
//               'https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80'
//             }
//             alt={name}
//             width={600}
//             height={360}
//             className={styles.storeImg}
//           />
//         </div>

//         <div className={cls('glass', styles.col2)}>
//           {location.formatted_address && (
//             <div className={styles.iconWrapper}>
//               <Image
//                 src="/static/icons/places.svg"
//                 width="24"
//                 height="24"
//                 alt=""
//               />
//               <p className={styles.text}>{location.formatted_address}</p>
//             </div>
//           )}
//           {location.locality && (
//             <div className={styles.iconWrapper}>
//               <Image
//                 src="/static/icons/nearMe.svg"
//                 width="24"
//                 height="24"
//                 alt=""
//               />
//               <p className={styles.text}>{location.locality}</p>
//             </div>
//           )}

//           <div className={styles.iconWrapper}>
//             <Image src="/static/icons/star.svg" width="24" height="24" alt="" />
//             <p className={styles.text}>1</p>
//           </div>

//           <button className={styles.upvoteButton} onClick={handleUpvoteButton}>
//             Up Vote!
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default CoffeeStore;

// // using coffeeStore data store in context store  with coffeeStore from getStaticProps() method
// import Head from 'next/head';
// import Image from 'next/image';
// import Link from 'next/link';
// import { useRouter } from 'next/router';
// import styles from '../../styles/coffee-store.module.css';
// import cls from 'classnames';
// import { useContext, useEffect, useState } from 'react';
// import { fetchCoffeeStores } from '../lib/coffee-stores';
// import { isEmpty } from '../../utils';
// import { StoreContext } from '../../store/store-context';

// export async function getStaticProps(staticProps) {
//   const params = staticProps.params;

//   const coffeeStores = await fetchCoffeeStores();

//   const findCoffeeStoreById = coffeeStores.find((coffeeStore) => {
//     return coffeeStore.fsq_id === params.id;
//   });
//   return {
//     props: {
//       coffeeStore: findCoffeeStoreById ? findCoffeeStoreById : {},
//     },
//   };
// }

// export async function getStaticPaths() {
//   const coffeeStores = await fetchCoffeeStores();
//   const paths = coffeeStores.map((coffeeStore) => {
//     return {
//       params: {
//         id: coffeeStore.fsq_id,
//       },
//     };
//   });

//   return {
//     paths,
//     fallback: true,
//   };
// }

// const CoffeeStore = (props) => {
//   const router = useRouter();
//   const id = router.query.id; //getting id from the browser url
//   const {
//     state: { coffeeStores },
//   } = useContext(StoreContext); //fetching coffeeStores
//   const [coffeeStore, setCoffeeStore] = useState(props.coffeeStore);

//   useEffect(() => {
//     const fetchData = () => {
//       if (isEmpty(props.coffeeStore)) {
//         if (coffeeStores.length > 0) {
//           const coffeeStoreFromContext = coffeeStores.find((coffeeStore) => {
//             return coffeeStore.fsq_id === id;
//           });
//           setCoffeeStore(coffeeStoreFromContext);
//         }
//       }
//     };
//     fetchData();
//   }, [coffeeStores, id, props]);

//   const { name, address, locality, imgUrl } = coffeeStore;

//   if (router.isFallback) {
//     return <div>Loading...</div>;
//   }

//   const handleUpvoteButton = () => {
//     console.log('handle upvote');
//   };

//   return (
//     <div className={styles.layout}>
//       <Head>
//         <title>{name}</title>
//       </Head>

//       <div className={styles.container}>
//         <div className={styles.col1}>
//           <div className={styles.backToHomeLink}>
//             <Link href="/">
//               <a>
//                 <Image
//                   src="/static/icons/arrow.svg"
//                   width="15"
//                   height="15"
//                   alt=""
//                 />
//                 Back to Home
//               </a>
//             </Link>
//           </div>
//           <div className={styles.nameWrapper}>
//             <h1 className={styles.name}>{name}</h1>
//           </div>
//           <Image
//             src={
//               imgUrl ||
//               'https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80'
//             }
//             alt={name}
//             width={600}
//             height={360}
//             className={styles.storeImg}
//           />
//         </div>

//         <div className={cls('glass', styles.col2)}>
//           {address && (
//             <div className={styles.iconWrapper}>
//               <Image
//                 src="/static/icons/places.svg"
//                 width="24"
//                 height="24"
//                 alt=""
//               />
//               <p className={styles.text}>{address}</p>
//             </div>
//           )}
//           {locality && (
//             <div className={styles.iconWrapper}>
//               <Image
//                 src="/static/icons/nearMe.svg"
//                 width="24"
//                 height="24"
//                 alt=""
//               />
//               <p className={styles.text}>{locality}</p>
//             </div>
//           )}

//           <div className={styles.iconWrapper}>
//             <Image src="/static/icons/star.svg" width="24" height="24" alt="" />
//             <p className={styles.text}>1</p>
//           </div>

//           <button className={styles.upvoteButton} onClick={handleUpvoteButton}>
//             Up Vote!
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default CoffeeStore;

// //implement createCoffeeStore api route
// import Head from 'next/head';
// import Image from 'next/image';
// import Link from 'next/link';
// import { useRouter } from 'next/router';
// import styles from '../../styles/coffee-store.module.css';
// import cls from 'classnames';
// import { useContext, useEffect, useState } from 'react';
// import { fetchCoffeeStores } from '../lib/coffee-stores';
// import { isEmpty } from '../../utils';
// import { StoreContext } from '../../store/store-context';

// export async function getStaticProps(staticProps) {
//   const params = staticProps.params;

//   const coffeeStores = await fetchCoffeeStores();
//   const findCoffeeStoreById = coffeeStores.find((coffeeStore) => {
//     return coffeeStore.fsq_id === params.id;
//   });
//   return {
//     props: {
//       coffeeStore: findCoffeeStoreById ? findCoffeeStoreById : {},
//     },
//   };
// }

// export async function getStaticPaths() {
//   const coffeeStores = await fetchCoffeeStores();
//   const paths = coffeeStores.map((coffeeStore) => {
//     return {
//       params: {
//         id: coffeeStore.fsq_id,
//       },
//     };
//   });

//   return {
//     paths,
//     fallback: true,
//   };
// }

// const CoffeeStore = (props) => {
//   const router = useRouter();
//   const id = router.query.id;
//   const {
//     state: { coffeeStores },
//   } = useContext(StoreContext);
//   const [coffeeStore, setCoffeeStore] = useState(props.coffeeStore);

//   //API Architecture: Invoke Coffee Store API in client side
//   const handleCreateCoffeeStore = async (coffeeStore) => {
//     try {
//       const { fsq_id, name, voting, imgUrl, locality, address } = coffeeStore;

//       //we add await becos fetch() method return a promise
//       const response = await fetch('/api/createCoffeeStore', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           fsq_id,
//           name,
//           address: address || '',
//           locality: locality || '',
//           voting: voting || 0,
//           imgUrl,
//         }),
//       });

//       const dbCoffeeStore = response.json();
//       console.log('dbCoffeeStore: ', dbCoffeeStore);
//     } catch (err) {
//       console.error('Error creating coffee store', err);
//     }
//   };

//   useEffect(() => {
//     const fetchData = () => {
//       //if static rendered coffee store is empty
//       if (isEmpty(props.coffeeStore)) {
//         if (coffeeStores.length > 0) {
//           //otherwise find the coffee store in context store and store onto AirtableDB
//           const coffeeStoreFromContext = coffeeStores.find((coffeeStore) => {
//             return coffeeStore.fsq_id === id;
//           });

//           if (coffeeStoreFromContext) {
//             //to make sure that empty object is not return
//             setCoffeeStore(coffeeStoreFromContext);
//             console.log('coffeeStoreFromContext: ', coffeeStoreFromContext);
//             handleCreateCoffeeStore(coffeeStoreFromContext); //store the context rendered coffee store onto Airtable
//           }
//         }
//       } else {
//         //SSG
//         handleCreateCoffeeStore(props.coffeeStore); //store the static rendered coffee store onto Airtable
//       }
//     };
//     fetchData();
//   }, [coffeeStores, id, props.coffeeStore]);

//   const { name, address, locality, imgUrl } = coffeeStore;

//   if (router.isFallback) {
//     return <div>Loading...</div>;
//   }

//   const handleUpvoteButton = () => {
//     console.log('handle upvote');
//   };

//   return (
//     <div className={styles.layout}>
//       <Head>
//         <title>{name}</title>
//       </Head>

//       <div className={styles.container}>
//         <div className={styles.col1}>
//           <div className={styles.backToHomeLink}>
//             <Link href="/">
//               <a>
//                 <Image
//                   src="/static/icons/arrow.svg"
//                   width="15"
//                   height="15"
//                   alt=""
//                 />
//                 Back to Home
//               </a>
//             </Link>
//           </div>
//           <div className={styles.nameWrapper}>
//             <h1 className={styles.name}>{name}</h1>
//           </div>
//           <Image
//             src={
//               imgUrl ||
//               'https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80'
//             }
//             alt={name}
//             width={600}
//             height={360}
//             className={styles.storeImg}
//           />
//         </div>

//         <div className={cls('glass', styles.col2)}>
//           {address && (
//             <div className={styles.iconWrapper}>
//               <Image
//                 src="/static/icons/places.svg"
//                 width="24"
//                 height="24"
//                 alt=""
//               />
//               <p className={styles.text}>{address}</p>
//             </div>
//           )}
//           {locality && (
//             <div className={styles.iconWrapper}>
//               <Image
//                 src="/static/icons/nearMe.svg"
//                 width="24"
//                 height="24"
//                 alt=""
//               />
//               <p className={styles.text}>{locality}</p>
//             </div>
//           )}

//           <div className={styles.iconWrapper}>
//             <Image src="/static/icons/star.svg" width="24" height="24" alt="" />
//             <p className={styles.text}>1</p>
//           </div>

//           <button className={styles.upvoteButton} onClick={handleUpvoteButton}>
//             Up Vote!
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default CoffeeStore;

// //implement voting
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../../styles/coffee-store.module.css';
import cls from 'classnames';
import { useContext, useEffect, useState } from 'react';
import fetchCoffeeStores from '../lib/coffee-stores';
import { isEmpty } from '../../utils';
import { StoreContext } from '../../store/store-context';
import useSWR from 'swr';

export async function getStaticProps(staticProps) {
  const params = staticProps.params;

  const coffeeStores = await fetchCoffeeStores();
  const findCoffeeStoreById = coffeeStores.find((coffeeStore) => {
    return coffeeStore.fsq_id === params.id;
  });
  return {
    props: {
      coffeeStore: findCoffeeStoreById ? findCoffeeStoreById : {},
    },
  };
}

export async function getStaticPaths() {
  const coffeeStores = await fetchCoffeeStores();
  const paths = coffeeStores.map((coffeeStore) => {
    return {
      params: {
        id: coffeeStore.fsq_id,
      },
    };
  });

  return {
    paths,
    fallback: true,
  };
}

const CoffeeStore = (props) => {
  const router = useRouter();
  router.isFallback ? router.isFallback : <div>Loading...</div>;
  const id = router.query.id;

  const {
    state: { coffeeStores },
  } = useContext(StoreContext);
  const [coffeeStore, setCoffeeStore] = useState(props.coffeeStore);
  const [votingCount, setVotingCount] = useState(0);

  //Start API to Create Coffee Store API from client side
  const handleCreateCoffeeStore = async (coffeeStore) => {
    try {
      const { fsq_id, name, voting, imgUrl, locality, address } = coffeeStore;

      //we add await becos fetch() method return a promise
      const response = await fetch('/api/createCoffeeStore', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fsq_id,
          name,
          address: address || '',
          locality: locality || '',
          voting: voting || 0,
          imgUrl,
        }),
      });

      const dbCoffeeStore = response.json();
      // console.log('dbCoffeeStore: ', dbCoffeeStore);
    } catch (err) {
      console.error('Error creating coffee store', err);
    }
  };
  //End API to Create Coffee Store API from client side

  //make context store available
  let coffeeStoreFromContext = coffeeStores.find((coffeeStore) => {
    return coffeeStore.fsq_id === id;
  });

  useEffect(() => {
    const fetchData = () => {
      //if static rendered coffee store is empty
      if (isEmpty(props.coffeeStore)) {
        if (coffeeStores.length > 0) {
          //context store
          // const coffeeStoreFromContext = coffeeStores.find((coffeeStore) => {
          //   return coffeeStore.fsq_id === id;
          // });

          if (coffeeStoreFromContext) {
            //to make sure that empty object is not return
            setCoffeeStore(coffeeStoreFromContext);
            // console.log('coffeeStoreFromContext: ', coffeeStoreFromContext);
            handleCreateCoffeeStore(coffeeStoreFromContext); //store the context rendered coffee store onto Airtable
          }
        }
      } else {
        //SSG
        handleCreateCoffeeStore(props.coffeeStore); //store the static rendered coffee store onto Airtable
      }
    };
    fetchData();
  }, [coffeeStoreFromContext, coffeeStores, id, props.coffeeStore]);

  const {
    fsq_id = '',
    name = '',
    address = '',
    locality = '',
    imgUrl = '',
  } = coffeeStore || props.coffeeStore || coffeeStoreFromContext;

  //SWR Start
  async function fetcher(url) {
    const res = await fetch(url);
    return await res.json();
  }
  // const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR(
    `/api/getCoffeeStoreById?fsq_id=${fsq_id}`,
    fetcher
    // (url) => fetch(url).then((res) => res.json())
  );

  // console.log(data);

  useEffect(() => {
    const fetchData = () => {
      if (data && data.length !== 0) {
        // console.log('data from SWR', data);
        setCoffeeStore(data[0]);
        setCoffeeStore(coffeeStore);
        setCoffeeStore(coffeeStoreFromContext);
        const newLocal = data.voting || 0;
        setVotingCount(newLocal);
      }
    };
    fetchData();
  }, [coffeeStore, coffeeStoreFromContext, data]);

  if (error) {
    return <div>Something went wrong retieving coffee store with SWR</div>;
  }
  //SWR End

  const handleUpvoteButton = async () => {
    // console.log('handle upvote');

    try {
      const response = await fetch('/api/favouriteCoffeeStoreById', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fsq_id,
        }),
      });

      const dbCoffeeStore = response.json();
      // console.log('updateDBCoffeeStore: ', dbCoffeeStore);

      if (dbCoffeeStore && dbCoffeeStore.length !== 0) {
        let count = votingCount + 1;
        setVotingCount(count);
        // console.log(count);
      }
    } catch (err) {
      console.error('Error updating coffee store', err);
    }
  };

  return (
    <div className={styles.layout}>
      <Head>
        <title>{name}</title>
      </Head>

      <div className={styles.container}>
        <div className={styles.col1}>
          <div className={styles.backToHomeLink}>
            <Link href="/">
              <a>
                <Image
                  src="/static/icons/arrow.svg"
                  width="15"
                  height="15"
                  alt=""
                />
                Back to Home
              </a>
            </Link>
          </div>
          <div className={styles.nameWrapper}>
            <h1 className={styles.name}>{name}</h1>
          </div>
          <Image
            src={
              imgUrl ||
              'https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80'
            }
            alt={name}
            width={600}
            height={360}
            className={styles.storeImg}
          />
        </div>

        <div className={cls('glass', styles.col2)}>
          {address && (
            <div className={styles.iconWrapper}>
              <Image
                src="/static/icons/places.svg"
                width="24"
                height="24"
                alt=""
              />
              <p className={styles.text}>{address}</p>
            </div>
          )}
          {locality && (
            <div className={styles.iconWrapper}>
              <Image
                src="/static/icons/nearMe.svg"
                width="24"
                height="24"
                alt=""
              />
              <p className={styles.text}>{locality}</p>
            </div>
          )}

          <div className={styles.iconWrapper}>
            <Image src="/static/icons/star.svg" width="24" height="24" alt="" />
            <p className={styles.text}>{votingCount}</p>
          </div>

          <button className={styles.upvoteButton} onClick={handleUpvoteButton}>
            Up Vote!
          </button>
        </div>
      </div>
    </div>
  );
};
export default CoffeeStore;
