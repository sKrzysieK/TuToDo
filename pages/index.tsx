//* NextJS
import type { NextPage } from "next";
import Head from "next/head";
//* Fonts and Icons
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
//* Helpers
import isDark from "../helpers/isDark";

//* Components
import HomeLayout from "../components/home/HomeLayout";
import AddListModal from "../components/modals/AddListModal";
import HomeHeading from "../components/home/HomeHeading";
import HomeParagraph from "../components/home/HomeParagraph";
import HomeStyledIcon from "../components/home/HomeStyledIcon";
import ListsBox from "../components/home/Lists/ListsBox";
import ListsTile from "../components/home/Lists/ListsTile";

const Home: NextPage = () => {
  //* State
  const [showModal, setShowModal] = useState<boolean>(false);
  const [lists, setLists] = useState<any[]>([
    { id: 1, name: "List1", color: "#123456" },
    { id: 2, name: "List2", color: "#654321" },
  ]);

  //* Handlers
  const showModalHandler = () => setShowModal(true);
  const closeModalHandler = () => setShowModal(false);
  const addListHandler = (list: { name: string; color: string }) => {
    setLists((prev) => [...prev, { id: lists.length + 1, ...list }]);
  };

  return (
    <>
      <AddListModal
        show={showModal}
        closeModalHandler={closeModalHandler}
        addListHandler={addListHandler}
      />
      <Head>
        <title>TuToDo! | Home</title>
      </Head>
      <HomeLayout>
        <HomeHeading>Welcome to TuToDo!</HomeHeading>
        <HomeParagraph>choose list of todos or add a new one</HomeParagraph>
        <HomeStyledIcon icon={faCirclePlus} onClick={showModalHandler} />
        <ListsBox>
          {lists.map((list) => (
            <ListsTile
              key={list.id}
              style={{
                backgroundColor: list.color,
                color: isDark(list.color) ? "#ffffff" : "#000000",
              }}
            >
              <p>{list.name}</p>
            </ListsTile>
          ))}
        </ListsBox>
      </HomeLayout>
    </>
  );
};

export async function getServerSideProps() {
  return {
    props: {},
  };
}

export default Home;
