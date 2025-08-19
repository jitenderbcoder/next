'use client';
import { createContext, useContext } from "react";
import { useCheckAuthQuery } from '@/store/services/authService';
import { setLogout, setUser } from '@/store/slice/authSlice';
import { StoreModel } from '@/store/store';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCookies } from "cookies-next";


const ProfileContext = createContext<any>(null);

export const ProfileProvider = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useDispatch();
  const user = useSelector((state: StoreModel) => state.auth.user);
console.log(user,":>user09ijoijj")
  // const [hasInitialized, setHasInitialized] = useState(false);
  // const { isAuthenticated } = useSelector((state: StoreModel) => state.auth);

  // // ✅ This runs ONCE on app load, not on every route change
  // const { 
  //   data: authData, 
  //   error: authError, 
  //   isLoading,
  //   isSuccess 
  // } = useCheckAuthQuery(undefined, {
  //   skip: hasInitialized, // ✅ Skip after first successful check
  //   refetchOnMountOrArgChange: false, // ✅ Don't refetch on component remount
  //   refetchOnReconnect: false, // ✅ Don't refetch on network reconnect
  // });

  // useEffect(() => {
  //   if (isSuccess) {
  //     if (authData?.success && authData?.user) {
  //       dispatch(setUser({
  //         user: authData.user,
  //         isAuthenticated: true
  //       }));
  //     } else {
  //       dispatch(setLogout());
  //     }
  //     setHasInitialized(true); // ✅ Mark as initialized
  //   } else if (authError) {
  //     dispatch(setLogout());
  //     setHasInitialized(true);
  //   }
  // }, [authData, authError, isSuccess, dispatch]);




  const { data, isLoading, refetch } = useCheckAuthQuery(undefined);

  useEffect(() => {
    // if (userId) {
    refetch();
    // }
  }, [])

  const [profileData, setProfileData] = useState<any>(null);


  useEffect(() => {
    if (data?.user) {
      setProfileData(data.user);
    } else {
      setProfileData(null)
    }
  }, [data]);


  // Show loading only on initial app load
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div>Loading...</div>
      </div>
    );
  }

  return (
    <ProfileContext.Provider value={{ profileData, isLoading, refetch }}>
      {children}
    </ProfileContext.Provider>
  );
}

export const useProfileData = () => useContext(ProfileContext);
