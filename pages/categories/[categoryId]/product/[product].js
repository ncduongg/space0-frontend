import { useRouter } from 'next/router';
import React, { memo } from 'react';

const ProductDetail = ({data}) => {
    const router = useRouter();

    return (<div>Nguyeenx Cong DUong + { data }</div>)
}
/* export async function getStaticProps() {
    const data = [
        {
            title: "duong",
            phone:"0981993333"
        },
        {
            title: "duong1",
            phone:"09819933331111"
        }
    ]
    return {
        props:{data},
        fallback:false
    }
} */
export default ProductDetail;