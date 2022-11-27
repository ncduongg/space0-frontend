import Link from "next/link"

const HotKeyWord = ({text,color}) =>{
    return <>
    <Link href='#'>
    <div className="text-center  bg-red-600 rounded-xl">
        <p className="text-white py-8 px-16">Làm việc</p>
    </div>
    </Link>
    </>
}
export default HotKeyWord