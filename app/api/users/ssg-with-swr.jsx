import Contacts from "@components/Contacts";
import { Customer } from "@components/Dashboard/Customer";
import React from "react";
import { SWRConfig } from "swr";
const Page = ({ fallback }) => {
  return <SWRConfig value={{ fallback }}>{/* <Customer /> */}</SWRConfig>;
};

export async function getStaticProps() {
  const URL = "/api/users/";
  const data = await fetch(URL).then((res) => res.json);
  return {
    props: {
      fallback: {
        [URL]: data,
      },
    },
  };
}
export default Page;
