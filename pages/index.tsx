//* React
import { FC, useState } from "react";
//* NextJS
import Head from "next/head";
//* Fonts and Icons
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

//* Components
import HomeLayout from "../components/home/HomeLayout";
import AddListModal from "../components/modals/AddListModal";
import HomeHeading from "../components/home/HomeHeading";
import HomeParagraph from "../components/home/HomeParagraph";
import HomeStyledIcon from "../components/home/HomeStyledIcon";
import ListsBox from "../components/home/Lists/ListsBox";
import Portal from "../components/Portal";

//* Prisma
import { List } from "@prisma/client";

//* Interfaces
interface HomeProps extends FC {
  lists: List[];
}

const Home = (props: HomeProps) => {
  //* State
  const [showModal, setShowModal] = useState<boolean>(false);
  const [lists, setLists] = useState<any[]>(props.lists);

  //* Handlers
  const showModalHandler = () => setShowModal(true);
  const closeModalHandler = () => setShowModal(false);
  const addListHandler = async (list: List) => {
    const res = await fetch("http://localhost:3000/api/add-list", {
      method: "POST",
      body: JSON.stringify(list),
    });
    const data = await res.json();
    setLists((prev) => [...prev, data.item]);
  };

  return (
    <>
      <Portal>
        <AddListModal
          show={showModal}
          closeModalHandler={closeModalHandler}
          addListHandler={addListHandler}
        />
      </Portal>
      <Head>
        <title>TuToDo! | Home</title>
      </Head>
      <HomeLayout>
        <HomeHeading>Welcome to TuToDo!</HomeHeading>
        <HomeParagraph>choose list of todos or add a new one</HomeParagraph>
        <HomeStyledIcon icon={faCirclePlus} onClick={showModalHandler} />
        <ListsBox lists={lists} />
      </HomeLayout>
    </>
  );
};

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/get-lists");
  const data = await res.json();
  return {
    props: { lists: data },
  };
}

export default Home;
