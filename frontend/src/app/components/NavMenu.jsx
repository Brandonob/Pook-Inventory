import React from 'react';
import {
  Button,
  Menu,
  MenuItem,
  MenuButton,
  MenuList,
  IconButton,
  useToast,
} from '@chakra-ui/react';
import { ImMenu3 } from 'react-icons/im';
// import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { clearUser } from '../redux/slices/usersSlice';

export const NavMenu = () => {
  // const router = useRouter();
  const dispatch = useDispatch();
  const toast = useToast();

  const handleLogout = () => {
    localStorage.removeItem('user');
    dispatch(clearUser());

    toast({
      title: 'Logged out',
      description: 'You have been logged out',
      status: 'success',
      duration: 3000,
    });
  };

  return (
    <>
      <div className='fixed top-0 right-0 m-4'>
        <Menu>
          <MenuButton
            as={Button}
            aria-label='Save Cart'
            bg='gray.400'
            rounded='20px'
            display='flex'
            alignItems='center'
            justifyContent='center'
            p={2}
            _hover={{ '& svg': { color: '#FACC15' } }} // Using Chakra's hover style to target the SVG
          >
            <ImMenu3 className='text-white text-4xl h-6 w-6 transition-colors' />
          </MenuButton>
          <MenuList>
            <MenuItem
              as='a'
              href='http://localhost:3000/carts'
              value='savedCarts'
            >
              Carts
            </MenuItem>
            <MenuItem as='a' href='http://localhost:3000/purchases' value='purchases'>
              Purchases
            </MenuItem>
            <MenuItem
              as='button'
              onClick={handleLogout}
              value='logout'
            >
              Logout
            </MenuItem>
          </MenuList>
        </Menu>
      </div>
    </>
  );
};
