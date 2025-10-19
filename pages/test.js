import Header from "components/layout/Header";
import SidebarLeft from "components/layout/SidebarLeft";
import SidebarRight from "components/layout/SidebarRight";

function Test() {
  return (
    <>
      <Header />
      <div style={{ display: "flex", flexDirection: "row", background: "#fef0e7" }}>
        <SidebarLeft />
        <p>Contenu</p>
        <SidebarRight />
      </div>
    </>
  );
}

export default Test;
