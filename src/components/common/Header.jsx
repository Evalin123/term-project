import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import {
  IconButton,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent
} from "@chakra-ui/react"
import { SunIcon, HamburgerIcon } from '@chakra-ui/icons'

import Sidebar from "./Sidebar";

const StyledPageHeader = styled.div`
  border: 1px solid rgb(235, 237, 240);
  width: 100%;
  height: 119px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background: #F7E1D2;

  .home-btn {
    border-radius: 50%;
    width: 77px;
    height: 77px;
    margin-left: 32px;
  }

  p {
    margin-left: 29px;
    font-size: 20px;
    font-family: 'Fira Sans', sans-serif;
  }

  .sign-in-btn {
    width: 104px;
    height: 62px;
    left: 680px;
    font-family: 'Roboto';
    font-size: 20px;
  }

  .sign-up-btn {
    width: 104px;
    height: 62px;
    left: 700px;
    font-family: 'Roboto';
    font-size: 20px;
  }

  .hamberger-btn {
    width: 51px;
    left: 940px;
  }
`

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  const history = useHistory();
  return (
    <StyledPageHeader>
      <IconButton
        className="home-btn"
        variant="outline"
        colorScheme="teal"
        aria-label="Call Sage"
        fontSize="20px"
        icon={<SunIcon />}
        onClick={() => {
          history.push("/");
        }}
      >
      </IconButton>
      <p>你好！今天要吃什麼呢？</p>
      <div>
        <IconButton
          className="hamberger-btn"
          variant="ghost"
          icon={<HamburgerIcon w={9} h={9} color="#131313;" />}
          ref={btnRef} colorScheme="teal"
          onClick={onOpen}
        >
          Open
      </IconButton>
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay>
            <DrawerContent>
              <Sidebar />
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
      </div>
    </StyledPageHeader>
  )
}

export default Header