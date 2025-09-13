import React, { createContext, useContext, useReducer } from 'react';

// User Context
const UserContext = createContext();

// User Reducer
const userReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
        isLoading: false,
      };
    
    case 'LOGOUT':
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        isLoading: false,
      };
    
    case 'SET_LOADING':
      return {
        ...state,
        isLoading: action.payload,
      };
    
    default:
      return state;
  }
};

// User Provider Component
export const UserProvider = ({ children }) => {
  const [userState, userDispatch] = useReducer(userReducer, {
    isAuthenticated: false,
    user: null,
    isLoading: false,
  });

  const login = (userData) => {
    userDispatch({ type: 'LOGIN', payload: userData });
    // Store user data in localStorage for persistence
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const logout = () => {
    userDispatch({ type: 'LOGOUT' });
    // Clear user data from localStorage
    localStorage.removeItem('user');
  };

  const setLoading = (loading) => {
    userDispatch({ type: 'SET_LOADING', payload: loading });
  };

  // Check for existing user data on mount
  React.useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        const userData = JSON.parse(storedUser);
        userDispatch({ type: 'LOGIN', payload: userData });
      } catch (error) {
        console.error('Error parsing stored user data:', error);
        localStorage.removeItem('user');
      }
    }
  }, []);

  const value = {
    ...userState,
    login,
    logout,
    setLoading,
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to use user context
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

export default UserContext;
