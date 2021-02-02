import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const KeyboardEncyclopediaNavbar = (props) => {
  const url = props.url;
  const categoryList = [
    {
      id: 1,
      name: "Getting Started",
      chapters: [
        {
          id: 1,
          name: "Introduction to Mechanical Keyboards",
          link: "introduction",
        },
        {
          id: 2,
          name: "Switches",
          link: "switches",
        },
        {
          id: 3,
          name: "Layouts and Sizes",
          link: "layouts-and-sizes",
        },
        {
          id: 4,
          name: "Plates and PCBs",
          link: "plates-and-pcbs",
        },
        {
          id: 5,
          name: "Stabilizers",
          link: "stabilizers",
        },
      ],
    },
    {
      id: 2,
      name: "Keyboard Modifications",
      chapters: [
        {
          id: 1,
          name: "Switch Modifications",
          link: "switch-modifications",
        },
      ],
    },
    {
      id: 3,
      name: "List of Switches",
      chapters: [
        {
          id: 1,
          name: "Cherry",
          link: "switches/cherry",
        },
        {
          id: 2,
          name: "Gateron",
          link: "switches/gateron",
        },
        {
          id: 3,
          name: "Kailh",
          link: "switches/cherry",
        },
        {
          id: 4,
          name: "Durock/JWK",
          link: "switches/durock-jwk",
        },
      ],
    },
    {
      id: 4,
      name: "Building a Keyboard",
      chapters: [
        {
          id: 1,
          name: "Soldering Guide",
          link: "soldering-guide",
        },
        {
          id: 2,
          name: "Build Services",
          link: "build-services",
        },
      ],
    },
    {
      id: 5,
      name: "The Mechanical Keyboard Community",
      chapters: [
        {
          id: 1,
          name: "Group Buys",
          link: "group-buys",
        },
        {
          id: 2,
          name: "Keyboard Meetups",
          link: "keyboard-meetups",
        },
      ],
    },
    {
      id: 6,
      name: "Accessories",
      chapters: [
        {
          id: 1,
          name: "Custom Cables",
          link: "custom-cables",
        },
      ],
    },
  ];

  const categories = categoryList.map((category) => {
    let categoryChapters = category.chapters.map((chapter) => (
      <NavbarLink key={chapter.id} to={url + "/" + chapter.link}>
        {chapter.name}
      </NavbarLink>
    ));

    return (
      <NavbarCategory key={category.id}>
        <NavbarTitle>{category.name}</NavbarTitle>
        {categoryChapters}
      </NavbarCategory>
    );
  });

  return <Navbar>{categories}</Navbar>;
};

export default KeyboardEncyclopediaNavbar;

const Navbar = styled.div`
  position: sticky;
  flex: 0 1 15%;
  background: ${(props) => props.theme.colours.white};
  padding-top: 1rem;
`;

const NavbarCategory = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 10px;
`;

const NavbarTitle = styled.div`
  font-size: 1.25rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  color: ${(props) => props.theme.colours.darkgray};
  margin-top: 10px;
  margin-bottom: 5px;
`;

const NavbarLink = styled(Link)`
  margin-top: 5px;
  color: ${(props) => props.theme.colours.blue};
`;
