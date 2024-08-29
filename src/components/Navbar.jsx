"use client";
import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";


const nestedMenuItems = [
  {
    title: "Hero",
  },
  {
    title: "Features",
  },
  {
    title: "Testimonials",
  },
  {
    title: "Ecommerce",
  },
];

const nestedMenuItems2 = [
  {
    title: "Hero1",
  },
  {
    title: "Features2",
  },
  {
    title: "Testimonials3",
  },
  {
    title: "Ecommerce4",
  },
];

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [openNestedMenu, setopenNestedMenu] = React.useState(false);
  const [openNestedMenu2, setopenNestedMenu2] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const renderItems = nestedMenuItems.map(({ title }, key) => (
    <a href="#" key={key}>
      <MenuItem>{title}</MenuItem>
    </a>
  ));

  const renderItems2 = nestedMenuItems2.map(({ title }, key) => (
    <a href={title} key={key}>
      <MenuItem>{title}</MenuItem>
    </a>
  ));

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography
            as="div"
            variant="medium"
            color="white"
            className="font-medium "
          >
            <ListItem
              className="flex items-center gap-2 py-2 pr-4 font-medium "
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              <Link href='/services'>Services</Link>
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden rounded-xl lg:block mt-3">
          {/* Nested menu */}
          {/* <Menu
            placement="right-start"
            allowHover
            offset={15}
            open={openNestedMenu}
            handler={setopenNestedMenu}
          >
            <MenuHandler className="flex items-center justify-between">
              <MenuItem>
                Figma
                <ChevronUpIcon
                  strokeWidth={2.5}
                  className={`h-3.5 w-3.5 transition-transform ${
                    isMenuOpen ? "rotate-90" : ""
                  }`}
                />
              </MenuItem>
            </MenuHandler>
            <MenuList className="rounded-xl">{renderItems}</MenuList>
          </Menu> */}
          
          <MenuItem><Link href="/graphics-design">Graphics design</Link></MenuItem>
          <MenuItem><Link href="/photo-editing">Photo editing</Link></MenuItem>
          <MenuItem><Link href="/web-design-and-development">Web design & development</Link></MenuItem>
          <MenuItem><Link href="/virtual-assistant">Virtual assistant</Link></MenuItem>
          <MenuItem><Link href="/video-editing">Video editing</Link></MenuItem>
          <MenuItem><Link href="/digital-marketing">Digital marketing</Link></MenuItem>
        </MenuList>
      </Menu>


      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen} className='space-y-1'>
        {/* Nested menu */}
          {/* <Menu
            placement="bottom"
            allowHover
            offset={6}
            open={openNestedMenu}
            handler={setopenNestedMenu}
          >
            <MenuHandler className="flex items-center justify-between">
              <MenuItem>
                Figma
                <ChevronUpIcon
                  strokeWidth={2.5}
                  className={`h-3.5 w-3.5 transition-transform ${
                    isMenuOpen ? "rotate-90" : ""
                  }`}
                />
              </MenuItem>
            </MenuHandler>
            <MenuList className="block rounded-xl lg:hidden">
              {renderItems}
            </MenuList>
          </Menu> */}
          <MenuItem className='bg-gray-500'><Link href="/graphics-design">Graphics design</Link></MenuItem>
          <MenuItem className='bg-gray-500'><Link href="/photo-editing">Photo editing</Link></MenuItem>
          <MenuItem className='bg-gray-500'><Link href="/web-design-and-development">Web design & development</Link></MenuItem>
          <MenuItem className='bg-gray-500'><Link href="/virtual-assistant">Virtual assistant</Link></MenuItem>
          <MenuItem className='bg-gray-500'><Link href="/video-editing">Video editing</Link></MenuItem>
          <MenuItem className='bg-gray-500'><Link href="/digital-marketing">Digital marketing</Link></MenuItem>
        </Collapse>
      </div>
    </React.Fragment>
  );
};



function NavList() {
  const currentPath = usePathname();
  return (
    <List className="mt-4 p-0 lg:mb-0 lg:mt-0 lg:flex-row lg:p-1">
      <Typography
        as="a"
        href="/"
        variant="medium"
        className="font-medium"
        color="white"
      >
        <ListItem className={`flex items-center gap-2 py-2 pr-4 ${currentPath === '/' ? 'bg-white text-black' : ''}`}>Home</ListItem>
      </Typography>
      <Typography
        as="a"
        href="/about"
        variant="medium"
        className="font-medium"
        color="white"
      >
        <ListItem className={`flex items-center gap-2 py-2 pr-4 ${currentPath === '/about' ? 'bg-white text-black' : ''}`}>About</ListItem>
      </Typography>
      <NavListMenu />
      <Typography
        as="a"
        href="/portfolio"
        variant="medium"
        className="font-medium"
        color="white"
      >
        <ListItem className={`flex items-center gap-2 py-2 pr-4 ${currentPath === '/portfolio' ? 'bg-white text-black' : ''}`}>
          Portfolio
        </ListItem>
      </Typography>
      <Typography
        as="a"
        href="/contact"
        variant="medium"
        className="font-medium"
        color="white"
      >
        <ListItem className={`flex items-center gap-2 py-2 pr-4 ${currentPath === '/contact' ? 'bg-white text-black' : ''}`}>
          Contact
        </ListItem>
      </Typography>
    </List>
  );
}

export function NavigationbarWithDropdownMultilevelMenu() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <div className="bg-gray-800">
      <Navbar className="shadow-none w-full rounded-none border-none mx-auto bg-transparent ">
        <div className="flex items-center justify-between">
          <Link href='/' className='text-3xl font-bold'>WEB-<span className='text-orange-400'>BRIKS</span></Link>
          <div className="hidden lg:block ">
            <NavList />
          </div>
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="bg-orange-400 text-gray-900 px-4 py-2 rounded hover:bg-orange-500 transition"
            >
              Get a Quote
            </Link>
          </div>
          <IconButton
            variant="text"
            className="lg:hidden"
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon className="h-6 w-6" strokeWidth={2} />
            ) : (
              <Bars3Icon className="h-6 w-6" strokeWidth={2} />
            )}
          </IconButton>
        </div>
        <Collapse open={openNav}>
          <NavList />
          <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
          <Link
              href="/contact"
              className="bg-orange-400 text-gray-900 px-2 py-1 rounded hover:bg-orange-500 transition"
            >
              Get a Quote
            </Link>
          </div>
        </Collapse>
      </Navbar>
    </div>
  );
}
