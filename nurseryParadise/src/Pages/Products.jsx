// src/App.js
import React from 'react';
import ProductCard from '../Components/Card';
import snakeplant from '../assets/sp.jpg';
import pothos from '../assets/pothos.jpg';
import spiderplant from '../assets/spider.jpg';
import zzplant from '../assets/zz.jpg';
import rose from '../assets/rose.jpg';
import lily from '../assets/lily.jpg';
import tulip from '../assets/tulip.jpg';
import daisy from '../assets/daisy.jpg';
import lavender from '../assets/lavender.jpg';
import mint from '../assets/mint.jpg';
import cilantro from '../assets/cilantro.jpg';
import parsley from '../assets/parsley.jpg';

const App = () => {
    const categories = [
      {
        id: 1,
        name: 'Indoor Plants',
        products: [
          {
            id: 1,
            image: snakeplant,
            title: 'Snake Plant',
            price: '29.99',
          },
          {
            id: 2,
            image: pothos,
            title: 'Pothos',
            price: '19.99',
          },
          {
            id: 3,
            image: spiderplant,
            title: 'Spider Plant',
            price: '24.99',
          },
          {
            id: 4,
            image: zzplant,
            title: 'ZZ Plant',
            price: '39.99',
          },
        ],
      },
      {
        id: 2,
        name: 'Outdoor Plants',
        products: [
          {
            id: 5,
            image: rose,
            title: 'Rose',
            price: '15.99',
          },
          {
            id: 6,
            image: lily,
            title: 'Lily',
            price: '22.99',
          },
          {
            id: 7,
            image: tulip,
            title: 'Tulip',
            price: '19.99',
          },
          {
            id: 8,
            image: daisy,
            title: 'Daisy',
            price: '10.99',
          },
        ],
      },
      {
        id: 3,
        name: 'Herbs',
        products: [
          {
            id: 9,
            image: lavender,
            title: 'Lavandula',
            price: '12.99',
          },
          {
            id: 10,
            image: parsley,
            title: 'Parsley',
            price: '14.99',
          },
          {
            id: 11,
            image: cilantro,
            title: 'Cilantro',
            price: '9.99',
          },
          {
            id: 12,
            image: mint,
            title: 'Mint',
            price: '7.99',
          },
        ],
      },
    ];

    return (
        <div className="p-4 mt-16 ">
          {categories.map((category) => (
            <div key={category.id} className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">{category.name}</h2>
              <div className="grid grid-cols-4 gap-4">
                {category.products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          ))}
        </div>
    );
}

export default App;
