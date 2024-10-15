import getHeaderData from "@/app/lib/api/getHeaderData";
import Image from 'next/image'


async function SiteNavbar() {

  const {navbar} = await getHeaderData();


  return (
    <nav className="flex">
      <div>
      <Image
      src={navbar.logo.image.url}
      width={100}
      height={100}
      alt={navbar.logo.company}
    />
      </div>
      <h1>Hola mundo</h1>
    </nav>
  );
}

export default SiteNavbar;
