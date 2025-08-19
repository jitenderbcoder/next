'use client';
import { createContext, useContext } from "react";
import { useCheckAuthQuery } from '@/store/services/authService';
import { StoreModel } from '@/store/store';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';


const ProfileContext = createContext<any>(null);

export const ProfileProvider = ({ children }: { children: React.ReactNode }) => {
  const user = useSelector((state: StoreModel) => state.auth.user);
  const userId = user?.id
  console.log(user, ":>user98ujn")
  const { data, isLoading, refetch } = useCheckAuthQuery(undefined, {
    skip: !userId,
  });

  useEffect(() => {
    if (userId) {
      refetch();
    }
  }, [userId])

  const [profileData, setProfileData] = useState<any>(null);


  useEffect(() => {
    if (data?.user) {
      setProfileData(data.user);
    } else {
      setProfileData(null)
    }
  }, [data]);

  return (
    <ProfileContext.Provider value={{ profileData, isLoading, refetch }}>
      {children}
    </ProfileContext.Provider>
  );
}

export const useProfileData = () => useContext(ProfileContext);
