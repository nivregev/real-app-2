import PageHeader from "./common/pageHeader";

const Home = () => {
  return (
    <PageHeader
      title={
        <>
          Home React <i className="bi bi-geo-fill"></i>App
        </>
      }
      description={
        " test , by my own description  - Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ipsam sequi sed, sapiente error cum tenetur atque? Error consequuntur tempore, facere in quas neque sequi cumque, sint at doloremque ut."
      }
    />
  );
};

export default Home;
