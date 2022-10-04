import React from 'react';
import renderer from 'react-test-renderer';
import { ProductTitle, ProductCard } from '../../src/components'
import { product1 } from './data/products';

describe('ProductTitle', () => {

    test('should de mostrar el componente correctamente con el titulo personalizado', () => {

        const wrapper = renderer.create(
            <ProductTitle title="Cursom Product" className='custom-class' />
        )

        expect(wrapper.toJSON()).toMatchSnapshot()

    })


    test('should de mostrar el componente con el nombre del product', () => {

        const wrapper = renderer.create(
            <ProductCard product={product1}>
                {
                    () => (
                        <ProductTitle />
                    )
                }
            </ProductCard>
        )

        expect(wrapper.toJSON()).toMatchSnapshot()

    })

})