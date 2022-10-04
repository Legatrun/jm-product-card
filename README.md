# JM-Product-Card

paquete para pruebas 


### Jair Merlo

## Ejemeplo
```
import {ProductCard, ProductButtons, ProductImage, ProductTitle} from 'jm-product-card'
```

```

<ProductCard
    product={product}
    initialValues={{
        count: 4,
        maxCount: 10,
    }}
    >
        {
            ({ reset, count, increaseBy, maxCount, isMaxCountReached }) => (
                <>
                    <ProductImage />
                    <ProductTitle />
                    <ProductButtons />
                </>
            )
    }
</ProductCard>