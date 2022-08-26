import { ClientBlockContainer } from "./style";
import Image from "next/image";

const ClientBlock = () => {
  return (
    <ClientBlockContainer>
      <div className="content">
        <h2>Clients</h2>
        <div className="description">
          We value a great working relationship with our clients above all else.
          It’s why they often come to our parties. It’s also why we’re able to
          challenge and inspire them to reach for the stars.
        </div>
      </div>
      <div className="client-logo__container">
        {Array(12)
          .fill()
          .map((item, i) => (
            <Image
              width="172px"
              height="90px"
              layout="fixed"
              src={require(`../../assets/images/clientlogo/image${i + 1}.png`)}
              alt="client-logo"
              key={i}
            />
          ))}
      </div>
    </ClientBlockContainer>
  );
};

export default ClientBlock;
