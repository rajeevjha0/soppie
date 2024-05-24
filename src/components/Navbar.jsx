import Link from "next/link"

export default function (){
    return(
        <div className="hidden lg:block">
            <div className="container">
                <div className="flex w-fit gap-10 mx-auto font-medium py-4 text-black ">
                    <Link className="navbar_link capitalize font-semibold" href="#">Home</Link>
                    <Link className="navbar_link capitalize font-semibold" href="#">About</Link>
                    <Link className="navbar_link capitalize font-semibold" href="#">Electronics</Link>
                    <Link className="navbar_link capitalize font-semibold" href="#">fashion</Link>
                    <Link className="navbar_link capitalize font-semibold" href="#">Sports</Link>
                    <Link className="navbar_link capitalize font-semibold" href="#">Hot Offers</Link>

                </div>
            </div>
        </div>
    )
}