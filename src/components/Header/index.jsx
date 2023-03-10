import { RiShutDownLine } from "react-icons/ri"

import { Container, Profile, Logout } from "./styles";

export function Header() {

  return (
    <Container>
      <Profile to="/profile">
        <img src="https://github.com/cabrallimaneto.png" alt="foto do usuário" />

        <div>
          <span>Bem-vindo,</span>
          <strong>Cabral Lima</strong>
        </div>
      </Profile>
      <Logout>

        <RiShutDownLine />

      </Logout>

    </Container>
  );

}