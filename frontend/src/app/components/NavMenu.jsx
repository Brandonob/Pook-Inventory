import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
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
import { FaSun, FaMoon } from 'react-icons/fa';
import { clearUser } from '../redux/slices/usersSlice';
import { toggleTheme } from '../redux/slices/themeSlice';

export const NavMenu = () => {
  const user = useSelector((state) => state.users.user);
  const darkMode = useSelector((state) => state.theme.darkMode);
  const isLoggedIn = !!user;
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
      <div className='fixed top-0 left-0 m-4'>
        <Menu>
          <MenuButton
            as={Button}
            aria-label='Save Cart'
            bg={darkMode ? 'gray.700' : 'gray.400'}
            rounded='20px'
            display='flex'
            alignItems='center'
            justifyContent='center'
            p={2}
            _hover={{ '& svg': { color: '#F7B578' } }}
          >
            <ImMenu3 className='text-white text-4xl h-6 w-6 transition-colors' />
          </MenuButton>
          <MenuList className='bg-white dark:bg-gray-800'>
            {isLoggedIn ? (
              <>
                <MenuItem 
                  as='a' 
                  href='http://localhost:3000/'
                  className='dark:text-white dark:hover:bg-gray-700'
                >
                  Home
                </MenuItem>
                {user?.isAdmin && (
                  <MenuItem
                    as='a'
                    href='http://localhost:3000/carts'
                    value='savedCarts'
                    className='dark:text-white dark:hover:bg-gray-700'
                  >
                    Carts
                  </MenuItem>
                )}
                <MenuItem 
                  as='a' 
                  href='http://localhost:3000/purchases' 
                  value='purchases'
                  className='dark:text-white dark:hover:bg-gray-700'
                >
                  Purchases
                </MenuItem>
                <MenuItem
                  as='button'
                  onClick={handleLogout}
                  value='logout'
                  className='dark:text-white dark:hover:bg-gray-700'
                >
                  Logout
                </MenuItem>
                <MenuItem
                  as='button'
                  onClick={() => dispatch(toggleTheme())}
                  className='dark:text-white dark:hover:bg-gray-700'
                >
                  {darkMode ? (
                    <div className="flex items-center">
                      <FaSun className="mr-2" /> Light Mode
                    </div>
                  ) : (
                    <div className="flex items-center">
                      <FaMoon className="mr-2" /> Dark Mode
                    </div>
                  )}
                </MenuItem>
              </>
            ) : (
              <MenuItem
                as='a'
                href='http://localhost:3000/login'
                value='login'
                className='dark:text-white dark:hover:bg-gray-700'
              >
                Login
              </MenuItem>
            )}
          </MenuList>
        </Menu>
      </div>
    </>
  );
};
