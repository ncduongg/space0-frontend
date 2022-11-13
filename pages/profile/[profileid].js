
import { useRouter } from 'next/router';
import React from 'react';

export default function Profile() {
    const route = useRouter();
    const params = route.query;
    console.log(params.profileid);
    return (<div>
       Nguyeenx Cong DUong neeee + {JSON.stringify(route.query)}
   </div>)
}
export async function getStaticPaths() {
    return {
      paths: [{ params: { profileid: 'ncduong' } }, { params: { profileid: 'hungchoa' } }],
      fallback: false, // can also be true or 'blocking'
    }
  }
  
  // `getStaticPaths` requires using `getStaticProps`
  export async function getStaticProps(context) {
    return {
      // Passed to the page component as props
      props: { post: {} },
    }
  }