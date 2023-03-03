import Head from 'next/head';
import Title from 'components/Title';
import { GetStaticProps } from 'next';
import { getProducts, Product } from 'lib/products';
import Link from 'next/link';
import ProductCard from '@/components/ProductCard';
import Page from '@/components/Page';
interface HomePageProps {
  products: Product[];
}
export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
  console.log('[HomePage] getStaticProps()');
  const products = await getProducts();
  return { props: { products } };
};
const Home:React.FC<HomePageProps> = ({products}) => {
  // const [products, setProducts] = useState<Product[]>([]);
  // useEffect(()=>{
  //   (async()=>{
  //     const response = await fetch('/api/products');
  //     const products = await response.json();
  //     setProducts(products);
  //   })()
  // },[]);
  return (
    <Page title="Indoor Plants">
      
        <ul className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
          {products.map((product)=>(
            <li key={product.id}>
              <ProductCard product={product}/>
              
            </li>
          ))}
        </ul>
    </Page>
  )
}

export default Home;
