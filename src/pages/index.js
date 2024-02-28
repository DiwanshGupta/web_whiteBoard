// import Image from "next/image";
import { Inter } from "next/font/google";
import { Main } from "./main";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return <>
        <Main />
    </>
}
